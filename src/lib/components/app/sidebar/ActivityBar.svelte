<script lang="ts">
  import {base} from "$app/paths";
  import ButtonActivityBar from '$lib/components/app/sidebar/ButtonActivityBar.svelte';
  import type { Component } from 'svelte';
  import type { Provider } from "./ActivityBar";


  interface Props {
    provider: Provider[];
  }

  let { provider }: Props = $props();

  let openSidebar: boolean = $state(false);
  let tabOpenID: number = $state(0);

  let View: Component = $derived(provider[tabOpenID].view);

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

</script>

<div class="sidebar grid overflow-hidden h-screen bg-neutral-900" class:open={openSidebar}>
  <!-- activity-bar -->
  <div class="grid content-between justify-between">
    <!-- activity-bar-provider -->
    <div class="grid top">
      {#each provider as {icon, position},idTab}
        {#if position == 'TOP' }
          <ButtonActivityBar icon={icon} active={idTab == tabOpenID && openSidebar} onclick={()=>openS(idTab)}/>
        {/if}
      {/each}
    </div>
    <!-- activity-bar-actions -->
    <div class="bottom grid grid-col-1">
      {#each provider as {icon, position},idTab}
        {#if position == 'BOTTOM' }
          <ButtonActivityBar icon={icon} active={idTab == tabOpenID && openSidebar} onclick={()=>openS(idTab)}/>
        {/if}
      {/each}
    </div>
  </div>
  <div class="grid bg-neutral-800 overflow-y-scroll scrollbar-none">
    <View/>
  </div>
</div>

<style>
  .sidebar{
    background-color: #1E1E1E;
    grid-template-columns: auto 0px;
  }
  .sidebar.open{
    grid-template-columns: auto 240px;
  }
  .top{
    grid-template-rows: 1fr;
  }

</style>