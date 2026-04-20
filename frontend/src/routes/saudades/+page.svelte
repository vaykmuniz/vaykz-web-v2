<script lang="ts">
	import DisplayCard from "$lib/components/display-card/+display-card.svelte";
	import { games } from "$lib/games/games.const";
</script>

<section class="w-full h-full px-2 md:px-12 flex flex-col text-sky-200">
	<h1 class="mt-4 text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">Saudades Games</h1>
	<hr class="my-2 w-full md:w-1/4 h-px opacity-50"/>

	<div class="mt-4 w-full h-88 flex flex-row gap-4">
		{#each games as g}
			<a href={`/saudades/games/${g.slug}`} >
				<DisplayCard
				img={g.thumbnail}
				title={g.title}
				label={g.labels[0]}
				/>
			</a>
		{/each}
	</div>

</section>
