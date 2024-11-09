<script lang="ts">
  import type { Action } from "./BarTop";

  interface Props {
    title: string
    actions: Action[]
  }
  const { title, actions }: Props = $props();
</script>
<div class="flex items-center sticky top-0 bg-neutral-900 justify-between px-1">
  <p class="text-neutral-400 text-xs font-bold pl-2 font-serif">{title}</p>
  <div class="flex">
    <button class="p-1" title="Preview" aria-label=".">
      <svg width="20" height="20"></svg>
    </button>
    {#each actions as action}
      <button onclick={action.onclick} class="p-1" title="Preview" aria-label="Open View HTML">
        <svg width="20" height="20">
          <use href={action.icon} style="--color: "/>
        </svg>
      </button>
    {/each}
  </div>
</div>
<style>
  button svg {
    --stroke: hsl(0, 0%, 50%)
  }
  button:hover svg {
    --stroke: hsl(0, 0%, 70%)
  }
</style>