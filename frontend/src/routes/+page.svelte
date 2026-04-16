<script lang="ts">
	import { t } from '$lib/i18n/translations';

	$: TITLES = [$t("home.titles_1"), $t("home.titles_2"), $t("home.titles_3")];
</script>

<section class="h-full w-full px-8 md:px-16 flex flex-col items-start justify-start">

	<div class="my-4 flex flex-col items-start">
		<h1
			class="mb-2 font-serif text-4xl font-thin glitch"
		>
			gabriel r. a. s. muniz
		</h1>
		
		<div class="flex flex-col">
			{#each TITLES as title}
				<p class="opacity-50 transition-all duration-500 hover:opacity-100">{title}</p>
			{/each}
		</div>
	</div>

	<div class="flex flex-col items-end h-full w-full">
		<h2 class="text-2xl font-serif">{$t("home.about_me_title")}</h2>
		<hr class="my-2 w-full md:w-1/4 h-px"/>
		<p class="w-full md:w-2/5 text-right">{$t("home.about_me_description")}</p>
	</div>

</section>

<style>
@keyframes glitch {
  50% {
	transform: skew(0deg)
  }
  90% {
    transform: skew(180deg);
  }
}

.glitch {
  animation: glitch 5000ms var(--ease-elastic-in-1, ease-in-out) infinite;
}
</style>