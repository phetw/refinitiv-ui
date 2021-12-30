// Components
import '@refinitiv-ui/elements/button';
import '@refinitiv-ui/elements/panel';
import '@refinitiv-ui/elements/text-field';
import '@refinitiv-ui/elements/interactive-chart';
import '@refinitiv-ui/elements/overlay-menu';
import '@refinitiv-ui/elements/email-field';
import '@refinitiv-ui/elements/datetime-picker';
import '@refinitiv-ui/elements/radio-button';
import '@refinitiv-ui/elements/dialog';
import '@refinitiv-ui/elements/header';
import '@refinitiv-ui/elements/tab';
import '@refinitiv-ui/elements/tab-bar';
import '@refinitiv-ui/elements/toggle';

// Chart data
import { chartData } from './data/chartData';
window.data = chartData;

(async () => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
  }
  const theme =  localStorage.getItem('theme');
  document.body.setAttribute('theme', theme)
  await import(`./halo/${theme}`);
})();