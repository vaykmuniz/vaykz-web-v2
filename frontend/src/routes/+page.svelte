<script lang="ts">
	import Presentation from "$lib/components/sections/presentation/+presentation.svelte";
	import Navbar from '$lib/components/navbar/+navbar.svelte';

</script>

<div class="flex flex-col h-full w-full items-center justify-start bg-linear-to-b/oklch from-slate-600 from-10% via-slate-600 via-80% to-indigo-200 to-150%">
	<Navbar />
	<Presentation />
</div>
