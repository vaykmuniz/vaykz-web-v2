<script lang="ts">
	import mePhoto from '$lib/assets/me.png';
	import { MY_LINKS } from './my-links.const';
</script>

<div class="m-8 flex gap-3 p-8">
	<img src={mePhoto} alt="Gabriel R. A. S. Muniz" class="mx-auto mb-4 h-28 w-28 rounded-3xl" />
	<div class="flex flex-col items-start">
		<h1 class="text-4xl font-bold">Gabriel Muniz</h1>
		<p class="">Software Developer</p>
		<div class="mt-1">
			{#each MY_LINKS as link}
				<a href={link.url} target="_blank" class="mr-2 rounded-3xl border border-black px-2 py-1">
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</div>
