<script lang="ts">
  import { onMount } from "svelte";
  import { t } from "$lib/i18n/translations";
  import Card from "$lib/components/card/+card.svelte";
  import Carousel from "$lib/components/carousel/+carousel.svelte";
  import Pill from "$lib/components/pill/+pill.svelte";

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
    <h2 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">
      {$t("work.software.projects_title")}
    </h2>
    <hr class="w-full md:w-1/4 h-px opacity-50 mb-4" />
    {#if repos.length}
      <Carousel>
        {#each repos as repo}
          <div class="block px-2">
            <Card>
              <div class="flex flex-col gap-2 py-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-oswarld uppercase px-5"
                >
                  {repo.name.replaceAll("-", " ")}
                </a>
                <hr class="w-full h-px opacity-50" />
                <div class="px-5">
                  <Pill>{repo.language}</Pill>
                  <p class="font-sans mt-2">{repo.description}</p>
                </div>
              </div>
            </Card>
          </div>
        {/each}
      </Carousel>
    {/if}
  </section>
</div>
