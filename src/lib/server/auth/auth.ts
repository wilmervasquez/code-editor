import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const SECRET_JWT_KEY = 'hssssssssssssssssshdjsks'
const SALT_ROUNDS = 10;

const prisma = new PrismaClient()

interface AuthI {
  email: string
  password: string
}

class Auth {
  static valid ({email, password}: AuthI) {
    console.log(email, password)
    if (typeof email !== 'string') throw new Error('Username must be a string')
    if (email.length < 3) throw new Error('Username must be at least 3 characters long')

    if (typeof password !== 'string') throw new Error('Password must be a string')
    if (password.length < 6) throw new Error('Password must be at least 6 characters long')
  }

  static async getUser({email, password}: AuthI ) {
    try {
      Auth.valid({email, password});
    } catch (error) {
      return [null, error]
    }

    const user = await prisma.user.findFirst({
      where: {
        email,  // El email que deseas buscar
      },
      select: {
        id: true,
        name: true,  // Solo seleccionamos el nombre del usuario
        email: true,  // También seleccionamos el email
        password: true
      }
    });

    if (!user) return [null, new Error('username does not exist')]

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return [null, new Error('Password is invalid')]

    user.password = null;

    const token = jwt.sign({ email: user.email, id: user.id }, SECRET_JWT_KEY, { expiresIn: '1h' })

    return [{ token, user }, null]

  }

  static async createUser({email,password}: AuthI) {
    try {
      Auth.valid({email, password});
    } catch (error) {
      return [null, error]
    }

    try {

      const user = prisma.user.findFirst({where: {
          email,  // El email que deseas buscar
        },
        select: {
          id: true,
          name: true,  // Solo seleccionamos el nombre del usuario
          email: true,  // También seleccionamos el email
          password: true
        }
      });

      if (!user) return [null, new Error('Email already exists')]

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
      const newUser = await prisma.user.create({ data: {
        email,
        password: hashedPassword
      }})

      return newUser.id;

    } catch (error) {
      return [null, error];
    }
  }
  verify(token: string) {
    try {
      return jwt.verify(token, SECRET_JWT_KEY)
    } catch(err ) {
      return {message: 'Errror al verificar'}
    }
  }
}

export { Auth }