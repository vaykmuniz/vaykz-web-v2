<script lang="ts">
	import DisplayCard from "$lib/components/display-card/+display-card.svelte";
	import me from '$lib/assets/me.png'
</script>

<section class="w-full h-full px-2 md:px-12 flex flex-col text-sky-200">
	<h1 class="mt-4 text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">Saudades Games</h1>
	<hr class="my-2 w-full md:w-1/4 h-px opacity-50"/>

	<div class="mt-4 w-full h-88 flex flex-row gap-4">
		<a href="/saudades/games/autobattler" >
			<DisplayCard
			img={me}
			title='autobattler'
			label='soon'
			/>
		</a>

		<a href="/saudades/games/tarot">
			<DisplayCard
				img={me}
				title='tarot'
				label='soon'
			/>
		</a>
	</div>

</section>
