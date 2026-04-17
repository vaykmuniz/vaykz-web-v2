<script>
  import { locale, locales } from "$lib/i18n/translations";
  import koji from '$lib/assets/favicon.png'

  const underline = "opacity-50 hover:opacity-100 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full pb-1";
</script>

<nav class="flex w-full px-4 md:px-10 py-2 items-center gap-2 justify-between sticky top-0 z-10 text-sky-200 text-lg">
	<div class="flex items-baseline gap-8 text-sm md:text-lg">
		<img alt="my-cat-koji-icon" src={koji}  class="h-14"/>
		<a href="/" class={underline}> .home </a>
		<a href="/work" class={underline}> /work </a>
		<a href="/saudades" class={underline}> /saudades </a>
	</div>

  <div class="flex gap-2">
		<select bind:value={$locale} class="border-sky-200 font-sans">
			{#each locales as l}
			<option  class="bg-slate-800" value={l}>{l}</option>
			{/each}
		</select>
	</div>
</nav>

