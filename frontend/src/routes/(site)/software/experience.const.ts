export interface Experience {
  slug: string;
  company: string;
  positionKey: string;
  periodKey: string;
  descriptionKeys: string[];
  stacks: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    slug: "ebanx-freelance",
    company: "Ebanx (freelance)",
    stacks: ["Next.js", "Vercel", "Storyblok"],
    positionKey: "work.experience.ebanx-freelance.position",
    periodKey: "work.experience.ebanx-freelance.period",
    descriptionKeys: [
      "work.experience.ebanx-freelance.description_1",
      "work.experience.ebanx-freelance.description_2",
      "work.experience.ebanx-freelance.description_3"
    ]
  },
  {
    slug: "medprev-online",
    stacks: ["GraphQL", "Playwright", "Go", "Python", "AWS"],
    company: "Medprev Online",
    positionKey: "work.experience.medprev-online.position",
    periodKey: "work.experience.medprev-online.period",
    descriptionKeys: [
      "work.experience.medprev-online.description_1",
      "work.experience.medprev-online.description_2",
      "work.experience.medprev-online.description_3"
    ]
  },
  {
    slug: "bornlogic",
    stacks: ["React", "Single SPA", "Storybook"],
    company: "Bornlogic",
    positionKey: "work.experience.bornlogic.position",
    periodKey: "work.experience.bornlogic.period",
    descriptionKeys: [
      "work.experience.bornlogic.description_1",
      "work.experience.bornlogic.description_2",
      "work.experience.bornlogic.description_3",
      "work.experience.bornlogic.description_4",
      "work.experience.bornlogic.description_5"
    ]
  },
  {
    slug: "cargon",
    stacks: ["MySQL", "Prisma", "Azure"],
    company: "CargOn",
    positionKey: "work.experience.cargon.position",
    periodKey: "work.experience.cargon.period",
    descriptionKeys: [
      "work.experience.cargon.description_1",
      "work.experience.cargon.description_2",
      "work.experience.cargon.description_3",
      "work.experience.cargon.description_4",
      "work.experience.cargon.description_5"
    ]
  },
  {
    slug: "icolabora",
    stacks: ["Node.js", "REST APIs"],
    company: "iColabora",
    positionKey: "work.experience.icolabora.position",
    periodKey: "work.experience.icolabora.period",
    descriptionKeys: [
      "work.experience.icolabora.description_1",
      "work.experience.icolabora.description_2"
    ]
  }
];
