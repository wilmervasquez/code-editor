<script lang="ts">
  export let size: number = 10;
  export let src: string = "";
  export let color: string = "red";
</script>
<svg width={size} height={size}>
  <use href={src} style="--color:{color} "/>
</svg>
<style>

</style>