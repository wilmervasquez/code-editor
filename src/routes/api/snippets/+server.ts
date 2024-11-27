import { SnippetModel } from "$lib/server/models/SnippetModel.js";
import { PrismaClient } from "@prisma/client";
import { json } from "@sveltejs/kit";

const prisma = new PrismaClient()

export async function GET() {
  let snippets
  try {
    snippets = await new SnippetModel().all();
    return json(snippets);
  } catch (error) {
    return new Response(null, { status: 404});
  }
}

export async function POST({ request }) {
  console.log(12)
  const formData = await request.formData();
  const xml = formData.get("xml") as string;
  const css = formData.get("css") as string;
  const script = formData.get("js") as string;

  try {
    await prisma.snippet.create({data: {
      title: '',
      userId: 1,
      snippetCategoryId: 1,
      xml,
      css,
      script,
    }});

    return new Response(null, {status: 200});
  } catch (error) {
    console.log(JSON.stringify(error))
	  return new Response(null, {status: 408});
  }
}

export async function DELETE({ request }) {
  const formData = await request.formData();
  const id = Number(formData.get("id"));
  try {
    await new SnippetModel().delete(id)
    return new Response(null, {status: 204});
  } catch (error) {
	  return new Response(null, {status: 403});
  }

}