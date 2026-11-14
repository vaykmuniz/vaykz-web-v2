<script lang="ts">
 import { onMount } from 'svelte';
 import { t } from '$lib/i18n/translations';
 import Card from '$lib/components/card/+card.svelte';
 import Carousel from '$lib/components/carousel/+carousel.svelte';
 interface Repo { name: string; description: string | null; language: string | null; html_url: string; }
 let repos = $state<Repo[]>([]);
 let loading = $state(true);
 let failed = $state(false);
 const contributions = [
  { id: 'medprev', company: 'Medprev Online', steps: ['QUERY', 'RESOLVE', 'CACHE'], stack: 'GraphQL / Node.js / Caching' },
  { id: 'bornlogic', company: 'Bornlogic', steps: ['SHELL', 'MODULES', 'UI'], stack: 'React / Single SPA / Storybook' },
  { id: 'cargon', company: 'CargOn', steps: ['VALIDATE', 'PROCESS', 'ISSUE'], stack: 'MySQL / Integrations / APIs' }
 ];
 onMount(() => {
  const controller = new AbortController();
  async function load() {
   try {
    const res = await fetch('https://api.github.com/search/repositories?q=user:vaykmuniz+topic:project', { signal: controller.signal });
    if (!res.ok) throw new Error('GitHub request failed');
    const data = await res.json();
    if (!Array.isArray(data.items)) throw new Error('Invalid repository response');
    repos = data.items;
   } catch { if (!controller.signal.aborted) failed = true; }
   finally { if (!controller.signal.aborted) loading = false; }
  }
  void load();
  return () => controller.abort();
 });
</script>

<div class="flex w-full flex-col gap-16 py-10">
 <h1 class="font-oswald text-4xl font-normal text-content uppercase sm:text-[44px]">{$t('work.software.projects_title')}</h1>
 <section class="flex flex-col gap-6" aria-labelledby="contributions-title">
  <p class="font-inter text-[10px] tracking-[1.7px] text-accent uppercase">{$t('projects.selected')}</p>
  <h2 id="contributions-title" class="font-oswald text-3xl leading-tight text-content uppercase sm:text-[44px]">{$t('projects.headline')}</h2>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
   {#each contributions as contribution, i}
    <Card variant="project">
     <div class="flex flex-col gap-8 bg-elevated p-6 font-inter">
      <p class="text-[10px] text-muted uppercase">{$t('projects.study')} / 0{i + 1}</p>
      <div class="flex flex-wrap items-center gap-2 text-[10px] text-accent">
       {#each contribution.steps as step, index}
        {#if index}<span aria-hidden="true" class="text-muted">→</span>{/if}
        <span class="border border-accent/30 px-3 py-3">{step}</span>
       {/each}
      </div>
      <p class="text-[9px] text-muted uppercase">{$t(`projects.${contribution.id}.label`)}</p>
     </div>
     <div class="flex flex-1 flex-col gap-4 p-6">
      <p class="font-inter text-[10px] text-accent uppercase">{contribution.company}</p>
      <h3 class="font-oswald text-[25px] leading-[1.15] text-content">{$t(`projects.${contribution.id}.title`)}</h3>
      <p class="font-inter text-sm leading-[1.55] text-muted">{$t(`projects.${contribution.id}.description`)}</p>
      <p class="mt-auto border-t border-line pt-4 font-inter text-[10px] text-muted">{contribution.stack}</p>
     </div>
    </Card>
   {/each}
  </div>
 </section>
 <section class="flex min-w-0 flex-col gap-6" aria-labelledby="github-projects-title" aria-busy={loading}>
  <h2 id="github-projects-title" class="font-oswald text-3xl text-content uppercase">{$t('projects.github')}</h2>
  {#if loading}
   <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
    {#each [1,2,3] as item}<Card variant="project"><div class="h-20 animate-pulse bg-elevated motion-reduce:animate-none"></div><div class="space-y-4 p-6"><div class="h-6 w-2/3 bg-accent/20"></div><div class="h-16 bg-accent/10"></div></div></Card>{/each}
   </div>
  {:else if failed}<p role="status" class="font-inter text-muted">{$t('projects.error')}</p>
  {:else if !repos.length}<p role="status" class="font-inter text-muted">{$t('projects.empty')}</p>
  {:else}
   <Carousel variant="projects" perPage={{0: 1, 640: 2, 1024: 3}}>
    {#each repos as repo}
     <div class="px-2">
      <Card variant="project">
       <div class="relative bg-elevated py-3 pr-14 pl-5 text-accent">
        <h3 class="min-w-0 break-words font-oswald text-[25px] leading-tight text-content"><a href={repo.html_url} target="_blank" rel="noopener noreferrer" class="hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{repo.name.replaceAll('-', ' ')}</a></h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label={repo.name} class="absolute top-1 right-1 flex size-11 items-center justify-center text-xl hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent">↗</a>
       </div>
       <div class="flex min-h-40 flex-1 flex-col gap-4 p-5">
        {#if repo.description}<p class="font-inter text-sm leading-[1.55] text-muted">{repo.description}</p>{/if}
        {#if repo.language}<p class="mt-auto border-t border-line pt-4 font-inter text-[10px] text-muted">{repo.language}</p>{/if}
       </div>
      </Card>
     </div>
    {/each}
   </Carousel>
  {/if}
 </section>
</div>
