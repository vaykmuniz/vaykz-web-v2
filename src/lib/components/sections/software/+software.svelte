<script type="ts">
	import { EXPERIENCES } from './experience.const';
</script>

<section class="flex w-full flex-col gap-3 p-5">
	<h3 class="font-serif text-2xl">Software Development</h3>
	{#each EXPERIENCES as experience}
		<div class="flex w-full flex-col text-start">
			<div class="flex flex-col py-2">
				<h4>
					<span class="font-mono font-semibold">{experience.position}</span> at
					<span class="font-mono font-semibold">{experience.company}</span>
				</h4>
				<p class="text-sm uppercase">{experience.period}</p>
			</div>
			<!--<p class="px-2">{experience.description}</p>-->
		</div>
	{/each}
</section>
