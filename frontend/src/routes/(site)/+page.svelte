<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';

	const TITLES = $derived([$t("home.titles_1"), $t("home.titles_2"), $t("home.titles_3")]);
	const ABOUT_ME_PARAGRAPHS = $derived([
		$t("home.about_me_description_1"),
		$t("home.about_me_description_2"),
		$t("home.about_me_description_3")
	]);

	const nameOpacity = new Tween(0, { duration: 700 });
	const titlesOpacity = new Tween(0, { duration: 700 });
	const titlesX = new Tween(-100, { duration: 700 });
	const aboutTitleOpacity = new Tween(0, { duration: 700 });
	const aboutDescriptionOpacity = new Tween(0, { duration: 700 });

	onMount(async () => {
		await nameOpacity.set(0.5);
		await Promise.all([titlesOpacity.set(1), titlesX.set(0)]);
		await aboutTitleOpacity.set(1);
		await aboutDescriptionOpacity.set(1);
	});
</script>

<svelte:options runes={true} />


<section class="h-full w-full px-9 md:px-12 flex flex-col items-start justify-start">

	<div class="my-4 w-full flex flex-col items-start">
		<h1
			class="text-4xl uppercase font-thin tracking-widest font-oswald"
			style:opacity={nameOpacity.current}
		>
			gabriel r. a. s. muniz
		</h1>
		<hr class="my-2 w-full md:w-1/4 h-px opacity-50"/>
		
		<div
			class="flex flex-col font-sans tracking-widest"
			style:opacity={titlesOpacity.current}
			style:transform={`translateX(${titlesX.current}vw)`}
		>
			{#each TITLES as title}
				<p>{title}</p>
			{/each}
		</div>
	</div>

	<div class="h-full w-full flex flex-col items-start">
		<h2
			class="text-2xl font-oswald font-thin uppercase tracking-widest"
			style:opacity={aboutTitleOpacity.current}
		>
			{$t("home.about_me_title")}
		</h2>
		<hr class="my-2 w-full md:w-1/4 h-px opacity-50"/>
		<div class="w-full md:w-2/5 font-sans flex flex-col gap-4" style:opacity={aboutDescriptionOpacity.current}>
			{#each ABOUT_ME_PARAGRAPHS as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>

</section>
