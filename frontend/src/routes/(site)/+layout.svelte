<script lang="ts">
	import Navbar from '$lib/components/navbar/+navbar.svelte';
	import Footer from '$lib/components/footer/+footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-start bg-canvas font-oswald">
	<Navbar />
	<main class="site-container min-w-0 flex-1 text-accent">
		{@render children?.()}
	</main>
	<Footer />
</div>
