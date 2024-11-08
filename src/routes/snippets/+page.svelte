<script lang="ts">
  import { getStructHTML } from "$lib/util";

  interface Snippet {
    xml: string
    css: string
    js: string
  }

  let snippets: Snippet[] = $state([]);

  async function getSnippets() {
    const res = await fetch('/api/snippets');
    snippets = await res.json()
  }

  getSnippets()

  async function deleteSnippet(id: string) {
    const formData = new FormData()
    formData.append('id', id)

    const response = await fetch("/api/snippets", {
      method: "DELETE",
      body: formData,
    });
    console.log(response)
    getSnippets()
  }
</script>
<header class="flex items-center justify-between sticky top-0">
  <h1 class="p-2 text-2xl font-bold">Snippets {snippets.length}</h1>
  <div class="flex px-4">
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M9 17h3m4 5l5-5m0 4.5V17h-4.5"/></svg>
    </a>
  </div>
</header>
<div class="cont grid p-3 gap-3">
  {#each snippets as {id, xml, css, js}}
    <article class="bg-neutral-800 rounded-lg overflow-hidden">
      <div class="flex items-center justify-between px-1">
        <div class="flex items-center gap-2 py-1">
          <div class="avatar size-6">
            <img src="https://avatar.iran.liara.run/public/{Math.round(Math.random()*100)}" alt="">
          </div>
          <div class="">
            <div class="text-sm">Carlos</div>
            <div class="text-xs">April 12, 2024</div>
          </div>
        </div>
        <div class="flex">
          <a href="/" class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h.01M6.453 6.474L3 12l5 8m8-16l5 8l-1.917 3.067m-1.548 2.477L16 20M3 3l18 18"/></svg>
          </a>
          <a class="p-2" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 4v4C6.425 9.028 3.98 14.788 3 20c-.037.206 5.384-5.962 10-6v4l8-7z"/></svg>
          </a>
          <!-- DELETE -->
          <button onclick={() => deleteSnippet(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#e26a6a" d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6zm-6-4a2 2 0 0 1 2 2a1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2z"/></svg>
          </button>
        </div>
      </div>
      <iframe class="aspect-video w-full block" srcdoc={getStructHTML(xml,css,js)} frameborder="0" title="Hola"></iframe>
    </article>
  {/each}
</div>
<style>
  header {
    background: rgba(0, 0, 0, 0.342);
    backdrop-filter: blur(10px);
  }
  .cont {
    grid-template-columns: repeat(auto-fill, minmax(500px,1fr));
  }
</style>