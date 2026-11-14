<script lang="ts">
 import LanguageSelect from '$lib/components/navbar/language-select.svelte';
 import { t } from '$lib/i18n/translations';
 let { children } = $props();
</script>
<div class="min-h-screen bg-canvas text-content">
 <header class="border-b border-line bg-surface">
  <nav aria-label="Saudades" class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
   <a href="/saudades" class="font-oswald text-2xl tracking-widest text-accent focus-visible:outline-2">SAUDADES<span class="text-dark-orange-accent">.</span></a>
   <div class="flex items-center gap-3 sm:gap-6"><a href="/" class="text-sm text-muted hover:text-accent">{$t('saudades.portfolio')}</a><LanguageSelect /></div>
  </nav>
 </header>
 <main class="w-full">{@render children?.()}</main>
</div>

<style>
 :global(.saudades-divider) {
  position: relative;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-ice-blue-accent), var(--color-dark-orange-accent), transparent);
 }
 :global(.saudades-divider::after) {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  background: var(--color-dark-orange-accent);
  border: 2px solid var(--color-ice-blue-canvas);
  transform: translate(-50%, -50%) rotate(45deg);
 }
 :global(.saudades-hero) {
  --diamond-opacity: 3%;
 }
 :global(.saudades-diamonds) {
  background-image:
   linear-gradient(45deg, color-mix(in srgb, var(--color-accent) var(--diamond-opacity, 9%), transparent) 25%, transparent 25%, transparent 75%, color-mix(in srgb, var(--color-accent) var(--diamond-opacity, 9%), transparent) 75%),
   linear-gradient(-45deg, color-mix(in srgb, var(--color-accent) var(--diamond-opacity, 9%), transparent) 25%, transparent 25%, transparent 75%, color-mix(in srgb, var(--color-accent) var(--diamond-opacity, 9%), transparent) 75%);
  background-size: 64px 64px;
 }
</style>
