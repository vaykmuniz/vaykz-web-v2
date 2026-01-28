<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navbar/+navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col h-full w-full items-center justify-start bg-linear-to-b/oklch from-slate-600 from-10% via-slate-600 via-80% to-indigo-200 to-150% font-serif">
	<Navbar />
	<div class="overflow-y-auto w-full h-full text-sky-200">
		{@render children?.()}
	</div>
</div>
