<script lang="ts">
	import { t } from '$lib/i18n/translations';
	const areas = ['healthcare', 'logistics', 'marketing', 'finance', 'enterprise'];
</script>

<section class="flex w-full flex-col items-start gap-8 py-8 md:gap-10 md:py-10">
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
			<ul class="hidden flex-wrap items-center gap-x-8 gap-y-4 text-base text-muted lg:flex">
				{#each areas as area}
					<li>{$t(`home.hero.areas.${area}`)}</li>
				{/each}
			</ul>
			<div class="-mx-4 flex w-[calc(100%+32px)] min-w-0 items-center gap-3 sm:-mx-6 sm:w-[calc(100%+48px)] lg:hidden">
				<div class="areas-window min-w-0 flex-1 overflow-hidden">
					<div class="areas-track flex w-max">
						{#each [false, true] as duplicate}
							<ul aria-hidden={duplicate ? 'true' : undefined} class="flex shrink-0 items-center gap-8 pr-8 text-base whitespace-nowrap text-muted">
								{#each areas as area}
									<li>{$t(`home.hero.areas.${area}`)}</li>
								{/each}
							</ul>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
 .areas-track { animation: areas-scroll 22s linear infinite; }
 @keyframes areas-scroll { to { transform: translateX(-50%); } }
 @media (prefers-reduced-motion: reduce) {
  .areas-track { animation: none; }
  .areas-window { overflow-x: auto; }
  .areas-track ul[aria-hidden='true'] { display: none; }
 }

 @media (min-width: 1024px) and (max-height: 800px) {
  .hero-title { font-size: 56px; }
  .hero-summary { font-size: 16px; line-height: 1.5; }
 }
</style>
