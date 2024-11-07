<script lang="ts">
  let statusSeac = ''
  let pkgs = []
  let ghPkgs = []

  async function searchPkg(packageName: string) {
    if (packageName.length < 2) return

    statusSeac = 'loading'
    const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${packageName}`)
    const res2 = await fetch(`https://api.github.com/search/repositories?q=${packageName}+in:name`)
    if (!res.ok) return
    const {objects} = await res.json()
    pkgs = objects

    const { items } = await res2.json()
    ghPkgs = items
    statusSeac = ''
  }

</script>
<div class="">
  <div class="flex p-1 bg-neutral-900 text-sm sticky top-0">
    PACKAGES
    <div class="flex">

    </div>
  </div>
  <div class="flex items-center gap-2 p-1">
    {#if statusSeac == 'loading'}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#8fd035" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#8fd035" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#0891b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"/></svg>
    {/if}
    <input type="text" placeholder="Buscar packages" class="text-sm" on:input={(e)=> searchPkg(e.target.value)}>
  </div>
  <div class="grid">
    {#each pkgs as pkg}
      <article class="flex p-1 cursor-pointer">
        <div class="flex gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#a37ee2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm0 9l8-4.5M12 12v9m0-9L4 7.5"/></svg>
          <div class="flex flex-col">
            <span>{pkg.package.name}</span>
            <span class="text-xs text-neutral-500">v{pkg.package.version} - {Object.keys(pkg.package.links).join('-')}</span>
          </div>
        </div>
        <div class="">

        </div>
      </article>
      {#if 'cdn' in pkg.package.links}}
        <div class="flex">hola</div>
      {/if}
    {/each}
    {#each ghPkgs as gh}
      <article>
        <div class="flex justify-between">
          <div class="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-9v6m0 6v6"/></svg>
            <span class="text-sm">{gh.full_name}</span>
          </div>
          <a href="https://cdn.skypack.dev/{gh.full_name}/@latest" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 19l2.757-7.351A1 1 0 0 1 8.693 11H21a1 1 0 0 1 .986 1.164l-.996 5.211A2 2 0 0 1 19.026 19za2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v2"/></svg>
          </a>
        </div>
      </article>
    {/each}
  </div>

</div>
<style>

</style>