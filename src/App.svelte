<script lang="ts">
  import Nav from '@components/Nav.svelte';
  import Footer from '@components/Footer.svelte';
  import Hero from '@components/Hero.svelte';
  import TMDBCard from '@components/TMDBCard.svelte';
  import NoteCard from '@components/NoteCard.svelte';

  const mockupTMDB = [
    {
      collection: 'shows',
      poster_path: '/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg',
      adult: 0,
      genres:
        '[{"id":10765,"name":"Sci-Fi & Fantasy"},{"id":18,"name":"Drama"},{"id":10759,"name":"Action & Adventure"}]',
      id: 48866,
      original_language: 'en',
      overview:
        "100 years in the future, when the Earth has been abandoned due to radioactivity, the last surviving humans live on an ark orbiting the planet — but the ark won't last forever. So the repressive regime picks 100 expendable juvenile delinquents to send down to Earth to see if the planet is still habitable.",
      first_air_date: '2014-03-19',
      title: 'The 100',
      episode_run_time: '[42]',
      number_of_episodes: 100,
      number_of_seasons: 7,
      in_production: 0,
      rating: 'TV-14',
      createdAt: '2024-12-18 23:00:00.000 +00:00',
      updatedAt: '2025-07-07 21:31:00.781 +00:00',
    },
    {
      collection: 'shows',
      poster_path: '/bXKnfvTnpmyStp3R49NBQSjOVCk.jpg',
      adult: 0,
      genres: '[{"id":18,"name":"Drama"},{"id":9648,"name":"Mystery"}]',
      id: 195928,
      original_language: 'fr',
      overview:
        "After finding a young man's remains, Léa wakes up in the 90s and body swaps seven times as she tries to solve the mystery of his death — and prevent it.",
      first_air_date: '2022-04-28',
      title: 'The 7 Lives of Lea',
      episode_run_time: '[41]',
      number_of_episodes: 7,
      number_of_seasons: 1,
      in_production: 0,
      rating: 'TV-MA',
      createdAt: '2024-12-12 23:46:13.000 +00:00',
      updatedAt: '2025-07-07 21:30:52.557 +00:00',
    },
    {
      collection: 'movies',
      poster_path: '/fceheXB5fC4WrLVuWJ6OZv9FXYr.jpg',
      adult: 0,
      genres: '[{"id":80,"name":"Crime"},{"id":53,"name":"Thriller"},{"id":18,"name":"Drama"}]',
      id: 302946,
      original_language: 'en',
      overview:
        'As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities and the body count starts to rise.',
      release_date: '2016-10-13',
      title: 'The Accountant',
      runtime: 128,
      rating: 'R',
      createdAt: '2024-12-12 01:20:36.000 +00:00',
      updatedAt: '2025-07-07 21:31:49.646 +00:00',
    },
    {
      collection: 'movies',
      poster_path: '/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg',
      adult: 0,
      genres: '[{"id":10752,"name":"War"},{"id":36,"name":"History"},{"id":18,"name":"Drama"}]',
      id: 49046,
      original_language: 'de',
      overview:
        'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.',
      release_date: '2022-10-07',
      title: 'All Quiet on the Western Front',
      runtime: 147,
      rating: 'R',
      createdAt: '2024-11-22 05:47:21.000 +00:00',
      updatedAt: '2025-07-07 21:31:29.042 +00:00',
    },
    {
      collection: 'movies',
      poster_path: '/jjs3hE3mQlVGTX3u5ZH2EJBJpf3.jpg',
      adult: 0,
      genres: '[{"id":99,"name":"Documentary"}]',
      id: 743601,
      original_language: 'en',
      overview:
        'Using raw, firsthand footage, this documentary examines the disappearance of Shanann Watts and her children, and the terrible events that followed.',
      release_date: '2020-09-29',
      title: 'American Murder: The Family Next Door',
      runtime: 83,
      rating: 'R',
      createdAt: '2025-03-01 23:18:15.000 +00:00',
      updatedAt: '2025-07-07 21:33:16.310 +00:00',
    },
    {
      collection: 'shows',
      poster_path: '/htazQ0cPoloL5SJ2bqOCKh9UTcc.jpg',
      adult: 0,
      genres: '[{"id":10765,"name":"Sci-Fi & Fantasy"},{"id":18,"name":"Drama"}]',
      id: 79130,
      original_language: 'en',
      overview:
        'After a massive alien artifact lands on Earth, Niko Breckinridge leads an interstellar mission to track down its source and make first contact.',
      first_air_date: '2019-07-25',
      title: 'Another Life',
      episode_run_time: '[45]',
      number_of_episodes: 20,
      number_of_seasons: 2,
      in_production: 0,
      rating: 'TV-MA',
      createdAt: '2024-12-12 23:31:09.000 +00:00',
      updatedAt: '2025-07-07 21:30:50.002 +00:00',
    },
  ];

  const mockupNotes = [
    {
      collection: 'notes',
      id: 'pswg-dev-tracking',
      slug: 'pswg-dev-tracking',
      title: 'pSWG Development Tracking',
      date: '2025-06-20T00:00:00.000Z',
      updated: '2025-07-14T00:00:00.000Z',
      description: 'Development tracking and details for the pSWG server',
      authors: ['pstraw'],
      tags: ['swg', 'dev'],
      published: true,
    },
    {
      collection: 'notes',
      id: 'swgemu-server-reference',
      slug: 'swgemu-server-reference',
      title: 'SWGEmu Server Setup Reference',
      date: '2025-05-15T00:00:00.000Z',
      updated: '2025-06-26T00:00:00.000Z',
      description: 'Notes on setting up a SWGEmu server with WSL on Windows',
      authors: ['pstraw'],
      tags: ['dev', 'linux', 'swg'],
      published: true,
    },
    {
      collection: 'notes',
      id: 'development-resources',
      slug: 'development-resources',
      title: 'Development Resources',
      updated: '2025-05-15T00:00:00.000Z',
      date: '2025-01-07T00:00:00.000Z',
      description: 'A working list containing links for various areas of development',
      authors: ['pstraw'],
      tags: ['dev'],
      published: true,
    },
    {
      collection: 'notes',
      id: 'thanks',
      slug: 'thanks',
      title: 'Thanks',
      date: '2025-01-01T00:00:00.000Z',
      description: 'Thanks to everybody who helped make this site possible!',
      authors: ['pstraw'],
      tags: ['general'],
      published: true,
    },
  ];
