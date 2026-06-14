<script lang="ts">
	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-start bg-black font-oswald">
	<div class="saudades-page w-full flex-1 text-sky-200">
		{@render children?.()}
	</div>
</div>

<style>
	.saudades-page {
		background-color: #111;
		background-image:
			linear-gradient(
				45deg,
				rgba(255, 255, 255, 0.03) 25%,
				transparent 25%,
				transparent 75%,
				rgba(255, 255, 255, 0.03) 75%
			),
			linear-gradient(
				-45deg,
				rgba(255, 255, 255, 0.03) 25%,
				transparent 25%,
				transparent 75%,
				rgba(255, 255, 255, 0.03) 75%
			);
		background-size: 60px 60px;
	}
</style>