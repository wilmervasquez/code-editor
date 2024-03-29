<script lang="ts">
  import "../app.css";
	import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
	import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import JSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
	import SvgUse from "$lib/components/SvgUse.svelte";
  import {base} from "$app/paths";
	window.MonacoEnvironment = {
		getWorker(_, label) {
			if (label === 'html') 	return new HTMLWorker();
      if (label === 'css') return new CSSWorker();
      if (label === 'javascript') return new JSWorker();
			
			return new HTMLWorker();
		}
	};

  const activityBarTop = [
    {icon:"file"},
  ]
  const activityBarBotton = [{icon:"brand-github"},{icon:"settings"},]
</script>
<div class="codeio grid">
  <div class="grid bg-[#21232c] content-between">
    <div class="top">
      {#each activityBarTop as {icon}}
        <div class="p-2">
          <SvgUse size={20} src="{base}/icons/pkg.tabler.svg#{icon}" color="gray"/>
        </div>
      {/each}
    </div>
    <div class="bottom">
      {#each activityBarBotton as {icon}}
        <div class="p-2">
          <SvgUse size={20} src="{base}/icons/pkg.tabler.svg#{icon}" color="gray"/>
        </div>
      {/each}
    </div>
  </div>
  <slot/>
</div>
<style>
  .codeio{
    width: 100vw;
    grid-template-columns: auto 1fr;
    height: 100vh;
    /* overflow: hidden; */
  }
  .codeio::-webkit-scrollbar{
    display: none;
  }
 
</style>
