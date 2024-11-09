<script lang="ts">
  import Tab from "$lib/components/Tab.svelte";
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import type { Action } from "../../BarTop";
  import BarTop from "../../BarTop.svelte";

  type Payload = string | PayloadError | Array<Tab> | string | number

  interface PayloadError {
    column: number,
    line: number
    message: string
  }

  interface ConsoleData {
    type: string,
    payload: Payload
  }

  const actions: Action[] = [{
    icon: TablerLinearIcons.BrandGithub,
    onclick() {

    },
  }]

  let outs: ConsoleData[] = $state([])

  const ref = (ev: MessageEvent) => {
    const { type, payload } = ev.data.console as ConsoleData;

    outs.push({type,payload});
    if (type == 'system' && payload == 'clear') {
      outs = []
    }
  }

  let height = $state(0);

</script>
<svelte:window onmessage={ref}/>
{#snippet formatPayload(payload: Payload[])}
  {#each payload as data}
    {#if typeof data === 'number' || typeof data === 'boolean'}
      <span class="text-purple-400">{data}&nbsp;</span>
    {:else if typeof data === 'string'}
      <span class="text-amber-400">{data}&nbsp;</span>
    {:else}
      <span class="text-gray-400">{JSON.stringify(data)}</span>
    {/if}
  {/each}
{/snippet}
<div class="view grid">
  <BarTop title="CONSOLA" {actions}/>
  <div class="overflow-hidden" bind:clientHeight={height}>
    <div class="flex flex-col text-sm p-1 gap-1 overflow-scroll scrollbar scroll-y" style:height="{height}px">
      {#each outs as {type, payload}}
        {#if type == 'log:warn'}
          <div class="flex items-center px-1 gap-1 font-mono  bg-opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0zM12 9h.01"/><path d="M11 12h1v4h1"/></g></svg>
            {@render formatPayload(payload as any[])}
          </div>
        {:else if type == 'log:error'}
          <div class="flex items-center px-1 gap-1 font-mono  bg-opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path class="fill-red-400" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-6.489 5.8a1 1 0 0 0-1.218 1.567L10.585 12l-1.292 1.293l-.083.094a1 1 0 0 0 1.497 1.32L12 13.415l1.293 1.292l.094.083a1 1 0 0 0 1.32-1.497L13.415 12l1.292-1.293l.083-.094a1 1 0 0 0-1.497-1.32L12 10.585l-1.293-1.292l-.094-.083z"/></svg>
            {@render formatPayload(payload as any[])}
          </div>
        {:else if type == 'log:info'}
          <div class="flex items-center px-1 gap-1 font-mono  bg-opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01"/></svg>
            {@render formatPayload(payload as any[])}
          </div>
        {:else if type == 'error'}
          {@const [typeError, messageError] = (payload as PayloadError).message.split(':').map(t => t.trim())}
          <div class="font-mono bg-red-500 bg-opacity-20 rounded-md">
            <div class="flex items-center px-1 gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0" width="16" height="16" viewBox="0 0 24 24"><path fill="none" class="stroke-red-300" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V8a3 3 0 0 1 6 0v1M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1-10 0v-3a6 6 0 0 1 1-3m-5 4h4m10 0h4m-9 7v-6m-8 5l3.35-2M20 19l-3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4"/></svg>
              <span class="text-red-300">{typeError}</span>
            </div>
            <div class="px-1 pb-1">
              {messageError}
              <div class="text-xs">
                <span class="">Ln</span> {(payload as PayloadError).line}, <span>Col</span> {(payload as PayloadError).column}
              </div>
            </div>
          </div>
        {:else}
          <div class="flex items-center gap-1 px-1 font-mono">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#8fd035" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/></svg>
            {@render formatPayload(payload as any[])}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
<style>
  .view {
    grid-template-rows: auto 1fr;
  }
</style>