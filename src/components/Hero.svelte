<script lang="ts">
  let { title } = $props();
</script>

<div class="hero">
  <div class="box">
    <div class="hero_text">
      <h1>{title}</h1>
    </div>
  </div>
</div>

<style lang="scss">
  @use '@styles/util';

  .hero {
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--c-primary);
    padding: var(--space-page-v) var(--space-page-h);
  }
</style>
