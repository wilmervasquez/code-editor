<script lang="ts">
  import Editor from "$lib/components/Editor.svelte";
  import Split from "$lib/components/Split.svelte";
  import { getStructHTML } from "$lib/util";

  
  let editorHTMLValue = localStorage.getItem("__html") ?? "<h1>Hello 🖐️</h1>";
  let editorCSSValue = localStorage.getItem("__css") ?? "* { margin: 0}";
  let editorJSValue = localStorage.getItem("__js") ?? "console.log('Hello 🖐️')";

  $:{
    localStorage.setItem("__html",editorHTMLValue)
    localStorage.setItem("__css",editorCSSValue) 
    localStorage.setItem("__js",editorJSValue)
  }
        
</script>
<div class="view-editor grid">
  <Split>
    <Editor slot="area-1" --image="url(https://www.abusaid.me/_next/static/media/html.017306fd.svg)" language="html" bind:value={editorHTMLValue}/>
    <Editor slot="area-2" --image="url(https://www.abusaid.me/_next/static/media/javascript.b181c09e.svg)" language="javascript" bind:value={editorJSValue}/>
    <Editor slot="area-3" --image="url(https://www.abusaid.me/_next/static/media/css.18a757c4.svg)" language="css" bind:value={editorCSSValue}/>
    <iframe slot="area-4" class="w-full h-full bg-white" srcdoc={getStructHTML(editorHTMLValue,editorCSSValue,editorJSValue)} frameborder="0" title=""></iframe>
  </Split>
</div>
<style>
  /* .view-editor{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  } */
</style>