<script lang="ts">
  let { title, image, subtitle = undefined } = $props();
</script>

<div class="hero">
  <div class="box hero_content">
    <div class="hero_text">
      <h1>{title}</h1>
      {#if subtitle}
        <p>{subtitle}</p>
      {/if}
    </div>
    {#if image}
      <div class="hero_image">
        <img src={image} alt={title} />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use '@styles/util';

  .hero {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 100vh;
    background-color: var(--c-primary);
    padding: var(--space-page-v) var(--space-page-h);
    overflow: hidden;
  }

  .hero_content {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-page-v);
    text-align: center;

    @include util.mq(md) {
      grid-template-columns: 1fr 0.75fr;
      text-align: left;
    }
  }

  .hero_text {
    display: flex;
    flex-direction: column;
    gap: var(--space-page-h);
  }

  h1 {
    font-family: var(--font-family-title);
    font-weight: 600;
  }
</style>
