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
    subtitle="Hello. You've stumbled across my little corner of the internet. This is my personal site where I keep track of my media and notes."
    feature="stars"
  />
  <div class="box">
    <h2>Media</h2>
  </div>
  <div class="box">
    <h2>Notes</h2>
  </div>
  <Footer />
</main>
