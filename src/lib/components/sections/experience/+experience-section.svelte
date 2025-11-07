<script type="ts">
	import { EXPERIENCES } from './experience.const';
</script>

<section class="h-max w-full flex flex-col items-center justify-center gap-4 px-8">
	<h3 class="text-2xl my-8 text-start w-full">Experience</h3>
	{#each EXPERIENCES as experience}
		<details
			class="w-fit rounded-lg border-2 bg-sky-200 text-slate-600 px-5 text-start transition-all duration-300 cursor-pointer"
		>
			<summary
				class="flex flex-col py-2 text-xl transition-all duration-800"
			>
				<span class="font-semibold">{experience.position} at {experience.company}</span>
				<p class="text-sm uppercase">{experience.period}</p>
			</summary>

			<p class="p-2">{experience.description}</p>
		</details>
	{/each}
</section>
