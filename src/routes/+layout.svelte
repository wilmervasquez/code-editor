<script lang="ts">
  import "../app.css";
	import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
	import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import JSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

	window.MonacoEnvironment = {
		getWorker(_, label) {
			if (label === 'html') 	return new HTMLWorker();
      if (label === 'css') return new CSSWorker();
      if (label === 'javascript') return new JSWorker();
			
			return new HTMLWorker();
		}
	};
</script>
<div class="codeio grid">
  <slot/>
</div>
<style>
  .codeio{
    width: 100vw;
    height: 100vh;
    /* overflow: hidden; */
  }
  .codeio::-webkit-scrollbar{
    display: none;
  }
 
</style>
