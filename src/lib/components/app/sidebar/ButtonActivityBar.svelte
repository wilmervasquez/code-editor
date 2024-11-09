<script lang="ts">
  interface Props {
    icon: string;
    active: boolean;
    onclick: (e: MouseEvent) => void
  }

  let { icon, active, onclick }: Props = $props();

</script>
<button class="item p-2 relative" {onclick} class:active aria-label=".">
  <svg width="24" height="24" >
    <use href={icon}/>
  </svg>
</button>
<style>
  .item svg{
    --stroke:gray;
  }
  .item:hover > svg, .item.active > svg {
    --stroke: violet
  }
  .item.active::before{
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: violet;
    left: 0;
    top: 0;
  }
</style>