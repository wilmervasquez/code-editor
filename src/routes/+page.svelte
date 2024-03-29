<script lang="ts">
	import MonacoEditor from "$lib/components/MonacoEditor.svelte";
	import { getStructHTML } from "$lib/util";
	import { base } from "$app/paths";
	import SvgUse from "$lib/components/SvgUse.svelte";
	import Split from "split-grid";
  
  

  let editorHTMLValue = localStorage.getItem("__html") ?? "<h1>Hello 🖐️</h1>";
  let editorCSSValue = localStorage.getItem("__css") ?? "* { margin: 0}";
  let editorJSValue = localStorage.getItem("__js") ?? "console.log('Hello 🖐️')";

  $:{
    localStorage.setItem("__html",editorHTMLValue)
    localStorage.setItem("__css",editorCSSValue)
    localStorage.setItem("__js",editorJSValue)
  }

  function spliter(container:HTMLElement) {
    Split({
      columnGutters: [{
          track: 1,
          element: container.querySelector('.gutter-col-1')!,
      }],
      rowGutters: [{
          track: 1,
          element: container.querySelector('.gutter-row-1')!,
      }]
    })
  }
</script>

<div class="editors grid scrollbar-none" use:spliter>
  <!-- Square -->
  <div class="grid bg-[#1e1e1e] relative overflow-hidden">
    <MonacoEditor bind:value={editorHTMLValue} language="html"/>
    <button class="flex absolute items-center gap-2 bottom-1 rounded-xl right-5 pl-2 pr-4 py-2">
      <SvgUse size={12} src="{base}/icons/pkg.devicon.svg#html5"/>
      <p class="text-xs font-sans text-white  font-bold">HTML</p>
    </button>
  </div>
  <div class="gutter-col gutter-col-1"></div>
  <!-- Square -->
  <div class="grid bg-[#1e1e1e] relative overflow-hidden">
    <MonacoEditor bind:value={editorCSSValue} language="css"/>
    <button class="flex absolute items-center gap-2 bottom-1 rounded-xl right-5 pl-2 pr-4 py-2">
      <SvgUse size={12} src="{base}/icons/pkg.devicon.svg#css3"/>
      <p class="text-xs font-sans text-white  font-bold">CSS</p>
    </button>
  </div>
   <!-- Square -->
   <div class="grid bg-[#1e1e1e] relative overflow-hidden">
    <MonacoEditor bind:value={editorJSValue} language="javascript"/>
    <button class="flex absolute items-center gap-2 bottom-1 rounded-xl right-5 pl-2 pr-4 py-2">
      <SvgUse size={12} src="{base}/icons/pkg.devicon.svg#javascript"/>
      <p class="text-xs font-sans text-white  font-bold">Javascript</p>
    </button>
  </div>
  <div class="gutter-row gutter-row-1"></div>
  <!-- View -->
  <div class="view-doc">
    <iframe class="w-full h-full" srcdoc={getStructHTML(editorHTMLValue,editorCSSValue,editorJSValue)} frameborder="0" title=""></iframe>
  </div>
</div>
<style>
  .editors{
    height: 100vh;
    grid-template-columns: 1fr 10px 1fr;
    grid-template-rows: 1fr 10px 1fr;
  }
  .gutter-col {
    grid-row: 1/-1;
    cursor: col-resize;
    background-color: hsl(0, 0%, 10%);
    background-repeat: no-repeat;
    background-position: 50% center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);
  }

  .gutter-col-1 {
      grid-column: 2;
  }

  .gutter-row {
    grid-column: 1/-1;
    cursor: row-resize;
    background-color: hsl(0, 0%, 10%);

    background-repeat: no-repeat;
    background-position: 50% center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=);
  }

  .gutter-row-1 {
      grid-row: 2;
  }
  button{
    border-top: 2px solid transparent;

  }
  button{
    background-color:#1e1e1e;
    border: 1px solid #215272;
  }
  .view-doc{
    background-color: white;
  }
</style>