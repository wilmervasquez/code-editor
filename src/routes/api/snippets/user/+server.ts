import { error as err } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/server/supabase/supabase';

export const GET: RequestHandler = async ({ url }) => {
	const min = Number(url.searchParams.get('min') ?? '0');
	const max = Number(url.searchParams.get('max') ?? '1');

  let { data: snippets, error } = await supabase
  .from('snippets')
  .select('id')

  if (error) {
    return err(404, 'Not Found');
  }

	return new Response(JSON.stringify(snippets), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const POST: RequestHandler = async ({ request, url }) => {
  const formData = await request.formData();
  const xml = formData.get("xml") as string;
  const css = formData.get("css") as string;
  const javascript = formData.get("javascript") as string;

  // if (error) {
  //   return err(404, 'Not Found');
  // }

	return new Response(null, { status: 200 });
};