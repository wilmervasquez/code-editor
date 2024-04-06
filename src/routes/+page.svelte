<script lang="ts">
  import Editor from "$lib/components/Editor.svelte";
  import Split from "$lib/components/Split.svelte";


</script>
<div class="view-editor grid">
  <Split>
    <Editor slot="area-1" language="html"/>
    <Editor slot="area-2" language="css"/>
    <Editor slot="area-3" language="javascript"/>
    <Editor slot="area-4" language="json"/>
  </Split>
</div>
<style>
  /* .view-editor{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  } */
</style>