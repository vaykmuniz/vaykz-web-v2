<script lang="ts">
	import Navbar from '$lib/components/navbar/+navbar.svelte';
</script>

<div class="h-full w-full bg-slate-600 text-sky-200">
	<Navbar />
	<section class="flex w-full flex-col gap-2 bg-slate-700 p-5">
		<h1 class="font-serif text-2xl">Saudades Gamez</h1>
		<p class="mt-2 italic">HERE IS THE GOOD PART!</p>
		<a href="/saudades/autobattler" class="font-extrabold rounded-xl px-5 py-2 hover:bg-sky-200 hover:text-slate-700 hover:opacity-30 transition-all duration-800"> .autobattler </a>
		<a href="/saudades/tarot" class="font-extrabold rounded-xl px-5 py-2 hover:bg-sky-200 hover:text-slate-700 hover:opacity-30 transition-all duration-800"> .tarot </a>
	</section>
</div>
