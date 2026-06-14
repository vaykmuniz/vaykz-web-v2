<script lang="ts">
	import Card from "$lib/components/card/+card.svelte"
	import Carousel from "$lib/components/carousel/+carousel.svelte";
	import { t } from "$lib/i18n/translations";
	import Pill from "$lib/components/pill/+pill.svelte"
	import { games } from "$lib/games/games.const";
	import readme from "$lib/games/readme/readme";
</script>

<section class="flex min-h-screen w-full flex-col gap-2 px-2 text-sky-200">
	<h1 class="mt-4 font-oswald text-5xl font-thin tracking-widest uppercase opacity-50 md:px-12 text-center border-b-sky-200/45 border-b pb-4">{$t("saudades.title")}</h1>
	
	<div class="flex w-full flex-col items-center gap-4 px-2 text-center">
		<h2 class="text-4xl font-thin">{$t("saudades.hero_title")}</h2>
		<h4 class="text-lg font-light opacity-70">{$t("saudades.hero_subtitle")}</h4>
	</div>


	<div class="flex h-88 w-full flex-row gap-4">
		<Carousel>
			{#each games as g}
			<a href={`/saudades/games/${g.slug}`} class="block h-full md:w-xl px-2 pt-4">
				<Card
					class="transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/70 ml-30"
				>
					<img src={g.thumbnail} alt={g.title} class="h-52 w-full object-cover" loading="lazy" />
					
					<div class="flex flex-1 flex-col gap-3 p-4">
						<h3 class="text-lg font-semibold leading-tight">{g.title}</h3>
						<div class="mt-auto">
							{#each g.labels as label}
							<Pill>
								{label}
							</Pill>
							{/each}
						</div>
					</div>
				</Card>
			</a>
			{/each}
		</Carousel>
	</div>
	
	<div class="ml-2 flex justify-center">
		<iframe src={readme.src} title={readme.title} class={readme.class}></iframe>
	</div>


</section>

