<script lang="ts">
  import { t } from '$lib/i18n/translations';
  import type { SkillGroup } from '$lib/skills.const';
  let { groups, id }: { groups: SkillGroup[]; id: string } = $props();
</script>

<section class="flex w-full flex-col gap-6" aria-labelledby={id}>
  <h2 {id} class="font-oswald text-3xl leading-[1.15] font-normal text-content uppercase">
    {$t('work.software.skills_title')}
  </h2>
  <div class="flex w-full flex-col divide-y divide-line">
    {#each groups as group}
      <section class="py-6">
        <div class="grid min-w-0 grid-cols-1 gap-3 border-l border-accent/50 px-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <h3 class="font-inter text-[11px] leading-[1.55] font-medium tracking-wide text-accent uppercase">{$t(group.title)}</h3>
          <p class="min-w-0 font-inter text-sm leading-[1.8] text-content">{group.skills.join(' · ')}</p>
        </div>
      </section>
    {/each}
  </div>
</section>
