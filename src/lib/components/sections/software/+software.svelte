<script type="ts">
	import { EXPERIENCES } from './experience.const';
</script>

<section class="flex w-full flex-col gap-3 p-5">
	<h3 class="font-serif text-2xl">Software Development</h3>
	{#each EXPERIENCES as experience}
		<div
			class="flex w-full cursor-pointer flex-col text-start"
		>
			<div class="flex flex-col py-2">
				<h4 class="font-serif">{experience.position} at <span class="font-semibold font-mono">{experience.company}</span></h4>
				<p class="text-sm uppercase">{experience.period}</p>
			</div>
			<p class="px-2">- {experience.description}</p>
		</div>
	{/each}
</section>
