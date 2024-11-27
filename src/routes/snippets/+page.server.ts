import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

const prisma = new PrismaClient()

export const load: PageServerLoad = async () => {
  const snippets = await prisma.snippet.findMany({
    include: {
      user: {
        select: {
          name: true
        }
      }
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })

  // await prisma.user.create({
  //   data: {
  //     email: 'hhhhhhh@login',
  //     name: 'juan megas',
  //   }
  // });
	return { snippets };
};


export const actions = {
	delete: async ({cookies, request}) => {
    const data = await request.formData();
		const id = data.get('id');

    console.log(id)

    await prisma.snippetCategory.create({data: {
      name: `Nio ${new Date().getMinutes()} ${Math.random()}`,

    }});

		return { success: false }
	}
} satisfies Actions;