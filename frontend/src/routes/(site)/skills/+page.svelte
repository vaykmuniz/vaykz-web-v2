<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import Pill from "$lib/components/pill/+pill.svelte";

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Javascript", "Typescript", "Go", "Python", "C", "C#", "C++"]
    },
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Vue.js",
        "Next.js",
        "SvelteKit",
        "TailwindCSS",
        "React Native",
        "HTML5",
        "CSS",
        "Single SPA",
        "Storybook"
      ]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Django", "Flask", "REST APIs", "BFF Architecture", "GraphQL"]
    },
    {
      title: "Testing",
      skills: [
        "Jest",
        "Playwright",
        "Unit Testing",
        "Micro Frontends",
        "Microservices",
        "Refactoring",
        "SOLID"
      ]
    },
    {
      title: "Databases/Query",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Key indexing"]
    },
    {
      title: "Cloud and DevOps",
      skills: ["Docker", "AWS (EC2, S3, RDS, Lambda)", "Kubernetes", "CI/CD", "Pipelines"]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "JIRA",
        "Notion",
        "Miro",
        "Agile",
        "Slack",
        "Workplace",
        "Microsoft Teams",
        "Datadog",
        "Sentry",
        "PostHog"
      ]
    },
    {
      title: "Microcontrollers",
      skills: ["PIC", "Tiva C Series", "Raspberry Pi", "Arduino"]
    },
    {
      title: "Concepts",
      skills: ["SOLID", "Unit Testing", "Refactoring", "Microservices", "Micro Frontend", "BFF", "AI"]
    }
  ];
</script>

<div class="flex flex-col items-start justify-center px-4 md:px-8 gap-8 py-4">
  <section class="w-full px-5 flex flex-col justify-start items-start gap-2">
    <h3 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">
      {$t("work.software.skills_title")}
    </h3>
    <hr class="w-full md:w-1/4 h-px opacity-50 mb-4" />

    <div class="flex w-full flex-col">
      {#each skillGroups as group}
        <div class="flex w-full flex-col text-start border-l px-5 mb-4">
          <div class="flex flex-col py-2">
            <h4 class="text-xl uppercase font-thin tracking-widest font-oswald">
              {group.title}
            </h4>
          </div>
          <div class="font-sans text-sm flex flex-wrap gap-2">
            {#each group.skills as skill}
              <Pill>{skill}</Pill>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
