<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import type { FormEventHandler } from "svelte/elements";
  import type { Action } from "../../BarTop.d.ts";
  import BarTop from "../../BarTop.svelte";
  import FromNpmPkg from "./FromNPMPkg.svelte";
  import FromGitHubPkg from "./FromGitHubPkg.svelte";

  interface GitHubPackages {
    id: number
    full_name: string
  }

  interface Package {
    name: string
    version: string
    links: Record<string, string>
  }

  interface PackageObjects {
    id: number
    package: Package
  }

  let value = $state('')
  let statusSearch = $state('.')
  let pkgs: PackageObjects[] = $state([])
  let ghPkgs: GitHubPackages[] = $state([])

  async function search(packageName: string) {
    console.log(packageName)
    if (packageName.length < 3) return

    statusSearch = 'loading'
    const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${packageName}`)
    const res2 = await fetch(`https://api.github.com/search/repositories?q=${packageName}+in:name`)
    if (!res.ok) return
    const { objects } = await res.json() as { objects: PackageObjects[]};
    pkgs = objects

    const { items } = await res2.json() as { items: GitHubPackages[]};
    ghPkgs = items
    console.log(items)
    statusSearch = ''
  }

  $effect(() => {
    search(value);
  })

  const actions: Action[] = [{
    icon: TablerLinearIcons.BrandGithub,
    onclick() {

    },
  }]

  let clientWidth = $state(0)
  
</script>
<div class="view grid">
  <BarTop title="PACKAGES" {actions}/>
  <div class="grid grid-cols-1 w-full p-1" bind:clientWidth>
    <div class="flex items-center gap-2 p-1 border border-neutral-700">
      {#if statusSearch == 'loading'}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#8fd035" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#8fd035" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#0891b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"/></svg>
      {/if}
      <input type="text" placeholder="Buscar packages" class="text-sm" bind:value>
    </div>
  </div>
  <div class="grid grid-cols-1" style:width="{clientWidth}px">
    {#each ghPkgs as gh (gh.id)}
      <FromGitHubPkg fullName={gh.full_name} />
    {/each}
    {#each pkgs as pkg (pkg.id)}
      <FromNpmPkg name={pkg.package.name} version={pkg.package.version} links={pkg.package.links}/>
    {/each}
  </div>

</div>
<style>
  .view {
    grid-template-rows: auto auto 1fr;
  }
</style>