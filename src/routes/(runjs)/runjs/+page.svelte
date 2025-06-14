<script lang="ts">
  import "$lib/components/editor/editor"
  import Editor from "$lib/components/editor/Editor.svelte";
  import { hav } from "$lib/utils";
  let javascript = $state('');

 
  
</script>
<div class="grid grid-cols-2 h-screen">
  <Editor
    language="javascript"
    onchange={(v) => {
      javascript = hav(v)
    }}
  />
  <div>{javascript}</div>
  <iframe srcdoc={javascript} frameborder="0" title="" class="hidden"></iframe>
</div>
<style>

</style>
