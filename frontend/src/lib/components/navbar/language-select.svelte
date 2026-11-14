<script lang="ts">
 import LanguageFlag from './language-flag.svelte';
 import { tick } from 'svelte';
 import { afterNavigate } from '$app/navigation';
 import { locale, t } from '$lib/i18n/translations';
 let { disabled = false } = $props<{ disabled?: boolean }>();
 const languages = [{value:'en',label:'EN',name:'English',flag:'🇺🇸'},{value:'es',label:'ES',name:'Español',flag:'🇪🇸'},{value:'br',label:'PT',name:'Português',flag:'🇧🇷'}];
 let open = $state(false);
 let root: HTMLDivElement;
 let trigger: HTMLButtonElement;
 let list = $state<HTMLUListElement>();
 const selected = $derived(languages.find(x => x.value === $locale) ?? languages[0]);
 function close(restore = false) { open = false; if (restore) trigger?.focus(); }
 async function show(index = languages.findIndex(x => x.value === $locale)) {
  open = true; await tick(); list?.querySelectorAll<HTMLButtonElement>('button')[index]?.focus();
 }
 function keydown(event: KeyboardEvent) {
  const buttons = Array.from(list!.querySelectorAll<HTMLButtonElement>('button'));
  const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
  let next: number;
  if (event.key === 'ArrowDown') next = (index + 1) % 3;
  else if (event.key === 'ArrowUp') next = (index + 2) % 3;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = 2;
  else if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(true); return; }
  else return;
  event.preventDefault(); buttons[next]?.focus();
 }
 afterNavigate(() => close());
 $effect(() => { if (disabled) close(); });
</script>

<svelte:window onpointerdown={(event) => { if (open && !root.contains(event.target as Node)) close(); }} />
<div bind:this={root} class="relative text-content" onfocusout={(event) => { if (!root.contains(event.relatedTarget as Node)) close(); }}>
 <button bind:this={trigger} type="button" {disabled} aria-label={`${$t('a11y.language')}: ${selected.name}`} aria-haspopup="listbox" aria-expanded={open} aria-controls="language-options" onclick={() => open ? close() : show()} onkeydown={(event) => { if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); show(event.key === 'ArrowUp' ? 2 : undefined); } }} class="flex min-h-11 items-center gap-2 rounded px-2 text-xs font-medium hover:bg-elevated focus-visible:outline-2 focus-visible:outline-accent">
  <LanguageFlag language={selected.value} /><span>{selected.label}</span><span aria-hidden="true" class="text-navigation-muted">{open ? '⌃' : '⌄'}</span>
 </button>
 {#if open}
  <ul bind:this={list} id="language-options" role="listbox" aria-label={$t('a11y.language')} onkeydown={keydown} class="absolute top-full right-0 z-50 mt-2 min-w-32 rounded border border-line bg-surface p-1 shadow-lg">
   {#each languages as language}
    <li role="presentation">
     <button type="button" role="option" aria-selected={$locale === language.value} aria-label={language.name} onclick={() => { locale.set(language.value); close(true); }} class="flex min-h-11 w-full items-center gap-3 rounded px-3 text-xs hover:bg-elevated focus-visible:outline-2 focus-visible:outline-accent {$locale === language.value ? 'text-accent' : 'text-content'}">
      <LanguageFlag language={language.value} /><span>{language.label}</span>{#if $locale === language.value}<span aria-hidden="true" class="ml-auto">✓</span>{/if}
     </button>
    </li>
   {/each}
  </ul>
 {/if}
</div>
