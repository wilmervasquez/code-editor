<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import type { Action } from "../../BarTop.d.ts";
  import BarTop from "../../BarTop.svelte";
  import CardHistory from "./CardHistory.svelte";
  import { getSnnipetContext } from "./snippets.svelte.js";

  const snippet = getSnnipetContext()

  function openPreview() {
    snippet.openPreview()
  }

  const actions: Action[] = [{
    icon: TablerLinearIcons.Plus,
    onclick() {
      snippet.createNew()
    },
  },{
    icon: TablerLinearIcons.WindowMaximize,
    onclick() {
      openPreview()
    },
  }];

</script>
<div class="">
  <BarTop title="HISTORY" {actions}/>
  <div class="flex flex-col p-1" >
    {#each snippet.snippets as {id, label, createdAt, updatedAt} (id)}
      <CardHistory {label} id={id} active={id == snippet.selectedSnippetId} {createdAt} {updatedAt} onremove={() => {
        snippet.remove(id)
      }} onselect={()=> {
        snippet.selectSnippet(id)
      }}/>
    {/each}
    <div class="flex p-1 gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3m-4-7v4M8 3v4m-4 4h10"/><path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M18 16.5V18l.5.5"/></g></svg>
      <span class="text-sm text-cyan-500 font-bold"></span>
    </div>
    <div class="p-1">
    </div>
  </div>
</div>
<style>

</style>