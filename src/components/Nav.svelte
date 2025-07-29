<script lang="ts">
  import { throttle } from '../util';

  document.addEventListener('DOMContentLoaded', () => {
    const nav: HTMLElement = document.querySelector('nav')!;
    let navHeight = nav.offsetHeight;

    window.addEventListener(
      'resize',
      throttle(() => {
        navHeight = nav.offsetHeight;
        console.log('resize', navHeight);
      })
    );

    window.addEventListener(
      'scroll',
      throttle(() => {
        const scrolledPast = window.scrollY > navHeight;
        console.log(navHeight, window.scrollY, scrolledPast);
        if (scrolledPast) {
          nav.classList.add('sticky');
        } else {
          nav.classList.remove('sticky');
        }
      })
    );
  });
</script>

<nav>
  <div class="container nav_content">
    <div class="nav_left">
      <a href="/" class="logo">pstraw.net</a>
    </div>
    <div class="nav_right">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="scss">
  nav {
    position: sticky;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.25rem var(--space-page-h);
    background-color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid rgba(var(--background-accent-rgb), 0.5);
    backdrop-filter: blur(10px);
    z-index: 100;
  }

  .nav_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: var(--font-family-brand);
    text-transform: uppercase;
    font-size: 1.4rem;
  }

  a {
    font-size: 1rem;
    font-weight: 500;
    color: var(--c-text-secondary);
    transition: 0.3s ease;

    &:hover {
      color: var(--c-text);
    }
  }
</style>
