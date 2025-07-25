import { mount } from 'svelte';

import '@styles/reset.scss';
import '@styles/base.scss';
import '@styles/themes/chill-space/chill-space.scss';

import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
