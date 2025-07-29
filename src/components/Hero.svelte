<script lang="ts">
  let { title, image, subtitle = undefined, buttons = [], feature = undefined } = $props();
</script>

<div class="hero">
  <div class="container hero_content">
    <div class="hero_text">
      <h1>{title}</h1>
      {#if subtitle}
        <p>{subtitle}</p>
      {/if}
      {#if buttons.length > 0 && buttons[0].title && buttons[0].href}
        <div class="hero_buttons">
          {#each buttons as button}
            <a class="btn {button.class || ''}" href={button.href}>{button.title}</a>
          {/each}
        </div>
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

  .hero_buttons {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @include util.mq(sm) {
      flex-direction: row;
    }

    @include util.mq(md) {
      justify-content: flex-start;
    }
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

  img {
    position: relative;
    top: -10px;
    max-width: 40%;
    animation: float 6s ease-in-out infinite;
    z-index: 2;

    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-18px);
      }
    }

    @include util.mq(md) {
      max-width: 100%;
    }
  }
</style>
