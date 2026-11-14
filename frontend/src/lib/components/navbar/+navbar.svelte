<script lang="ts">
 import { page } from '$app/state';
 import { afterNavigate } from '$app/navigation';
 import { t } from '$lib/i18n/translations';
 import Drawer from '$lib/components/drawer/+drawer.svelte';
 import koji from '$lib/assets/favicon.png';
 import LanguageSelect from './language-select.svelte';
 import LinesMenu from './lines-menu.svelte';
 let openDrawer = $state(false);
 const links = ['/', '/software', '/automation', '/skills', '/projects', '/saudades'];
 const active = (href: string) => href === '/' ? page.url.pathname === '/' : page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
 afterNavigate(() => { openDrawer = false; });
 $effect(() => {
  const query = window.matchMedia('(min-width: 1024px)');
  const close = () => { if (query.matches) openDrawer = false; };
  query.addEventListener('change', close);
  return () => query.removeEventListener('change', close);
 });
</script>

<header class="sticky top-0 z-40 w-full border-b border-navigation-line bg-canvas font-inter">
 <div class="site-container flex min-h-[72px] items-center justify-between gap-4 py-4 lg:min-h-[87px] lg:py-6">
  <a href="/" class="flex shrink-0 items-center gap-3 text-[15px] font-semibold text-content focus-visible:outline-2 focus-visible:outline-accent">
   <img src={koji} alt="" width="38" height="38" class="size-[38px] -translate-y-1 object-contain" />
   <span class="leading-none">gabriel muniz</span>
  </a>
  <nav aria-label={$t('a11y.main_navigation')} class="hidden items-center gap-[26px] text-[13px] leading-[1.55] lg:flex">
   {#each links as href}
    <a {href} aria-current={active(href) ? 'page' : undefined} class="whitespace-nowrap transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent {active(href) ? 'font-semibold text-accent' : 'text-navigation-muted'}">{href === '/' ? '.home' : href}</a>
   {/each}
  </nav>
  <div class="flex shrink-0 items-center gap-4">
   <LanguageSelect disabled={openDrawer} />
   <button type="button" aria-label={$t('a11y.open_navigation_drawer')} aria-expanded={openDrawer} aria-controls="mobile-navigation" onclick={() => { openDrawer = true; }} class="flex size-11 items-center justify-center text-accent focus-visible:outline-2 focus-visible:outline-accent lg:hidden"><LinesMenu /></button>
  </div>
 </div>
</header>
<Drawer open={openDrawer} handleClose={() => { openDrawer = false; }}>
 <nav id="mobile-navigation" aria-label={$t('a11y.main_navigation')} class="flex flex-col gap-6 px-6 py-20 font-inter text-2xl">
  {#each links as href}
   <a {href} aria-current={active(href) ? 'page' : undefined} onclick={() => { openDrawer = false; }} class="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent {active(href) ? 'font-semibold text-accent' : 'text-navigation-muted'}">{href === '/' ? '.home' : href}</a>
  {/each}
 </nav>
</Drawer>
