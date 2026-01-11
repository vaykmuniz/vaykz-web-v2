<script>
  import { locale, locales } from "$lib/i18n/translations";
</script>

<nav class="flex w-full items-center justify-center gap-2 sticky top-0 z-10 py-8 text-sky-200 text-lg bg-slate-600">
	
    <select bind:value={$locale} class="border-sky-200">
      {#each locales as l}
        <option  class="bg-slate-800" value={l}>{l}</option>
      {/each}
    </select>

	<a href="/" class="font-extrabold rounded-xl px-5 py-2 hover:bg-sky-200 hover:text-slate-700 hover:opacity-30 transition-all duration-800"> .home </a>
	<a href="/about" class="font-serif rounded-xl px-5 py-2 hover:bg-sky-200 hover:text-slate-700 hover:opacity-30 transition-all duration-800"> /about </a>
	<a href="/saudades" class="font-serif rounded-xl px-5 py-2 hover:bg-sky-200 hover:text-slate-700 hover:opacity-30 transition-all duration-800"> /saudades games </a>
</nav>
