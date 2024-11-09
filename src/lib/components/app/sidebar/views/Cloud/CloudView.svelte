<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import type { Action } from "../../BarTop";
  import BarTop from "../../BarTop.svelte";

  const actions: Action[] = [{
    icon: TablerLinearIcons.BrandGithub,
    onclick() {

    },
  }]
</script>
<div class="view">
  <BarTop title="CLOUD" {actions}/>
  <div class="grid">
    
  </div>
</div>
<style>

</style>