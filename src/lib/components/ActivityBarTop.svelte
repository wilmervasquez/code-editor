<script lang="ts">
  import {base} from "$app/paths";
  import { codeTitle } from "$lib/store";
  import Tab from "./Tab.svelte";

  interface Provider {
    icon: string
    view: any
  }
  interface ProviderActions {
    icon: string
  }
  export let provider: Provider[] = [];
  export let providerActions: ProviderActions[] = [];

  let openSidebar: boolean = false;
  let tabOpenID = 0;

  function openS(id:number) {
    if (openSidebar) {
      if (id === tabOpenID) {
        
        openSidebar = false
      }
    } else {
      openSidebar = true
    }
    tabOpenID = id;
  }
  
  let statusUpload = 'none';

  async function uploadSnippet()  {
    const formData = new FormData()
    formData.append('xml', localStorage.getItem('editor.xml') ?? '<h1>Hola<h1>')
    formData.append('css', localStorage.getItem('editor.xml') ?? '')
    formData.append('js', localStorage.getItem('editor.xml') ?? '')

    statusUpload = 'loading'
    const response = await fetch("/api/snippets", {
      method: "POST",
      body: formData,
    });
    console.log(response)
    if (response.ok) {
      statusUpload = 'load'
    } else {
      statusUpload = 'error'
    }

    const i = setTimeout(() => {
      statusUpload = 'none'
      clearTimeout(i)
    }, 2000);
  }
</script>

<div class="sidebar flex justify-between overflow-hidden" class:open={openSidebar}>
  <div class="left flex items-center py-2">
    <Tab/>
    <Tab/>
    <Tab/>
    <Tab/>
    
  </div>

  <div class="flex items-center gap-3">
    <a href="/snippets">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#0891b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4H3v16h4M17 4h4v16h-4m-9-4h.01M12 16h.01M16 16h.01"/></svg>
    </a>
    <button class="p-2" on:click={uploadSnippet}>
      {#if statusUpload == 'loading'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0891b2" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#0891b2" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
      {:else if statusUpload == 'error'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#e26a6a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V8a3 3 0 0 1 6 0v1M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1-10 0v-3a6 6 0 0 1 1-3m-5 4h4m10 0h4m-9 7v-6m-8 5l3.35-2M20 19l-3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4"/></svg>
      {:else if statusUpload == 'load'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#8fd035" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.293 5.953a1 1 0 0 0-1.32-.083l-.094.083L11 12.585l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#8fd035" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"/></svg>
      {/if}
    </button>
   </div>
</div>

<style>
  .sidebar{
    background-color: hsl(218, 14%, 14%);
    grid-template-rows: auto 0px;
  }
  .sidebar.open{
    grid-template-rows: auto 220px;

  }
 
</style>