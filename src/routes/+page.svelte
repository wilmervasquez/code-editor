<script lang="ts">
	import { onMount } from "svelte";
	import MonacoEditor from "$lib/components/MonacoEditor.svelte";
	import { getStructHTML } from "$lib/util";
  
  let tabActiveIndex = 0;
  let editor: MonacoEditor;
  const tabs = [
    {content:"<h1>Hello World</h1>",name:"HTML",icon:"html-5",lang:"html"},
    {content:"*{margin:0}",name:"CSS",icon:"css-3", lang:"css"},
    {content:"console.log()",name:"JavaScript",icon:"javascript", lang:"javascript"},
  ]
  onMount(()=>{
    editor.setValue(tabs[tabActiveIndex].content)
    editor.setLang(tabs[tabActiveIndex].lang)
  })
  
  
  let valueTextEditor = tabs[tabActiveIndex].content;
  $: tabs[tabActiveIndex].content = valueTextEditor;
  $: console.log(tabs)
</script>

<div class="layout grid scrollbar-none">
  <div class="grid lay-left">
    <div class="tabs flex bg-[#2D2D2D]">
      {#each tabs as {name,icon},id}
        <button class="flex items-center gap-2 pl-2 pr-4 py-2" on:click={()=>{
          tabActiveIndex = id
          editor.setValue(tabs[tabActiveIndex].content)
          editor.setLang(tabs[tabActiveIndex].lang)
          
        }} class:active={tabActiveIndex == id}>
          <img class="w-4 h-4 block" src="https://cdn.svgporn.com/logos/{icon}.svg" alt="">
          <p class="text-sm text-neutral-400">{name}</p>
        
        </button>
      {/each}
    </div>
    <div class="grid py-3 bg">
      <MonacoEditor bind:this={editor} bind:value={valueTextEditor} />
    </div>
  </div>
  <div class="view-doc">
    <iframe class="w-full h-full" srcdoc={getStructHTML(tabs[0].content,tabs[1].content,tabs[2].content)} frameborder="0" title=""></iframe>
  </div>
</div>
<style>
  .layout{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
  }
  .lay-left{
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
  }
  button{
    border-top: 2px solid transparent;

  }
  button.active{
    background-color:#1e1e1e;
    border-top: 2px solid #007ACC;
  }
  .view-doc{
    background-color: white;
  }
</style>