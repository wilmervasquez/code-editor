<script lang="ts">
  import TablerLinearIcons from "$lib/icons/TablerLinearIcons";

  const f = [{
    icon: TablerLinearIcons.CloudUpload,
    name: 'Editar Nombre'
  },{
    icon: TablerLinearIcons.CloudUpload,
    name: 'Copiar'
  },{
    icon: TablerLinearIcons.CloudUpload,
    name: 'Upload'
  },{
    icon: TablerLinearIcons.CloudUpload,
    name: 'Load'
  },{
    icon: TablerLinearIcons.CloudUpload,
    name: 'Share'
  },{
    icon: TablerLinearIcons.CloudUpload,
    name: 'Eliminar'
  }]
</script>
<div class="absolute top-6 right-2 bg-neutral-900 p-1">
  {#each f as {icon, name}}
    <button class="flex z-30 gap-2 p-1">
      <svg width="16" height="16">
        <use href={icon} style="--stroke: white "/>
      </svg>
      <span class="text-sm">{name}</span>
    </button>
  {/each}
</div>
<style>

</style>