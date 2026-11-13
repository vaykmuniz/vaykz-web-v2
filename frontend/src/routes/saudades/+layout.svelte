<script lang="ts">
	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-start bg-canvas font-oswald">
	<div class="saudades-page w-full flex-1 text-accent">
		{@render children?.()}
	</div>
</div>

<style>
	.saudades-page {
		background-color: var(--color-surface);
		background-image:
			linear-gradient(
				45deg,
				color-mix(in srgb, var(--color-accent) 3%, transparent) 25%,
				transparent 25%,
				transparent 75%,
				color-mix(in srgb, var(--color-accent) 3%, transparent) 75%
			),
			linear-gradient(
				-45deg,
				color-mix(in srgb, var(--color-accent) 3%, transparent) 25%,
				transparent 25%,
				transparent 75%,
				color-mix(in srgb, var(--color-accent) 3%, transparent) 75%
			);
		background-size: 60px 60px;
	}
</style>