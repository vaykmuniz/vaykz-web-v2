<script lang="ts">
	import { EXPERIENCES } from './experience.const';
</script>

<section class="flex w-full flex-col gap-3 p-5">
	<h3 class="font-serif text-2xl">Software Development</h3>
	<p class="italic">Experience developing web applications and software solutions.</p>
	{#each EXPERIENCES as experience}
		<div class="flex w-full flex-col text-start ml-5">
			<div class="flex flex-col py-2">
				<h4 class="text-xl">
					{experience.position} at
					{experience.company}
				</h4>
				<p class="text-xs uppercase italic">{experience.period}</p>
			</div>
			<!--<p class="px-2">{experience.description}</p>-->
		</div>
	{/each}
</section>
