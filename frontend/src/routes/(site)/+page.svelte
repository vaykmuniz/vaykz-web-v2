<script lang="ts">
	import { t } from '$lib/i18n/translations';
</script>

<section class="flex w-full flex-col items-start gap-4 py-6">
	<p class="font-inter text-[11px] font-medium tracking-[1.8px] text-accent uppercase">
		Gabriel R. A. S. Muniz <span class="mx-2">/</span> {$t('home.hero.engineer')}
	</p>

	<h1 class="hero-title w-full font-oswald text-4xl leading-[1.08] uppercase sm:text-6xl lg:text-[78px]">
		<span class="block font-normal text-content">{$t('home.hero.software_title')}</span>
		<span class="block font-light text-accent">{$t('home.hero.automation_title')}<span class="block">{$t('home.hero.engineer')} (UTFPR)</span></span>
	</h1>

	<p class="hero-summary max-w-[640px] lg:max-w-[960px] font-inter text-base leading-[1.55] text-muted md:text-lg">
		{$t('home.hero.summary')}
	</p>
	<div class="mt-4 w-full border-y border-line py-4 font-inter">
		<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
			<p class="text-[10px] font-medium tracking-wide text-muted uppercase">
				{$t('home.hero.complexity')}
			</p>
			<ul class="flex flex-wrap items-center gap-x-8 gap-y-4 text-base text-muted">
				{#each ['healthcare', 'logistics', 'marketing', 'finance', 'enterprise'] as area}
					<li>{$t(`home.hero.areas.${area}`)}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
 @media (min-width: 1024px) and (max-height: 800px) {
  .hero-title { font-size: 56px; }
  .hero-summary { font-size: 16px; line-height: 1.5; }
 }
</style>
