<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";
  import type { Action } from "../../BarTop.d.ts";
  import BarTop from "../../BarTop.svelte";
  import CardHistory from "./CardHistory.svelte";
  import { HistorySnippet, type Snippet } from "./SnippetHistory";



  let grupo = $state(build())

  let selectKey: string | null = $state(HistorySnippet.selectKey)

  function add() {
    HistorySnippet.add('','','')
    grupo = build()
  }

  function build() {
    const t = [...HistorySnippet.data.entries()]
    t.sort((a,b) => {
      return new Date(b[1].updatedAt).getTime() - new Date(a[1].updatedAt).getTime()
    })

    const g: Map<string, [string, Snippet][]> = new Map()

    for (const [key, value] of t) {
      if (g.has(new Date(value.updatedAt).toDateString())) {
        const d = g.get(new Date(value.updatedAt).toDateString())!
        d?.push([key, value])
        g.set(new Date(value.updatedAt).toDateString(), d)
      } else {
        g.set(new Date(value.updatedAt).toDateString(), [[key,value]])
      }
    }

    return g
  }

  function openPreview() {
     HistorySnippet.openPreview()
  }

  const actions: Action[] = [{
    icon: TablerLinearIcons.Plus,
    onclick() {
      add()
    },
  },{
    icon: TablerLinearIcons.WindowMaximize,
    onclick() {
      openPreview()
    },
  }];

</script>
<div class="">
  <BarTop title="HISTORY" {actions}/>
  <div class="flex flex-col" >
    {#each grupo.entries() as [date, history]}
      <div class="flex p-1 gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3m-4-7v4M8 3v4m-4 4h10"/><path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M18 16.5V18l.5.5"/></g></svg>
        <span class="text-sm text-cyan-500 font-bold">{date}</span>
      </div>
      <div class="p-1">
        {#each history as [key, { name }] (key)}
          <CardHistory name={name} id={key} active={key == selectKey} on:remove={() => {
            HistorySnippet.remove(key)
            grupo = build()
          }} on:select={()=> {
            selectKey = key
          }}/>
        {/each}
      </div>
    {/each}
  </div>
</div>
<style>

</style>