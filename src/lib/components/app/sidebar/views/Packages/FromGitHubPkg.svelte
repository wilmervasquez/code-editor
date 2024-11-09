<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import { HistorySnippet } from "../History/SnippetHistory";

  interface Props {
    fullName: string
  }

  let { fullName }: Props = $props()

  let load = $state(false);
  const url = `https://cdn.skypack.dev/${fullName.split('/').at(-1)}@latest`
  async function isExistPkg() {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        load = true
      }
    } catch (error) {
      
    }
  }

  isExistPkg()

  function addPkg() {
    const js = HistorySnippet.__js.split('\n')
    const d = fullName.split('/').at(-1)

    js.unshift(`import * as ${d.replaceAll(/-([a-zA-Z0-9])/g, (_, $1) => $1.toUpperCase())}  from '${url}';`)

    HistorySnippet.updateCode(
      HistorySnippet.selectKey, 
      HistorySnippet.__xml,
      HistorySnippet.__css,
      js.join('\n'),
    )

    HistorySnippet.selectSnippet(HistorySnippet.selectKey)
  }
</script>
<article class:hidden={!load}>
  <div class="flex justify-between w-full p-1 gap-1">
    <svg width="20" height="20" class="shrink-0">
      <use href={TablerLinearIcons.BrandGithub} style="--stroke: gray"/>
    </svg>
    <span class="text-sm flex-grow text-ellipsis overflow-hidden">{fullName}</span>
    <button onclick={addPkg} aria-label="Go package">
      <svg width="20" height="20">
        <use href={TablerLinearIcons.PlaylistAdd} style="--stroke: lightgray"/>
      </svg>
    </button>
  </div>
</article>
<style>

</style>