<script lang="ts">
  import { fly } from "svelte/transition";
  export let url:URL
  const pageTransitionDuration = 800;
</script>

{#key url}
  <div in:fly={{  x:-10, duration: pageTransitionDuration, delay: pageTransitionDuration }}
       out:fly={{ x: 10, duration: pageTransitionDuration }}>
    <slot />
  </div>
{/key}