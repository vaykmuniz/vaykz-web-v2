<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import Navbar from '$lib/components/navbar/+navbar.svelte';
	import Footer from '$lib/components/footer/+footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen w-full overflow-hidden flex flex-col items-center justify-start bg-black font-oswald">
	<Navbar />
	<div class="overflow-y-auto w-full h-full text-sky-200">
		{@render children?.()}
	</div>
	<Footer />
</div>
