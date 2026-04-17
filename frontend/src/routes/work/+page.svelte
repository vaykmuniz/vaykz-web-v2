<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { EXPERIENCES } from './experience.const'
</script>

<div class="flex flex-col items-start justify-center px-4 md:px-8 gap-8 py-4">

  <section class="w-full px-5 flex flex-col justify-start items-start gap-2">
    <h3 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">Software Development</h3>
    <hr class="w-full md:w-1/4 h-px opacity-50"/>
    <p class="font-sans">Experience developing web applications and software solutions.</p>

    {#each EXPERIENCES as experience}
      <div class="flex w-full flex-col text-start border-l px-5">
        <div class="flex flex-col py-2">
          <h4 class="text-xl uppercase font-thin tracking-widest font-oswald">
            {experience.position} at
            {experience.company}
          </h4>
          <p class="opacity-50 font-sans">{experience.period}</p>
        </div>
        <p class="font-sans text-sm">{experience.description}</p>
      </div>
    {/each}

  </section>

  <section class="w-full px-5 flex flex-col gap-2">
    <h3 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">{$t("home.engineer.title")}</h3>
    <hr class="w-full md:w-1/4 h-px opacity-50"/>
    
    <p class="mt-2 font-sans">
      {$t("home.engineer.paragraph_1")} <a
        href="https://www.utfpr.edu.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t("home.engineer.paragraph_1_link")}</a
      >
    </p>

    <div class="flex w-full flex-col text-start border-l px-5">
      <h4 class="text-xl opacity-70 uppercase font-thin tracking-widest font-oswald">{$t("home.engineer.bachelors.title")}</h4>
      <p class="font-sans">
        {$t("home.engineer.paragraph_2")}
      </p>
    </div>

    <div class="flex w-full flex-col text-start border-l px-5">
      <h4 class="text-xl opacity-70 uppercase font-thin tracking-widest font-oswald">{$t("home.engineer.internship.title")}</h4>
      <p class="font-sans">
        {$t("home.engineer.internship.description")}
      </p>
    </div>

  </section>
</div>