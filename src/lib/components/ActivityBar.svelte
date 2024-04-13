<script lang="ts">
  import {base} from "$app/paths";

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
  $: view = provider[tabOpenID];
  console.log(view)
</script>

<div class="grid sidebar overflow-hidden" class:open={openSidebar}>
  <!-- activity-bar -->
  <div class="grid grid-col-1 bg-[#1e1e1e] content-between">
    <!-- activity-bar-provider -->
    <div class="grid top">
      {#each provider as {icon},idTab}
        <button class="p-2 item relative" on:click={()=> openS(idTab)} class:active={idTab == tabOpenID && openSidebar }>
          <svg width="24" height="24" >
            <use href="{base}/icons/pkg.tabler.svg#{icon}"/>
          </svg>
        </button>
      {/each}
    </div>
    <!-- activity-bar-actions -->
    <div class="bottom grid grid-col-1">
      {#each providerActions as {icon},id}
        <button class="item p-2">
          <svg width="24" height="24">
            <use href="{base}/icons/pkg.tabler.svg#{icon}"/>
          </svg>
        </button>
      {/each}
    </div>
  </div>
  <div class="sidebar-content overflow-y-scroll scrollbar-none">
    <svelte:component this={view.view}/>
  </div>
</div>

<style>
  .sidebar{
    background-color: hsl(0, 0%, 14%);
    grid-template-columns: auto 0px;
  }
  .sidebar.open{
    grid-template-columns: auto 220px;

  }
  .top{
    grid-template-columns: 1fr;
  }
  .item svg{
    --color:gray;
  }
  .item:hover > svg, .item.active > svg {
    --color:white
  } 
  .item.active::before{
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    left: 0;
    top: 0;
  }
</style>