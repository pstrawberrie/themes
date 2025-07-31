<footer>
  <div class="container">
    <div class="top">
      <div class="left">
        <a href="/" class="logo text-gradient">pstraw.net</a>
        <p>Nice to see you - come again soon.</p>
      </div>
      <div class="right">stuff goes here</div>
    </div>
    <div class="bottom">
      <p>
        &copy; {new Date().getFullYear()} SITE_NAME • Some more sweet info
      </p>
    </div>
  </div>
</footer>

<style lang="scss">
  @use '@styles/util';
  footer {
    position: relative;
    background: linear-gradient(135deg, var(--c-background) 0%, black 100%);
    border-top: 1px solid rgba(var(--background-accent-rgb), 0.2);
    margin-top: var(--space-page-v);
    padding: 3rem 0 1rem;
  }

  .top {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--c-text-muted);

    @include util.mq(md) {
      grid-template-columns: 1fr auto;
      gap: 2rem;
      text-align: left;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    p {
      font-size: 1rem;

      @include util.mq(md) {
        max-width: 300px;
      }
    }
  }

  .logo {
    display: block;
    margin-bottom: 0.5rem;

    @include util.mq(md) {
      margin-right: auto;
    }
  }

  .bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(var(--background-accent-rgb), 0.2);
    color: var(--c-text-muted);
    text-align: center;

    p {
      font-size: 0.875rem;
    }
  }
</style>
