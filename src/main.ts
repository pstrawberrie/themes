import { mount } from 'svelte';

import '@styles/reset.scss';
import '@styles/base.scss';
import '@styles/themes/chill-space/chill-space.scss';
import '@styles/themes/chill-space/hero-stars.scss';

import App from './App.svelte';
import Note from './Note.svelte';

const isHome = window.location.pathname === '/';

const app = mount(isHome ? App : Note, {
  target: document.getElementById('app')!,
});

export default app;
