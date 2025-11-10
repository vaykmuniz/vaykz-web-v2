<script type="ts">
	import { EXPERIENCES } from './experience.const';
</script>

<section class="flex h-max w-full flex-col items-center justify-center gap-2">
	<h3 class="text-3xl mt-8 mb-4">Experience</h3>
	{#each EXPERIENCES as experience}
		<details
			class="flex w-full cursor-pointer flex-col items-center justify-center px-5 text-start transition-all duration-300"
		>
			<summary class="flex flex-col py-2 text-xl transition-all duration-800">
				<p>{experience.position} at <span class="font-bold">{experience.company}</span></p>
				<p class="text-sm uppercase">{experience.period}</p>
			</summary>
			<p class="p-2">{experience.description}</p>
		</details>
	{/each}
</section>
