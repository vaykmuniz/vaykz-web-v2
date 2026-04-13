<script lang="ts">
	import { t } from '$lib/i18n/translations';

	$: TITLES = [$t("home.titles_1"), $t("home.titles_2"), $t("home.titles_3")];
</script>

<section class="flex h-full w-full px-16 flex-col items-start justify-start">

	<div class="my-4 flex flex-col items-start">
		<h1
			class="font-serif text-4xl font-thin glitch"
		>
			gabriel r. a. s. muniz
		</h1>
		<div class="flex flex-col">
			{#each TITLES as title}
				<p class="opacity-50 transition-all duration-500 hover:opacity-100">{title}</p>
			{/each}
		</div>
	</div>

</section>

<style>

@keyframes glitch {
  50% {
    transform: skew(180deg);
  }
}

.glitch {
  animation: glitch 2000ms var(--ease-elastic-in-1, ease-in-out) infinite;
}

</style>