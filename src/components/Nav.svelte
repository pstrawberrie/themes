<script lang="ts">
  document.addEventListener('DOMContentLoaded', () => {
    const nav: HTMLElement = document.querySelector('nav')!;
    const navGhost: HTMLElement = document.querySelector('.nav-ghost')!;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // The observed element (ghost) is intersecting with the viewport
            // This means the navbar is not yet sticky or is no longer sticky
            nav.classList.remove('sticky');
          } else {
            // The observed element (ghost) is no longer intersecting
            // This means the navbar has become sticky
            nav.classList.add('sticky');
          }
        });
      },
      { root: null, threshold: 0 }
    );

    observer.observe(navGhost); // Observe the sentinel, or navbar if not using sentinel
  });
</script>

<div class="nav-ghost"></div>
<nav class="container">
  <div class="nav_content">
    <div class="nav_left">
      <a href="/" class="logo text-gradient">pstraw.net</a>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  .nav_content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid transparent;
    border-radius: 2rem;
    transition: 0.15s ease;
    padding: 0.48rem 0;
  }

  :global(nav.sticky .nav_content) {
    background-color: rgba(0, 0, 0, 0.85);
    border-color: rgba(var(--background-accent-rgb), 0.25);
    backdrop-filter: blur(10px);
    transform: translateY(8px);
    padding: 0 1.5rem;
  }

  ul a {
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    color: var(--c-text-secondary);
    transition: 0.3s ease;
    padding: 0.69rem 0;

    &:hover {
      color: var(--c-text);
    }
  }
</style>