</script>

<main id="main-content">
  <Nav />
  <Hero
    title="Welcome to pstraw.net"
    image="/images/hero.png"
    subtitle="Hello. You've stumbled across my little corner of the internet. This is my personal site where I keep track of my media and notes."
    feature="stars"
    buttons={[
      { title: 'View Recent Watches', href: '#media', class: 'cta' },
      { title: 'View Latest Notes', href: '#notes' },
    ]}
  />
  <section class="box" id="media">
    <div class="container">
      <div class="section-header">
        <h2>Recently Watched</h2>
        <p>New stuff, old stuff, hot stuff, cold stuff. These are the latest eye-gluers.</p>
      </div>
      <div class="movies-grid">
        {#each mockupTMDB as item, index}
          <TMDBCard data={item} {index} />
        {/each}
      </div>
    </div>
  </section>
  <section class="box" id="notes">
    <div class="container">
      <div class="section-header">
        <h2>Latest Notes</h2>
        <p>Because it's not a blog - it's a notes.</p>
      </div>
      <div class="notes-grid">
        {#each mockupNotes as item, index}
          <NoteCard data={item} {index} />
        {/each}
      </div>
    </div>
  </section>
  <Footer />
</main>

<style lang="scss">
  @use '@styles/util';

  #media {
    background: var(--c-background-gradient);
  }

  .movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;

    @include util.mq(md) {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
  }

  .notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;

    @include util.mq(md) {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
  }
</style>
