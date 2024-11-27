<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons.js";
  import type { Action } from "../../BarTop.d.ts";
  import BarTop from "../../BarTop.svelte";

  const actions: Action[] = [{
    icon: TablerLinearIcons.BoxSeam,
    onclick() {

    },
  },{
    icon: TablerLinearIcons.Settings,
    onclick() {

    },
  },{
    icon: TablerLinearIcons.File,
    onclick() {

    },
  }]

</script>
<div class="">
  <BarTop title="SETTINGS" {actions}/>
  <div class="flex flex-col" >

  </div>
</div>
<style>

</style>