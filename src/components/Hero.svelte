<script lang="ts">
  let { title, image, subtitle = undefined, feature = undefined } = $props();
</script>

<div class="hero">
  <div class="container hero_content">
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
  {#if feature === 'stars'}
    <div class="hero-stars">
      <div class="glow-star star-1"></div>
      <div class="glow-star star-2"></div>
      <div class="glow-star star-3"></div>
      <div class="glow-star star-4"></div>
      <div class="glow-star star-5"></div>
      <div class="glow-star star-6"></div>
      <div class="glow-star star-8"></div>
      <div class="glow-star star-9"></div>
      <div class="glow-star star-10"></div>
      <div class="glow-star star-11"></div>
      <div class="glow-star star-12"></div>
      <div class="glow-star star-13"></div>
      <div class="glow-star star-15"></div>
      <div class="glow-star star-16"></div>
      <div class="glow-star star-17"></div>
      <div class="glow-star star-18"></div>
      <div class="glow-star star-19"></div>
      <div class="glow-star star-20"></div>
    </div>
  {/if}
</div>

<style lang="scss">
  @use '@styles/util';

  .hero {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: var(--hero-gradient);
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
    text-shadow: var(--hero-text-shadow);
  }

  p {
    font-size: var(--hero-text-size);
    font-weight: 500;
    color: var(--c-text-secondary);
  }
</style>
