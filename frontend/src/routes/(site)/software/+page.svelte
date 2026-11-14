<script lang="ts">
  import SkillGroups from '$lib/components/skill-groups/skill-groups.svelte';
  import { softwareSkills } from '$lib/skills.const';
  import { t } from '$lib/i18n/translations';
  import { EXPERIENCES } from './experience.const';

  let openSlug = $state<string | null>(null);
</script>

<section class="flex w-full flex-col gap-8 py-10" aria-labelledby="software-title">
  <header class="flex flex-col items-start gap-4">
    <h1 id="software-title" class="font-oswald text-4xl leading-[1.15] font-normal text-content uppercase sm:text-[44px]">
      {$t('work.software.title')}
    </h1>
    <p class="font-inter text-sm leading-[1.8] text-muted">{$t('work.software.description')}</p>
  </header>

  <div class="flex w-full flex-col divide-y divide-line">
    {#each EXPERIENCES as experience (experience.slug)}
      {@const expanded = openSlug === experience.slug}
      <section class="py-4">
        <div class="border-l border-accent/50 px-5">
          <h2>
            <button
              id={`experience-trigger-${experience.slug}`}
              type="button"
              aria-expanded={expanded}
              aria-controls={`experience-panel-${experience.slug}`}
              onclick={() => openSlug = expanded ? null : experience.slug}
              class="grid min-h-11 w-full cursor-pointer grid-cols-[minmax(0,1fr)_20px] items-start gap-x-4 gap-y-3 text-left font-inter hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:grid-cols-[160px_280px_minmax(0,1fr)_20px] lg:gap-x-8"
            >
              <span class="col-start-1 text-[11px] leading-[1.8] font-medium text-accent lg:col-auto">{$t(experience.periodKey)}</span>
              <span class="col-start-1 flex min-w-0 flex-col gap-1 lg:col-auto">
                <span class="text-xl leading-[1.55] font-medium text-accent">{experience.company}</span>
                <span class="text-[13px] leading-[1.55] font-normal text-content">{$t(experience.positionKey)}</span>
              </span>
              <span class="col-start-1 min-w-0 text-sm leading-[1.8] font-normal text-content lg:col-auto">{experience.stacks.join(' · ')}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" class="col-start-2 row-start-1 size-5 self-center text-accent transition-transform duration-[180ms] motion-reduce:transition-none lg:col-start-4 {expanded ? 'rotate-180' : ''}">
                <path d="m5 7.5 5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </h2>
          <div id={`experience-panel-${experience.slug}`} role="region" aria-labelledby={`experience-trigger-${experience.slug}`} aria-hidden={!expanded} inert={!expanded} class="accordion-panel" class:expanded>
            <div class="min-h-0 overflow-hidden">
            <ul class="pt-5 list-disc space-y-3 pl-5 font-inter text-sm leading-[1.8] text-content lg:ml-[192px]">
              {#each experience.descriptionKeys as descriptionKey}
                <li>{$t(descriptionKey)}</li>
              {/each}
            </ul>
            </div>
          </div>
        </div>
      </section>
    {/each}
  </div>
  <SkillGroups groups={softwareSkills} id="software-skills" />
</section>

<style>
  .accordion-panel {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    visibility: hidden;
    transition: grid-template-rows 240ms ease, opacity 240ms ease, visibility 240ms;
  }
  .accordion-panel.expanded {
    grid-template-rows: 1fr;
    opacity: 1;
    visibility: visible;
  }
  @media (prefers-reduced-motion: reduce) {
    .accordion-panel { transition: none; }
  }
</style>
