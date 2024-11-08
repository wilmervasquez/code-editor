<!-- @migration-task Error while migrating Svelte code: `<button>` is invalid inside `<button>` -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { HistorySnippet } from "./SnippetHistory";
  import { editorCSSValue, editorHTMLValue, editorJSValue } from "$lib/store";

  const dispatch = createEventDispatcher()

  let editable = false;

  export let name: string
  export let id: string
  export let active: boolean

  function onDelete() {
    dispatch('remove')
  }
  function onSelect() {
    HistorySnippet.selectSnippet(id)
    dispatch('select')
  }

  function onEdit(event: MouseEvent) {
    event.stopPropagation();

    if (editable) {
      HistorySnippet.renameName(id, name)
    }
    editable = !editable
  }

</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="snp flex items-center justify-between hover:bg-neutral-900 gap-2 cursor-pointer px-2 py-1 pr-1" onclick={onSelect} class:active>
  <div class="flex items-center gap-2">
    <div class="w-2 h-2 rounded-full {editable ? 'bg-orange-300':'bg-green-300'}"></div>
    {#if editable}
      <input type="text" class="bg-transparent z-10 text-sm grow" bind:value={name} style:width="140px">
    {:else}
      <p class="text-sm grow text-ellipsis overflow-hidden text-left" style:width="140px">{name}</p>
    {/if}
  </div>
  <div class="actions flex items-center opacity-0">
    <button class="" onclick={onEdit}>
      {#if editable}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="hsl(150,100%,50%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="hsl(190,50%,40%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/></g></svg>
      {/if}
    </button>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="" data-id={id} onclick={onDelete}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="hsl(0,100%,70%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>

</div>
<style>
  .active {
    background-color: rgb(27, 32, 51);
  }
  .snp:hover .actions {
    opacity: 1;
  }
</style>