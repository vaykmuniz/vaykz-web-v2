<script lang="ts">
	import Navbar from "$lib/components/navbar/+navbar.svelte";
	import SoftwareSection from "$lib/components/sections/software/+software.svelte";
    import EngineerSection from "$lib/components/sections/engineer/+engineer.svelte";

</script>

<section class="w-full h-full bg-slate-600 text-sky-200">
    <Navbar />
    <EngineerSection />
    <SoftwareSection />
</section>
