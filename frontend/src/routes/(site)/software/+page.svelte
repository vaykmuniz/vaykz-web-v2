<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { EXPERIENCES } from "./experience.const";
</script>

<div class="flex flex-col items-start justify-center gap-8 py-4">
  <section class="w-full flex flex-col justify-start items-start gap-2">
    <h3 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">
      {$t("work.software.title")}
    </h3>
    <hr class="w-full md:w-1/4 h-px opacity-50" />
    <p class="font-sans">{$t("work.software.description")}</p>

    {#each EXPERIENCES as experience}
      <div class="flex w-full flex-col text-start border-l px-5 mb-4">
        <div class="flex flex-col py-2">
          <h4 class="text-xl uppercase font-thin tracking-widest font-oswald">
            {$t("work.experience.position_company", {
              position: $t(experience.positionKey),
              company: experience.company
            })}
          </h4>
          <p class="opacity-50 font-sans">{$t(experience.periodKey)}</p>
        </div>
        <ul class="font-sans text-sm list-disc pl-5">
          {#each experience.descriptionKeys as descriptionKey}
            <li>{$t(descriptionKey)}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>
</div>
