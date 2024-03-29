<script lang="ts">
	import { base } from "$app/paths";
	import SvgUse from "$lib/components/SvgUse.svelte";

  export let provider: {icon: string}[] = [];

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
  $: content = provider[tabOpenID].icon;
</script>

<div class="grid sidebar" class:open={openSidebar}>
  <!-- activity-bar -->
  <div class="grid grid-col-1 bg-[hsl(0,0%,16%)] content-between">
    <!-- activity-bar-top -->
    <div class="grid top">
      {#each provider as {icon},idTab}
        <button class="p-2" on:click={()=> openS(idTab)}>
          <SvgUse size={24} src="{base}/icons/pkg.tabler.svg#{icon}" color={idTab == tabOpenID && openSidebar ? "white" : "gray"}/>
        </button>
      {/each}
    </div>
    <div class="bottom grid grid-col-1">
      {#each provider as {icon},idTab}
        <button class="p-2" on:click={()=> openS(idTab)}>
          <SvgUse size={24} src="{base}/icons/pkg.tabler.svg#{icon}" color={idTab == tabOpenID && openSidebar ? "white" : "gray"}/>
        </button>
      {/each}
    </div>
  </div>
  <div class="sidebar-content">
    {content}
  </div>
</div>

<style>
  .sidebar{
    background-color: rgb(56, 56, 56);
    grid-template-columns: auto 0px;
  }
  .sidebar.open{
    grid-template-columns: auto 220px;

  }
  .top{
    grid-template-columns: 1fr;
  }
</style>