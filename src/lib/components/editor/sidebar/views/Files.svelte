<script lang="ts">
  import { HistorySnippet } from "./SnippetHistory";

  let statusUpload = $state('none');

async function uploadSnippet()  {
    const formData = new FormData()
    const snp = HistorySnippet.data.get(HistorySnippet.selectKey)
    if (snp == null) {
      return
    }

    formData.append('xml', snp.xml)
    formData.append('css', snp.css)
    formData.append('js', snp.js)

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
<div class="flex flex-col gap-2">
  <div class="flex">
    <h2 class="text-xs p-1 bg-neutral-900">MANAGER</h2>
  </div>
  <div class="flex flex-col text-sm">
    <a class="flex items-center gap-2 p-1" href="/snippets">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm0 9l8-4.5M12 12v9m0-9L4 7.5"/></svg>
      Snippets
    </a>
    <button class="flex p-2 gap-2" onclick={uploadSnippet}>
      {#if statusUpload == 'loading'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0891b2" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#0891b2" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
      {:else if statusUpload == 'error'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#e26a6a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V8a3 3 0 0 1 6 0v1M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1-10 0v-3a6 6 0 0 1 1-3m-5 4h4m10 0h4m-9 7v-6m-8 5l3.35-2M20 19l-3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4"/></svg>
      {:else if statusUpload == 'load'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#8fd035" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.293 5.953a1 1 0 0 0-1.32-.083l-.094.083L11 12.585l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#8fd035" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"/></svg>
      {/if}
      {#if statusUpload == 'loading'}
        <span>Publicando...</span>
      {:else if statusUpload == 'error'}
        <span class="text-red-300">Ocurrio un error al subir</span>
      {:else if statusUpload == 'load'}
        <span class="text-green-200">Se publico su snippet</span>
      {:else}
        <span class="text-sm">Share</span>
      {/if}
    </button>
  </div>
  <div class="flex flex-wrap gap-2 p-2">
    <button class="text-xs bg-green-600 border border-green-400 px-3 py-1 rounded-lg shadow-sm">DEPLOY</button>
    <button class="text-xs bg-orange-900 border border-orange-800 px-3 py-1 rounded-lg shadow-sm">RELOAD</button>
    <button class="text-xs bg-blue-900 border border-blue-800 px-3 py-1 rounded-lg shadow-sm">CREATE</button>

  </div>
</div>
<style>

</style>