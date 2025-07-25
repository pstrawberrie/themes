<script lang="ts">
  import Nav from '@components/Nav.svelte';
  import Footer from '@components/Footer.svelte';
  import Hero from '@components/Hero.svelte';
</script>

<main>
  <Nav />
  <Hero
    title="Welcome to pstraw.net"
    image="/images/hero.png"
    subtitle="This is my cozy little home on the internet. I use it to keep track of my media and notes."
  />
  <Footer />
</main>
