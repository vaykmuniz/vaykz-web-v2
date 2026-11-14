<script lang="ts">
  import SkillGroups from '$lib/components/skill-groups/skill-groups.svelte';
  import { automationSkills } from '$lib/skills.const';
  import { t } from '$lib/i18n/translations';
  const sections = [
    { title: 'home.engineer.bachelors.title', description: 'home.engineer.paragraph_2' },
    { title: 'home.engineer.internship.title', description: 'home.engineer.internship.description' }
  ];
</script>

<section class="flex w-full flex-col gap-8 py-10" aria-labelledby="automation-title">
  <header class="flex flex-col items-start gap-4">
    <h1 id="automation-title" class="font-oswald text-4xl leading-[1.15] font-normal text-content uppercase sm:text-[44px]">
      {$t('home.engineer.title')}
    </h1>
    <p class="font-inter text-sm leading-[1.8] text-muted">
      {$t('home.engineer.paragraph_1')}{' '}<a href="https://www.utfpr.edu.br/" target="_blank" rel="noopener noreferrer" class="text-accent underline decoration-accent/50 underline-offset-4 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent">{$t('home.engineer.paragraph_1_link')}</a>
    </p>
  </header>

  <div class="flex w-full flex-col divide-y divide-line">
    {#each sections as section}
      <section class="py-6">
        <div class="grid min-w-0 grid-cols-1 gap-3 border-l border-accent/50 px-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <h2 class="font-inter text-[11px] leading-[1.55] font-medium tracking-wide text-accent uppercase">{$t(section.title)}</h2>
          <p class="min-w-0 font-inter text-sm leading-[1.8] text-content">{$t(section.description)}</p>
        </div>
      </section>
    {/each}
  </div>
  <SkillGroups groups={automationSkills} id="automation-skills" />
</section>
