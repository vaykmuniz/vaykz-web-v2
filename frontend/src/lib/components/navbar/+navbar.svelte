<script>
  import { locale, locales } from "$lib/i18n/translations";
	import Github from '$lib/assets/github.svelte'
	import Linkedin from '$lib/assets/linkedin.svelte'

  const underline = "relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full pb-1";
</script>

<nav class="flex w-full px-10 py-2 items-center justify-between sticky top-0 z-10 text-sky-200 text-lg">
  <select bind:value={$locale} class="border-sky-200 font-serif">
    {#each locales as l}
      <option  class="bg-slate-800" value={l}>{l}</option>
    {/each}
  </select>

  <div class="flex gap-8">
    <a href="/" class={underline}> .home </a>
    <a href="/about" class={underline}> /about </a>
    <a href="/saudades" class={underline}> /saudades games </a>
  </div>

  <div class="flex gap-2">
		<a
			aria-label="github"
			href="https://github.com/vaykmuniz"
			target="_blank"
			class="opacity-50 transition-all duration-500 hover:opacity-100"
		>
			<Github/>
		</a>

		<a
			aria-label="linkedin"
			href="https://www.linkedin.com/in/gabrielmuniz-vayk/"
			target="_blank"
			class="opacity-50 transition-all duration-500 hover:opacity-100"
		>
			<Linkedin />
		</a>
	</div>
</nav>
