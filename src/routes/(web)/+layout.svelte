<script lang="ts">
  import type { Component } from "svelte";
  import '$lib/components/editor/Editor'
  import type { Provider } from "$lib/components/app/sidebar/ActivityBar.d.ts";
  import { setSnnipetContext } from "$lib/components/app/sidebar/views/History/snippets.svelte";
  import ActivityBar from "$lib/components/app/sidebar/ActivityBar.svelte";
  import Files from "$lib/components/app/sidebar/views/Files/FilesView.svelte";
  import Packages from "$lib/components/app/sidebar/views/Packages/PackagesView.svelte";
  import TablerIcons from "$lib/icons/TablerLinearIcons";
  import HistoryView from "$lib/components/app/sidebar/views/History/HistoryView.svelte";
  import SettingsView from "$lib/components/app/sidebar/views/Settings/SettingsView.svelte";
  import CloudView from "$lib/components/app/sidebar/views/Cloud/CloudView.svelte";
  import ConsolaView from "$lib/components/app/sidebar/views/Consola/ConsolaView.svelte";
  import AccountView from "$lib/components/app/sidebar/views/Account/AccountView.svelte";
  import MenuView from "$lib/components/app/sidebar/views/Menu/MenuView.svelte";

  function CProvider(icon: string, view: Component, position: 'TOP' | 'BOTTOM' = 'TOP'): Provider {
    return {icon, view, position}
  }

  const snp = setSnnipetContext()

  console.log(snp.snippets);
  const provider = [
    CProvider(TablerIcons.Menu_2, MenuView),
    CProvider(TablerIcons.File, Files),
    CProvider(TablerIcons.History, HistoryView),
    CProvider(TablerIcons.BrandOnedrive, CloudView),
    CProvider(TablerIcons.BoxSeam, Packages),
    CProvider(TablerIcons.Terminal_2,ConsolaView),
    CProvider(TablerIcons.User, AccountView, 'BOTTOM'),
    CProvider(TablerIcons.Settings, SettingsView, 'BOTTOM')
  ]

</script>
<div class="layout-base grid">
  <ActivityBar {provider}/>
  <div class="grid">
    <slot/>
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