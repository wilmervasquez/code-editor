<script lang="ts">
  import "../app.css";

	import SvgUse from "$lib/components/SvgUse.svelte";
  import {base} from "$app/paths"; 
  import "./start-monaco";
	import ActivityBar from "./ActivityBar.svelte";

  const activityBar = [
    {icon:"file"},
    {icon:"brand-github"},
    {icon:"settings"},
  ]
</script>
<div class="grid" id="app">
  <ActivityBar provider={activityBar}/>
  <slot/>
</div>
<style>
  #app{
    width: 100vw;
    grid-template-columns: auto 1fr;
    height: 100vh;
    overflow: hidden;
  }
  
 
</style>
