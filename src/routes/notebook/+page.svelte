<script lang="ts">
  import Editor from "./Editor.svelte";

  let notebooks = $state([{value:'const hello'}])
  
  function addNotebokk() {
    notebooks.push({value: ''})
  }
  function round(code: string) {
    const s = performance.now()

    let returning = null
    try {
      returning = eval(code)
    } catch (error) {
      
    }
    return {
      time: performance.now() - s,
      returning
    }
  }
</script>
<div class="flex flex-col p-2">
  {#each notebooks as notebook}
    <div class="flex bg-[#1E1E1E]">
      <div class="">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
      </div>
      <div class="border border-neutral-700">
        <Editor onchange={(value) => {
          notebook.value = value
        }}/>
        <div class="flex items-center gap-1 text-xs px-3 py-2">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="14"  height="14"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
          <span>{round(notebook.value).time.toFixed(2)} {round(notebook.value).time.toFixed(2) > 1000 ? 's':'ms'}</span>
        </div>
      </div>
    </div>
    <pre class="flex border-l-2 pl-2 border-green-400 border-solid text-sm">{round(notebook.value).returning}</pre>
  {/each}
</div>
<div>
  <button onclick={addNotebokk}>+ code</button>
</div>
<style>
  *{
    font-family: Recursive Mono Casual Static;
  }
</style>