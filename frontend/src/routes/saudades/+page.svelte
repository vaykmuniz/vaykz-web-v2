<script lang="ts">
 import { games } from '$lib/games/games.const';
 import { t } from '$lib/i18n/translations';
 import GameModal from '$lib/components/game-modal/+game-modal.svelte';
 let fullscreen = $state(false);
</script>
<svelte:head><title>Saudades — {$t('saudades.collection')}</title><meta name="description" content={$t('saudades.intro')} /></svelte:head>
<section class="saudades-diamonds saudades-hero w-full bg-elevated"><div class="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-2">
 <div><p class="mb-5 text-xs tracking-widest uppercase text-dark-orange-accent">Saudades Games</p><h1 class="max-w-xl text-4xl leading-tight font-semibold text-accent sm:text-6xl">{$t('saudades.headline')}</h1><p class="mt-6 max-w-md text-lg leading-relaxed text-muted">{$t('saudades.intro')}</p><a href="#collection" class="mt-8 inline-flex bg-accent px-6 py-3 font-semibold text-on-accent hover:bg-accent-hover">{$t('saudades.collection')} ↓</a></div>
 <div class="mx-auto w-full max-w-xl"><div class="overflow-hidden border border-line bg-canvas">{#if !fullscreen}<iframe src="/readme/read.me.html" title="ReadMe" class="block aspect-video w-full border-0"></iframe>{/if}</div><div class="mt-3 flex items-center justify-between gap-3"><a href="/saudades/games/readme" class="text-sm text-accent">ReadMe ↗</a><button class="border border-line px-4 py-2 text-xs text-muted hover:text-accent" onclick={() => fullscreen = true}>{$t('saudades.fullscreen')}</button></div></div>
</div></section>
<div class="saudades-divider" aria-hidden="true"></div>
<section id="collection" class="palette-dark-orange w-full bg-elevated text-content"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16"><h2 class="mb-7 text-3xl font-semibold text-accent">{$t('saudades.collection')}</h2><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{#each games as game, index}<a href={`/saudades/games/${game.slug}`} class="{index % 2 === 1 ? 'palette-ice-blue' : ''} group overflow-hidden border border-line bg-surface transition hover:-translate-y-1 hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"><div class="saudades-diamonds flex aspect-video items-center justify-center bg-elevated p-4"><img src={game.thumbnail} alt={game.title} loading="lazy" class="h-full w-full object-contain transition duration-300 group-hover:scale-105" /></div><div class="p-6"><h3 class="text-xl font-semibold text-accent">{game.title}</h3><p class="mt-3 text-muted">{$t(`saudades.${game.slug}.summary`)}</p><span class="mt-6 inline-block text-sm text-accent">{$t('saudades.discover')} →</span></div></a>{/each}</div></div></section>
<GameModal open={fullscreen} src="/readme/read.me.html" title="ReadMe" orientation="portrait" onClose={() => fullscreen = false} />

<style>
 .palette-ice-blue {
  --palette-canvas: var(--color-ice-blue-canvas);
  --palette-surface: var(--color-ice-blue-surface);
  --palette-elevated: var(--color-ice-blue-elevated);
  --palette-content: var(--color-ice-blue-content);
  --palette-muted: var(--color-ice-blue-muted);
  --palette-line: var(--color-ice-blue-line);
  --palette-accent: var(--color-ice-blue-accent);
 }
</style>
