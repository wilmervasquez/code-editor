import { supabase } from '$lib/server/supabase/supabase';

export async function POST({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (email === null) {
    return new Response(null, {status: 400})
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email as string,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
    },
  })

  console.log(error)
  if (error) {
    return new Response(null, { status: 400});
  }
  return new Response(null, { status: 200})

}