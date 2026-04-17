<script lang="ts">
	import { t } from '$lib/i18n/translations';

	$: TITLES = [$t("home.titles_1"), $t("home.titles_2"), $t("home.titles_3")];
</script>

<section class="h-full w-full px-2 md:px-12 flex flex-col items-start justify-start">

	<div class="my-4 w-full flex flex-col items-start">
		<h1
			class="text-8xl md:text-4xl opacity-50 uppercase font-thin tracking-widest font-oswald"
		>
			gabriel r. a. s. muniz
		</h1>
		<hr class="my-2 w-full md:w-1/4 h-px opacity-50"/>
		
		<div class="flex flex-col font-sans tracking-widest">
			{#each TITLES as title}
				<p>{title}</p>
			{/each}
		</div>
	</div>

	<div class="h-full w-full flex flex-col items-start">
		<h2 class="text-2xl opacity-50 font-oswald font-thin uppercase tracking-widest">{$t("home.about_me_title")}</h2>
		<hr class="my-2 w-full md:w-1/4 h-px opacity-50"/>
		<p class="w-full md:w-2/5 font-sans">{$t("home.about_me_description")}</p>
	</div>

</section>

