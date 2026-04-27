<script>
  import { locale, locales, t } from "$lib/i18n/translations";
  import Drawer from "$lib/components/drawer/+drawer.svelte";
  import koji from '$lib/assets/favicon.png'

  const underline = "opacity-50 hover:opacity-100 relative hidden md:inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full pb-1";
  const drawerLink = "text-2xl opacity-50 hover:opacity-100 transition-opacity";
  let openDrawer = false;
</script>

<nav class="flex w-full px-4 md:px-10 py-2 items-baseline gap-2 justify-between sticky top-0 z-10 text-sky-200 text-lg">
	<div class="flex items-baseline gap-8">
		<button
			type="button"
			class="md:hidden transition-all hover:rounded-full hover:bg-sky-200/20"
			aria-label={$t("a11y.open_navigation_drawer")}
			onclick={() => (openDrawer = true)}
		>
			<img alt={$t("a11y.koji_icon_alt")} src={koji} class="h-14" />
		</button>

		<img alt={$t("a11y.koji_icon_alt")} src={koji} class="h-14 hidden md:block" />

		<a href="/" class={underline}> .home </a>
		<a href="/software" class={underline}> /software </a>
		<a href="/automation" class={underline}> /automation </a>
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

<Drawer open={openDrawer} handleClose={() => (openDrawer = false)}>
	<div class="flex h-full w-full flex-col items-start justify-start gap-4 px-8 py-16 text-sky-200">
		<a href="/" class={drawerLink} onclick={() => (openDrawer = false)}> .home </a>
		<a href="/software" class={drawerLink} onclick={() => (openDrawer = false)}> /software </a>
		<a href="/automation" class={drawerLink} onclick={() => (openDrawer = false)}> /automation </a>
		<a href="/saudades" class={drawerLink} onclick={() => (openDrawer = false)}> /saudades </a>
	</div>
</Drawer>
