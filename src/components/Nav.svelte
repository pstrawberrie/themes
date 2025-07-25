<nav>
  <div class="box nav_content">
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem var(--space-page-h);
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
    font-size: 1.75rem;
  }

  a {
    font-size: 1rem;
  }
</style>
