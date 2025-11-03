<script lang="ts">
	import mePhoto from '$lib/assets/me.png';
	import { MY_LINKS } from './my-links.const';
</script>

<section class="flex h-full items-center justify-center text-sky-200 ">
	<div class="flex flex-col">
		<div class="flex gap-3">
			<img src={mePhoto} alt="Gabriel R. A. S. Muniz" class="mx-auto mb-4 h-28 w-28 rounded-4xl" />
			<div class="flex flex-col items-start">
				<h1 class="text-4xl font-bold">Gabriel Muniz</h1>
				<p class="">Software Developer</p>
			</div>
		</div>
		<div>
			{#each MY_LINKS as link}
				<a href={link.url} target="_blank" class="mr-2 rounded-3xl border-2 border-sky-200 px-6 py-1.5">
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</section>
