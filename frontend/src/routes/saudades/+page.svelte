<script lang="ts">
	import Card from "$lib/components/card/+card.svelte"
	import Carousel from "$lib/components/carousel/+carousel.svelte";
	import Pill from "$lib/components/pill/+pill.svelte"
	import { games } from "$lib/games/games.const";
</script>

<section class="w-full h-full px-2 md:px-12 flex flex-col text-sky-200">
	<h1 class="mt-4 text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">Saudades Games</h1>
	<hr class="my-2 w-full md:w-1/4 h-px opacity-50"/>

	<div class="w-full h-88 flex flex-row gap-4">
	<Carousel>
		{#each games as g}
		<a href={`/saudades/games/${g.slug}`} class="pt-4">
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
