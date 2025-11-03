<script type="ts">
  import {EXPERIENCES} from './experience.const';
</script>

<section class="w-full h-full bg-blue-700 flex flex-col gap-2 justify-center items-center py-6">
    <h3 class="text-3xl font-bold mb-6 text-sky-200">Experience</h3>
      {#each EXPERIENCES as experience}
        <div class="text-white w-fit border border-white rounded-lg p-2">
          <h4 class="text-xl font-semibold ">{experience.position}</h4>
          <div class="flex gap-2">
            <p class="text-sm">{experience.company}</p>
            <p class="text-sm">{experience.period}</p>
          </div>
          <p class="mt-2">{experience.description}</p>
        </div>
      {/each}
</section>