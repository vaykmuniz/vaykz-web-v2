<script lang="ts">
	import Card from "$lib/components/card/+card.svelte"
	import Carousel from "$lib/components/carousel/+carousel.svelte";
	import { t } from "$lib/i18n/translations";
	import Pill from "$lib/components/pill/+pill.svelte"
	import { games } from "$lib/games/games.const";
	import readme from "$lib/games/readme/readme";
</script>

<section class="saudades-page flex min-h-screen w-full flex-col px-2 text-sky-200">
	<h1 class="mt-4 font-oswald text-2xl font-thin tracking-widest uppercase opacity-50 md:px-12">{$t("saudades.title")}</h1>
	<hr class="my-2 h-px w-full opacity-50 md:w-1/4" />

	<div class="h-90 w-full flex flex-row gap-5 items-center">
		<div class="ml-2">
			<iframe src={readme.src} title={readme.title} class={readme.class}></iframe>
		</div>
		<div>
			<h2 class="text-4xl font-thin">{$t("saudades.hero_title")}</h2>
			<h4 class="text-lg font-light opacity-70">{$t("saudades.hero_subtitle")}</h4>
		</div>
	</div>

	<hr class="my-2 h-px w-full opacity-50 md:w-1/4" />

	
	<div class="flex h-88 w-full flex-row gap-4">
		<Carousel perPage={1} autoplay={2000} loop={true} draggable={true} dots={true}>
			{#each games as g}
			<a href={`/saudades/games/${g.slug}`} class="block h-full px-2 pt-4">
				<Card
					class="transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/70"
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
	
</section>

<style>
	.saudades-page {
		background-color: #111;
		background-image:
			linear-gradient(
				45deg,
				rgba(255, 255, 255, 0.03) 25%,
				transparent 25%,
				transparent 75%,
				rgba(255, 255, 255, 0.03) 75%
			),
			linear-gradient(
				-45deg,
				rgba(255, 255, 255, 0.03) 25%,
				transparent 25%,
				transparent 75%,
				rgba(255, 255, 255, 0.03) 75%
			);
		background-size: 60px 60px;
	}
</style>
