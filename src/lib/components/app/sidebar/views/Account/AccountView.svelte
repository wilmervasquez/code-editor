<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import { supabase } from "$lib/client/supabase/supabase";
  import BarTop from "../../BarTop.svelte";

  let email = $state('')
  let password = $state('')

  let ver = $state('none')

  async function onSend() {
    ver = 'verifiend'

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    const response = await fetch('/api/auth?/signUp', {
      method: 'POST',
      body: formData,
      headers: {
        'x-sveltekit-action': 'true'
      }
    });
    const data = await response.json();
    ver = 'none'
    console.log(response)

  }
</script>
<div class="view">
  <BarTop title="ACCOUNT" actions={[]}/>
  <div class="">
    <form action="" class="flex flex-col gap-2 p-2">
      <button class="flex items-center justify-center gap-2 w-full border border-neutral-700 rounded-lg p-1 pr-2 shadow-lg shadow-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
        Login with Google
      </button>
      <button class="flex items-center justify-center gap-2 w-full border border-neutral-700 rounded-lg p-1 pr-2 shadow-lg shadow-black">
        <svg width="20" height="20">
          <use href={TablerLinearIcons.BrandGithub} style="--stroke: white"/>
        </svg>
        Login with GitHub
      </button>
      <div class="h-[1px] bg-neutral-800 w-5/6 self-center"></div>
      <label class="flex items-center justify-center gap-2 w-full border border-neutral-700 rounded-lg p-1 shadow-lg shadow-black">
        <svg width="20" height="20">
          <use href={TablerLinearIcons.Email} style="--stroke: white"/>
        </svg>
        <input type="email" placeholder="Email" bind:value={email}>
      </label>
      <label class="flex items-center justify-center gap-2 w-full border border-neutral-700 rounded-lg p-1 shadow-lg shadow-black">
        <svg width="20" height="20">
          <use href={TablerLinearIcons.CloudUpload} style="--stroke: white"/>
        </svg>
        <input type="password" placeholder="Password" bind:value={password}>
      </label>
      <button on:click={onSend} class="flex items-center justify-center gap-2 w-full bg-neutral-900 border border-neutral-700 rounded-lg p-1 pr-2 shadow-lg shadow-black">
        {#if ver == 'verifiend'}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g><rect width="2" height="5" x="11" y="1" fill="#b593f0" opacity=".14"/><rect width="2" height="5" x="11" y="1" fill="#b593f0" opacity=".29" transform="rotate(30 12 12)"/><rect width="2" height="5" x="11" y="1" fill="#b593f0" opacity=".43" transform="rotate(60 12 12)"/><rect width="2" height="5" x="11" y="1" fill="#b593f0" opacity=".57" transform="rotate(90 12 12)"/><rect width="2" height="5" x="11" y="1" fill="#b593f0" opacity=".71" transform="rotate(120 12 12)"/><rect width="2" height="5" x="11" y="1" fill="#b593f0" opacity=".86" transform="rotate(150 12 12)"/><rect width="2" height="5" x="11" y="1" fill="#b593f0" transform="rotate(180 12 12)"/><animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"/></g></svg>
          Verificando
        {:else if ver === 'check'}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#0284c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"/></svg>
          Se envio a su correo
        {:else if ver === 'error'}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#db2777" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-6.489 5.8a1 1 0 0 0-1.218 1.567L10.585 12l-1.292 1.293l-.083.094a1 1 0 0 0 1.497 1.32L12 13.415l1.293 1.292l.094.083a1 1 0 0 0 1.32-1.497L13.415 12l1.292-1.293l.083-.094a1 1 0 0 0-1.497-1.32L12 10.585l-1.293-1.292l-.094-.083z"/></svg>
          Ocurrio un error
        {:else}
          Continue with email
        {/if}
      </button>
    </form>
  </div>
</div>
<style>

</style>