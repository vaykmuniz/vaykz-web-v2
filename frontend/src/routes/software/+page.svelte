<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { EXPERIENCES } from "./experience.const";
  import Card from '$lib/components/card/+card.svelte'
  
  import { onMount } from "svelte";

  import Carousel from "$lib/components/carousel/+carousel.svelte";
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  interface Repo {
    name: string;
    description: string;
    language: string;
    html_url: string;
    stargazers_count: number;
  }

  let repos: Repo[] = [];

  onMount(async () => {
    const res = await fetch(
      "https://api.github.com/search/repositories?q=user:vaykmuniz+topic:project"
    );

    const data = await res.json();

    if (res.ok && data?.items) {
      repos = data.items;
    }
  });

</script>

<div class="flex flex-col items-start justify-center px-4 md:px-8 gap-8 py-4">
  <section class="w-full px-5 flex flex-col justify-start items-start gap-2">
    <h3 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">
      {$t("work.software.title")}
    </h3>
    <hr class="w-full md:w-1/4 h-px opacity-50" />
    <p class="font-sans">{$t("work.software.description")}</p>

    {#each EXPERIENCES as experience}
      <div class="flex w-full flex-col text-start border-l px-5">
        <div class="flex flex-col py-2">
          <h4 class="text-xl uppercase font-thin tracking-widest font-oswald">
            {$t("work.experience.position_company", {
              position: $t(experience.positionKey),
              company: $t(experience.companyKey)
            })}
          </h4>
          <p class="opacity-50 font-sans">{$t(experience.periodKey)}</p>
        </div>
        <p class="font-sans text-sm">{$t(experience.descriptionKey)}</p>
      </div>
    {/each}
  </section>

  <section class="w-full px-5 flex flex-col justify-start items-start gap-2">
      <h2 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">
      Skills
      </h2>
      <hr class="w-full md:w-1/4 h-px opacity-50" />
  </section>

    <section class="w-full px-5 flex flex-col justify-start items-start gap-2">
      <h2 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">
      Projects
      </h2>
      <hr class="w-full md:w-1/4 h-px opacity-50" />
      <ul class="font-sans">
        {#each repos as repo}
        <Card>
          <li class="p-2">
            <a href={repo.html_url} target="_blank">
              {repo.name} ({repo.language}) ⭐ {repo.stargazers_count}
            </a>
            <p>{repo.description}</p>
          </li>
        </Card>
        {/each}
      </ul>
      <Carousel autoplay={2000}>
        {#each colors as color, index (index)}
          <div style="height: 10px; width: 10px; background-color: {color}" />
        {/each}
          {#snippet leftControl()}
            <span >Right</span>
          {/snippet}
          {#snippet rightControl()}
            <span >Left</span>
          {/snippet}
      </Carousel>
  </section>
</div>
