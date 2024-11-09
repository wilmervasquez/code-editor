<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import BarTop from "../../BarTop.svelte";


</script>
<div class="view">
  <BarTop title="ACCOUNT" actions={[]}/>
  <div class="">
    <form action="" class="p-2">
      <button class="flex items-center justify-center gap-2 w-full border border-neutral-700 rounded-lg p-1 pr-2 shadow-2xl shadow-green-500">
        <svg width="20" height="20">
          <use href={TablerLinearIcons.BrandGithub} style="--stroke: white"/>
        </svg>
        Login with GitHub
      </button>
    </form>
  </div>
</div>
<style>

</style>