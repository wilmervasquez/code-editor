<script lang="ts">
  import '$lib/components/editor/Editor'
  import Editor from "$lib/components/editor/Editor.svelte";
  import Split from "$lib/components/Split.svelte";
  import { getSnnipetContext } from '$lib/components/app/sidebar/views/History/snippets.svelte';
  import { onMount } from "svelte";

  const snippet = getSnnipetContext()

  let iframe: HTMLIFrameElement;
  let editorHTML: Editor;
  let editorCSS: Editor;
  let editorJS: Editor;

  const selectedSnippet = $derived(snippet.selectedSnippet)

  const setValuesEditor = () => {
  }
  
  $effect(() => {
    if (editorHTML && editorCSS && editorJS) {
      if (!selectedSnippet) return
  
      editorHTML.setValue(selectedSnippet.xml)
      editorCSS.setValue(selectedSnippet.css)
      editorJS.setValue(selectedSnippet.js)
    }

    console.log(123);
  })

</script>
<div class="view-editor grid h-full">
  <Split>
    {#snippet area1()}
      <Editor
        --image="url(https://www.abusaid.me/_next/static/media/html.017306fd.svg)"
        language="html"
        bind:this={editorHTML}
        onchange={(detail) => snippet.setXml(detail) }
      />
    {/snippet}
    {#snippet area2()}
      <Editor
        --image="url(https://www.abusaid.me/_next/static/media/javascript.b181c09e.svg)"
        language="javascript"
        bind:this={editorJS}
        onchange={(detail)=> snippet.setJS(detail) }
      />
    {/snippet}
    {#snippet area3()}
      <Editor
        --image="url(https://www.abusaid.me/_next/static/media/css.18a757c4.svg)"
        language="css"
        bind:this={editorCSS}
        onchange={(detail)=> snippet.setCss(detail) }
      />
    {/snippet}
    {#snippet area4()}
      <iframe bind:this={iframe} class="w-full h-full bg-white" src={snippet.doc} frameborder="0" title=""></iframe>
    {/snippet}
  </Split>
</div>
<style>
  /* .view-editor{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  } */
   
</style>