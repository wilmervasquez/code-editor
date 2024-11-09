<script lang="ts">
  import Editor from "$lib/components/editor/Editor.svelte";
  import Split from "$lib/components/Split.svelte";
  import { createObjectURLBlobStructHTML } from "$lib/util";
  import { onDestroy, onMount } from "svelte";
  import { HistorySnippet } from "$lib/components/app/sidebar/views/History/SnippetHistory";

  let iframe: HTMLIFrameElement;
  let editorHTML: Editor;
  let editorCSS: Editor;
  let editorJS: Editor;

  let selectKey: string = $state(HistorySnippet.selectKey);
  let doc: string = $state('');
  let snippet = $state({xml: '', css: '', js: ''})

  const setValuesEditor = () => {
    selectKey = HistorySnippet.selectKey

    if (editorHTML && editorCSS && editorJS) {
      const snp = HistorySnippet.data.get(selectKey)
      if (snp == null) return

      snippet = snp

      editorHTML.setValue(snp.xml)
      editorCSS.setValue(snp.css)
      editorJS.setValue(snp.js)
    }
  }

  onMount(()=>{
    console.log("2222222222222222222")
    setValuesEditor()
  })


  const subscribeKey = HistorySnippet.subscribe(setValuesEditor)

  onDestroy(()=>{
    HistorySnippet.subscriptions.delete(subscribeKey)
  })

  function onChangeEditor(snp: { xml: string, css: string, js: string}) {
    snippet = snp;
    onChangeXML()
  }

  function onChangeXML() {
    doc = createObjectURLBlobStructHTML(snippet.xml, snippet.css, snippet.js);
    HistorySnippet.updateCode(selectKey, snippet.xml, snippet.css, snippet.js)
  }

</script>
<div class="view-editor grid h-full">
  <Split>
  <Editor
      slot="area-1"
      --image="url(https://www.abusaid.me/_next/static/media/html.017306fd.svg)"
      language="html"
      bind:this={editorHTML}
      on:change={({detail}) => onChangeEditor({...snippet, xml: detail}) }
    />
  <Editor
      slot="area-2"
      --image="url(https://www.abusaid.me/_next/static/media/javascript.b181c09e.svg)"
      language="javascript"
      bind:this={editorJS}
      on:change={({detail})=> onChangeEditor({...snippet, js: detail}) }
    />
  <Editor
      slot="area-3"
      --image="url(https://www.abusaid.me/_next/static/media/css.18a757c4.svg)"
      language="css"
      bind:this={editorCSS}
      on:change={({detail})=> onChangeEditor({...snippet, css: detail}) }
    />
  <iframe slot="area-4" bind:this={iframe} class="w-full h-full bg-white" src={doc} frameborder="0" title=""></iframe>
  </Split>
</div>
<style>
  /* .view-editor{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  } */
</style>