<script lang="ts">

  import "$lib/index"

  import Storage from "$lib/components/editor/sidebar/views/Storage.svelte";
  import ActivityBar from "$lib/components/ActivityBar.svelte";
  import Files from "$lib/components/editor/sidebar/views/Files.svelte";
  import { HistorySnippet } from "$lib/components/editor/sidebar/views/SnippetHistory";
  import Packages from "$lib/components/editor/sidebar/views/Packages.svelte";
  import TablerIcons from "$lib/icons/TablerLinearIcons";
  import type { ComponentType } from "svelte";

  HistorySnippet.load()

  function Provider(icon: string, view: ComponentType, position = 'TOP') {
    return {icon, view, position}
  }

  const provider = [
    Provider(TablerIcons.File, Storage),
    Provider(TablerIcons.File, Files),
    Provider(TablerIcons.History, Storage),
    Provider(TablerIcons.BoxSeam, Packages),
    Provider(TablerIcons.Terminal_2,Storage),
    Provider(TablerIcons.BrandGithub, Storage, 'BOTTOM'),
    Provider(TablerIcons.Settings, Storage, 'BOTTOM')
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