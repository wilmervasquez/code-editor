<script lang="ts">

  import "$lib/index"

  import Storage from "$lib/components/editor/sidebar/views/Storage.svelte";
  import ActivityBar from "$lib/components/ActivityBar.svelte";
  import Files from "$lib/components/editor/sidebar/views/Files.svelte";
  import { HistorySnippet } from "$lib/components/editor/sidebar/views/SnippetHistory";
  import Packages from "$lib/components/editor/sidebar/views/Packages.svelte";

  HistorySnippet.load()

  function Provider(icon: string, view, position = 'TOP') {
    return {icon, view, position}
  }

  const provider = [
    Provider('menu',Storage),
    Provider('file', Files),
    Provider('history',Storage),
    Provider('package', Packages),
    Provider('powershell',Storage),
    Provider('brand-github',Storage, 'BOTTOM'),
    Provider('settings',Storage, 'BOTTOM')
  ]


</script>
<div class="layout-base grid">
  <ActivityBar {provider}/>
  <div class="grid">
    <slot />
  </div>
  <!-- <Modal/> -->
</div>
<style>
  .layout-base {
    grid-template-columns:  auto 1fr;
    grid-template-rows: auto 1fr;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>