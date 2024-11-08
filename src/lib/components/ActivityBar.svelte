<script lang="ts">
  import {base} from "$app/paths";
  import ButtonActivityBar from "./ButtonActivityBar.svelte";

  interface Provider {
    icon: string
    view: any
  }
  interface ProviderActions {
    icon: string
  }

  export let provider: Provider[] = [];

  let openSidebar: boolean = false;
  let tabOpenID = $state(0);
  let view = provider[tabOpenID];

  function openS(id:number) {
    if (openSidebar) {
      if (id === tabOpenID) {
        openSidebar = false
      }
    } else {
      openSidebar = true
    }
    tabOpenID = id;
    view = provider[tabOpenID];
  }

</script>

<div class="sidebar grid overflow-hidden h-screen bg-neutral-900" class:open={openSidebar}>
  <!-- activity-bar -->
  <div class="grid content-between justify-between">
    <!-- activity-bar-provider -->
    <div class="grid top">
      {#each provider as {icon, position},idTab}
        {#if position == 'TOP' }
          <ButtonActivityBar icon={icon} active={idTab == tabOpenID && openSidebar} on:click={()=>openS(idTab)}/>
        {/if}
      {/each}
    </div>
    <!-- activity-bar-actions -->
    <div class="bottom grid grid-col-1">
      {#each provider as {icon, position},idTab}
        {#if position == 'BOTTOM' }
          <ButtonActivityBar icon={icon} active={idTab == tabOpenID && openSidebar} on:click={()=>openS(idTab)}/>
        {/if}
      {/each}
    </div>
  </div>
  <div class="grid bg-neutral-800 overflow-y-scroll scrollbar-none">
    <svelte:component this={view.view}/>
  </div>
</div>

<style>
  .sidebar{
    background-color: #1E1E1E;
    grid-template-columns: auto 0px;
  }
  .sidebar.open{
    grid-template-columns: auto 220px;
  }
  .top{
    grid-template-rows: 1fr;
  }

</style>