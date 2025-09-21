<script lang="ts">
  import { getSnnipetContext } from "./snippets.svelte";

  
  interface Props {
    createdAt: Date
  }
  
  let{ id, label,  active, createdAt, updatedAt, onremove, onselect}: Props = $props();
  
  const snippet = getSnnipetContext()

  let editable = $state(false);

  function onDelete() {
    onremove()
  }

  function onSelect() {
    snippet.selectSnippet(id)
    onselect()
  }

  function onEdit(event: MouseEvent) {
    event.stopPropagation();

    if (editable) {
      snippet.renameName(id, label)
    }
    editable = !editable
  }

</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="snp flex relative items-center justify-between hover:bg-teal-950 gap-2 cursor-pointer border-neutral-700 px-2 py-1 pr-1 rounded-lg {active && 'bg-teal-900'}" style="animation-delay: {Math.random()*0.2}s;" onclick={onSelect}>
  <div class="flex items-center gap-2">
    <div class="w-2 h-2 rounded-full {editable ? 'bg-orange-300':'bg-green-300'}"></div>
    <div class="">
      {#if editable}
        <input type="text" class="bg-transparent z-10 text-sm grow" bind:value={label} style:width="140px">
      {:else}
        <p class="text-sm grow text-ellipsis overflow-hidden text-left" style:width="140px">{label} </p>
      {/if}
      <span class="text-xs text-zinc-400">{createdAt.toLocaleString('en', {minute:'2-digit', hour: '2-digit', 'day': 'numeric', month: 'short', hour12: false})}</span> -
      <span class="text-xs text-zinc-400">{updatedAt.toLocaleString('en', {minute:'2-digit', hour: '2-digit', 'day': 'numeric', month: 'short', hour12: false})}</span>
    </div>
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
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="hsl(0,100%,70%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg> -->
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
      <!-- <Menu/> -->
    </button>
  </div>
</div>
<style>
  @import 'tailwindcss'

  .snp:hover .actions {
    opacity: 1;
  }
  
  .snp {
    animation: in-o .3s linear forwards;
    filter: blur(5px);
  }

  @keyframes in-o {
    0%,40%,80% {
      filter: blur(2px);
    }
    20%,60% {
      filter: blur(5px);
    }

    100% {
      filter: blur(0);
    }
  }
</style>