<script lang="ts">
  import Editor from "$lib/components/Editor.svelte";
  import Split from "$lib/components/Split.svelte";
  import { getStructHTML } from "$lib/util";
  import { onDestroy, onMount } from "svelte";

  import "$lib/Editor.ts";
  import { HistorySnippet, type Snippet } from "$lib/components/editor/sidebar/views/SnippetHistory";
  
  let editorHTML: Editor;
  let editorCSS: Editor;
  let editorJS: Editor;
  let selectKey: string = HistorySnippet.selectKey;
  let doc: string

  let xml: string, css: string , js: string

  const setValuesEditor = () => {
    selectKey = HistorySnippet.selectKey
    
    if (editorHTML && editorCSS && editorJS) {
      const snp = HistorySnippet.data.get(selectKey)
      if (snp == null) return
      console.log(snp)
      editorHTML.setValue(snp.xml)
      editorCSS.setValue(snp.css)
      editorJS.setValue(snp.js)
    } 
  }

  onMount(()=>{
    setValuesEditor()
  })

  const subscribeKey = HistorySnippet.subscribe(setValuesEditor)

  onDestroy(()=>{
    HistorySnippet.subscriptions.delete(subscribeKey)
  })

  function onChangeXML() {
    var htmlContent = getStructHTML(xml,css,js);
    var blob = new Blob([htmlContent], { type: 'text/html' });

    doc = URL.createObjectURL(blob);
    HistorySnippet.updateCode(selectKey, xml, css, js)
  }

  $: xml, onChangeXML()
  $: js, onChangeXML()
  $: css, onChangeXML()
</script>
<div class="view-editor grid h-full">
  <Split>
    <Editor 
      slot="area-1" 
      --image="url(https://www.abusaid.me/_next/static/media/html.017306fd.svg)" 
      language="html" 
      bind:this={editorHTML} 
      on:change={({detail})=> xml = detail }
    />
    <Editor 
      slot="area-2" 
      --image="url(https://www.abusaid.me/_next/static/media/javascript.b181c09e.svg)" 
      language="javascript" 
      bind:this={editorJS}
      on:change={({detail})=> js = detail }
    />
    <Editor   
      slot="area-3" 
      --image="url(https://www.abusaid.me/_next/static/media/css.18a757c4.svg)" 
      language="css" 
      bind:this={editorCSS}
      on:change={({detail})=> css = detail }
    />
    <iframe slot="area-4" class="w-full h-full bg-white" src={doc} frameborder="0" title=""></iframe>
  </Split>
</div>
<style>
  /* .view-editor{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  } */
</style>