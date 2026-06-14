<script lang="ts">
	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-start bg-black font-oswald">
	<div class="w-full flex-1 text-sky-200">
		{@render children?.()}
	</div>
</div>
