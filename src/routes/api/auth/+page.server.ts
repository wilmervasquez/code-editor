import { Auth  } from '$lib/server/auth/auth.js';
import { fail, type Actions } from '@sveltejs/kit';
import type { ActionData } from '../../snippets/$types';

export const actions = {
	signIn: async ({cookies, locals, request}) => {
    const data = await request.formData();

    const email = data.get('email') as string
    const password = data.get('email') as string

    try {
      const [user, err] = await Auth.getUser({ email, password});
      if (err === null) throw err;

      cookies.set('access_token', user.token, {
        path: '/',
        httpOnly: true, // la cookie solo se puede acceder desde el servidor
        secure: process.env.NODE_ENV === 'PRODUCTION', // la solo se puede acceder en https
        sameSite: 'strict', // la cookie solo se puede acceder en el mismo dominio
        maxAge: 1000 * 60 * 60 // tiempo de validez de la cookie 1h
      });

      return { success: true}

    } catch (error) {
      return fail(400, { email, missing: true });
    }
	},
	signUp: async ({cookies, locals, request}) => {
    const data = await request.formData();

    const email = data.get('email') as string
    const password = data.get('password') as string

    try {
      const user = await Auth.createUser({ email, password});

      return { success: true}

    } catch (error) {
      return fail(400, { email, missing: true });
    }
	},
	logout: async ({cookies, locals, request}) => {
    cookies.delete('access_token', { path: '/' });
		// locals.user = null;
	}
} satisfies Actions;