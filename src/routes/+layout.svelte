<script>
  import "../app.css";
  import "$lib/index"
  import ActivityBar from "$lib/components/ActivityBar.svelte";
  import File from "$lib/components/ViewsActivityBar/File.svelte";
  import Storage from "$lib/components/ViewsActivityBar/Storage.svelte";

  const provider = [
    {icon:"file", view: File},
    {icon:"history", view: Storage},
  ]
  const providerActions = [
    {icon:"brand-github"},
    {icon:"settings",},
  ]
</script>
<div class="layout grid">
  <ActivityBar provider={provider} providerActions={providerActions}/>
  <slot />
</div>
<style>
  .layout{
    grid-template-columns: auto 1fr;
    width: 100vw;
    height: 100vh;
  }
</style>