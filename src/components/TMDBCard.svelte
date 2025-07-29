<script lang="ts">
  let { data, index } = $props();

  const isMovie = data.collection === 'movies';
  const releaseYear = isMovie
    ? new Date(data.release_date).getFullYear()
    : new Date(data.first_air_date).getFullYear();
</script>

<div class="card tmdb-card">
  <div class="top">
    <div class="poster">
      <img src={`/images/tmdb/test${index + 1}.webp`} alt={data.title} />
    </div>
    <div class="info">
      <h3 class="title">{data.title}</h3>
      <div class="genres">
        {#each JSON.parse(data.genres) as genre}
          <span class="genre">{genre.name}</span>
        {/each}
      </div>
      <p class="overview">{data.overview}</p>
    </div>
  </div>
  <div class="bottom">
    <div class="left">
      <div class="type">{isMovie ? 'Movie' : 'Show'}</div>
      <div class="year">{releaseYear}</div>
      <div class="language">{data.original_language}</div>
    </div>
    <div class="right">
      <div class="length">{isMovie ? data.runtime : data.episode_run_time}</div>
      <div class="rating">{data.rating}</div>
    </div>
  </div>
</div>

<style lang="scss">
  @use '@styles/util';

  .tmdb-card {
    position: relative;
    flex-direction: column;
    gap: 1rem;
    border-color: var(--c-card-border);
    background-color: var(--c-card-background);
    backdrop-filter: blur(10px);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        135deg,
        var(--c-quaternary) 0%,
        var(--c-tertiary) 50%,
        var(--c-quaternary) 100%
      );
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &::after {
      box-shadow: 0 20px 60px rgba(var(--tertiary-rgb), 0.2);
    }

    &:hover {
      img {
        transform: scale(1.05);
      }

      &::before {
        transform: scaleX(1);
      }
    }
  }

  .top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    @include util.mq(md) {
      flex-direction: row;
      text-align: left;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .poster {
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

  .overview {
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

  .genres {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    @include util.mq(md) {
      justify-content: flex-start;
    }
  }

  .genre {
    background-color: var(--c-card-content-background);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: var(--font-family-mono);
    color: var(--c-card-content-background-text);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .bottom {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    border-top: 1px solid var(--c-card-separator);
    margin-top: auto;
    font-size: 0.8rem;
    font-family: var(--font-family-mono);
    color: var(--c-text-muted);

    .left,
    .right {
      display: flex;
      gap: 0.75rem;
    }
  }

  .type {
    color: var(--c-tertiary);
  }

  .language {
    text-transform: uppercase;
  }
</style>
