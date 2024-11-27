<script lang="ts">
  import type { Action } from "../../BarTop";
  import { supabase } from "$lib/client/supabase/supabase";
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import BarTop from "../../BarTop.svelte";

  const actions: Action[] = [{
    icon: TablerLinearIcons.BrandGithub,
    onclick() {

    },
  }];

  let isLoading = $state(true);
  let snp = $state([]);

  (async function(){
    let { data: snippets, error } = await supabase.from('snippets').select('*')

    if (error) {

    } else {
      isLoading = false
    }
    console.log(snippets)

    snp = snippets
  })();
</script>
<div class="view">
  <BarTop title="CLOUD" {actions}/>
  <div class="grid">
    {#if isLoading}
      <div class="grid place-items-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="#eab308" rx="1"><animate id="IconifyId193130461c048a876171" fill="freeze" attributeName="x" begin="0;IconifyId193130461c048a876182.end" dur="0.2s" values="1;13"/><animate id="IconifyId193130461c048a876172" fill="freeze" attributeName="y" begin="IconifyId193130461c048a876179.end" dur="0.2s" values="1;13"/><animate id="IconifyId193130461c048a876173" fill="freeze" attributeName="x" begin="IconifyId193130461c048a876180.end" dur="0.2s" values="13;1"/><animate id="IconifyId193130461c048a876174" fill="freeze" attributeName="y" begin="IconifyId193130461c048a876181.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="#eab308" rx="1"><animate id="IconifyId193130461c048a876175" fill="freeze" attributeName="y" begin="IconifyId193130461c048a876171.end" dur="0.2s" values="13;1"/><animate id="IconifyId193130461c048a876176" fill="freeze" attributeName="x" begin="IconifyId193130461c048a876172.end" dur="0.2s" values="1;13"/><animate id="IconifyId193130461c048a876177" fill="freeze" attributeName="y" begin="IconifyId193130461c048a876173.end" dur="0.2s" values="1;13"/><animate id="IconifyId193130461c048a876178" fill="freeze" attributeName="x" begin="IconifyId193130461c048a876174.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="13" y="13" fill="#eab308" rx="1"><animate id="IconifyId193130461c048a876179" fill="freeze" attributeName="x" begin="IconifyId193130461c048a876175.end" dur="0.2s" values="13;1"/><animate id="IconifyId193130461c048a876180" fill="freeze" attributeName="y" begin="IconifyId193130461c048a876176.end" dur="0.2s" values="13;1"/><animate id="IconifyId193130461c048a876181" fill="freeze" attributeName="x" begin="IconifyId193130461c048a876177.end" dur="0.2s" values="1;13"/><animate id="IconifyId193130461c048a876182" fill="freeze" attributeName="y" begin="IconifyId193130461c048a876178.end" dur="0.2s" values="1;13"/></rect></svg>
        <span class="text-yellow-500 font-serif font-bold">Cargando your snippets...</span>
      </div>
    {:else}
      <ul>
        {#each snp as {title}}
          <article>
            <span>{ title }</span>
          </article>
        {/each}
      </ul>
    {/if}
  </div>
</div>
<style>

</style>