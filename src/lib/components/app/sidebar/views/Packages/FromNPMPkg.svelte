<script lang="ts">
  interface Props {
    name: string
    version: string
    links: Record<string, string>
  }

  let { version, name, links }: Props = $props()

</script>
<article class="flex p-1 cursor-pointer">
  <div class="flex gap-2 text-sm flex-grow-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#a37ee2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm0 9l8-4.5M12 12v9m0-9L4 7.5"/></svg>
    <div class="flex flex-col">
      <span class="text-ellipsis overflow-hidden flex-shrink-0">{name}</span>
      <span class="text-xs text-neutral-500">v{version}</span>
    </div>
  </div>
  <div class="">

  </div>
</article>
{#if 'cdn' in links}
  <div class="flex">hola</div>
{/if}

<style>

</style>