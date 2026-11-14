export interface SkillGroup {
  title: string;
  skills: string[];
}

const skillGroups = [
    {
      title: "skills.categories.languages",
      skills: ["Javascript", "Typescript", "Go", "Python", "C", "C#", "C++"]
    },
    {
      title: "skills.categories.frontend",
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
      title: "skills.categories.backend",
      skills: ["Node.js", "Django", "Flask", "REST APIs", "BFF Architecture", "GraphQL"]
    },
    {
      title: "skills.categories.testing",
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
      title: "skills.categories.data",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Key indexing"]
    },
    {
      title: "skills.categories.cloud",
      skills: ["Docker", "AWS (EC2, S3, RDS, Lambda)", "Kubernetes", "CI/CD", "Pipelines"]
    },
    {
      title: "skills.categories.tools",
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
      title: "skills.categories.ai",
      skills: ["RAG", "Codex", "Claude Code", "LLMs", "AI Agents", "MCP", "Embeddings", "Vector Databases", "Prompt Engineering"]
    },
    {
      title: "skills.categories.microcontrollers",
      skills: ["PIC", "Tiva C Series", "Raspberry Pi", "Arduino"]
    },
    {
      title: "skills.categories.concepts",
      skills: ["SOLID", "Unit Testing", "Refactoring", "Microservices", "Micro Frontend", "BFF"]
    }
  ];

export const softwareSkills: SkillGroup[] = skillGroups
  .filter(group => group.title !== 'skills.categories.microcontrollers')
  .map(group => group.title === 'skills.categories.languages'
    ? { ...group, skills: group.skills.filter(skill => !['C', 'C++'].includes(skill)) }
    : group);

export const automationSkills: SkillGroup[] = [
  { title: 'skills.categories.languages', skills: ['C', 'C++', 'Python'] },
  ...skillGroups.filter(group => group.title === 'skills.categories.microcontrollers')
];
