<script lang="ts">
	import Split from "split-grid";

  function splitGrid(container: HTMLElement) {
    Split({
      columnGutters: [{
        track: 1,
        element: container.querySelector('.gutter-col-1')!,
      }],
      rowGutters: [{
        track: 1,
        element: container.querySelector('.gutter-row-1')!,
      }]
    })
  }

</script>

<div class="editors grid scrollbar-none" use:splitGrid>
  <!-- Square -->
  <div class="grid bg-[#1e1e1e] relative overflow-hidden">
    <slot name="area-1"/>
  </div>
  <div class="gutter-col gutter-col-1"></div>
  <!-- Square -->
  <div class="grid bg-[#1e1e1e] relative overflow-hidden">
    <slot name="area-2"/>
  </div>
   <!-- Square -->
   <div class="grid bg-[#1e1e1e] relative overflow-hidden">
    <slot name="area-3"/>
  </div>
  <div class="gutter-row gutter-row-1"></div>
  <!-- View -->
  <div class="overflow-y-hidden">
    <slot name="area-4"/>
  </div>
</div>
<style>
  .editors{
    height: 100%;
    grid-template-columns: 1fr 8px 1fr;
    grid-template-rows: 1fr 8px 1fr;
  }

  .gutter-col,.gutter-row{
    background-repeat: no-repeat;
    background-color: hsl(218, 14%, 14%);
  }

  .gutter-col {
    grid-row: 1/-1;
    cursor: col-resize;
    background-position: center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);
  }
  .gutter-col:hover,.gutter-row:hover{
    background-color: hsl(218, 14%, 14%);
  }

  .gutter-col-1 {
    grid-column: 2;
  }

  .gutter-row {
    grid-column: 1/-1;
    cursor: row-resize;
    background-position: center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=);
  }

  .gutter-row-1 {
    grid-row: 2;
  }

</style>