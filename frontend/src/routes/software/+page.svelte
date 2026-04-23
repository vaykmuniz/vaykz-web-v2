<script lang="ts">
  import { onMount } from "svelte";
  import { t } from "$lib/i18n/translations";
  import Card from '$lib/components/card/+card.svelte'
  import Carousel from "$lib/components/carousel/+carousel.svelte";
	import Pill from "$lib/components/pill/+pill.svelte";
  import { EXPERIENCES } from "./experience.const";

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
    <hr class="w-full md:w-1/4 h-px opacity-50 mb-4" />
    {#if repos.length}
      <Carousel perPage={1}>
        {#each repos as repo}
          <Card class="w-4/6 md:w-max py-2 flex flex-col gap-2">
            <a href={repo.html_url} target="_blank" class="font-oswarld uppercase px-5">
                {repo.name.replaceAll("-", " ")} 
            </a>
            <hr class="w-full h-px opacity-50" />
            <div class="px-5">
              <Pill>{repo.language}</Pill> 
              <p class="font-sans mt-2">{repo.description}</p>
            </div>
          </Card>
        {/each}
      </Carousel>
    {/if}
  </section>
</div>
