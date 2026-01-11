<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import mePhoto from '$lib/assets/me.png';
	import { MY_LINKS } from './my-links.const';

	$: TITLES = [$t("home.titles_1"), $t("home.titles_2"), $t("home.titles_3")];
</script>

<section class="flex h-full w-full flex-col items-center justify-center text-sky-200">
	<img
		src={mePhoto}
		alt="Gabriel R. A. S. Muniz"
		class="h-28 w-28 rounded-2xl border-2 border-sky-100/40 shadow-xs"
	/>

	<div class="my-4 flex flex-col items-center">
		<h1
			class="font-serif text-4xl font-bold opacity-50 transition-all duration-500 hover:opacity-100"
		>
			Gabriel Muniz
		</h1>
		<div class="flex gap-2">
			{#each TITLES as title}
				<p class="opacity-50 transition-all duration-500 hover:opacity-100">{title}</p>
			{/each}
		</div>
	</div>

	<div>
		{#each MY_LINKS as link}
			<a
				href={link.url}
				target="_blank"
				class="mr-2 rounded-4xl border-2 border-sky-200 px-6 py-1.5 font-bold opacity-50 transition-all duration-500 hover:opacity-100"
			>
				{link.label}
			</a>
		{/each}
	</div>
</section>
