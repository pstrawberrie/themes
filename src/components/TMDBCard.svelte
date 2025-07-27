<script lang="ts">
  let { data, index } = $props();
</script>

<div class="card tmdb-card">
  <div class="tmdb-card_top">
    <div class="tmdb-card_poster">
      <img src={`/images/tmdb/test${index + 1}.webp`} alt={data.title} />
    </div>
    <div class="tmdb-card_info">
      <h3 class="tmdb-card_title">{data.title}</h3>
      <div class="tmdb-card_genres">
        {#each JSON.parse(data.genres) as genre}
          <span class="tmdb-card_genre">{genre.name}</span>
        {/each}
      </div>
      <p class="tmdb-card_overview">{data.overview}</p>
    </div>
  </div>
  <div class="tmdb-card_bottom"></div>
</div>

<style lang="scss">
  @use '@styles/util';

  .tmdb-card {
    flex-direction: column;
    gap: 1rem;
    border-color: var(--c-card-border);
    background-color: var(--c-card-background);
    backdrop-filter: blur(10px);

    &_top {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: center;

      @include util.mq(md) {
        flex-direction: row;
        text-align: left;
      }
    }

    &_info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    &_poster {
      position: relative;
      width: 150px;
      height: 225px;
      flex-shrink: 0;
      margin: 0 auto;
      border-radius: 0.375rem;
      overflow: hidden;

      @include util.mq(md) {
        width: 120px;
        height: 180px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &_overview {
      display: -webkit-box;
      color: var(--c-text-secondary);
      line-height: 1.4;
      font-size: 0.9rem;
      margin: 0;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      line-clamp: 5;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }

    &_genres {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      flex-wrap: wrap;

      @include util.mq(md) {
        justify-content: flex-start;
      }
    }

    &_genre {
      background-color: var(--c-card-content-background);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--c-card-content-background-text);
    }

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
    }

    &_bottom {
      display: flex;
      padding-top: 0.5rem;
      border-top: 1px solid var(--c-card-separator);
      gap: 0.75rem;
      text-align: center;
      margin-top: auto;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
</style>
