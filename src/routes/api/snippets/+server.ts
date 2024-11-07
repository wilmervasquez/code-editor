import { SnippetModel } from "$lib/server/models/SnippetModel.js";
import { json } from "@sveltejs/kit";

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
  const js = formData.get("js") as string;

  try {
    await new SnippetModel().insert({xml, css, js})
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