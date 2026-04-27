export interface Experience {
  slug: string;
  company: string;
  positionKey: string;
  periodKey: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    slug: "medprev-online",
    company: "Medprev Online",
    positionKey: "work.experience.medprev-online.position",
    periodKey: "work.experience.medprev-online.period",
    description: "oi"
  },
  {
    slug: "bornlogic",
    company: "Bornlogic",
    positionKey: "work.experience.bornlogic.position",
    periodKey: "work.experience.bornlogic.period",
    description: "oi"
  },
  {
    slug: "cargon",
    company: "CargOn",
    positionKey: "work.experience.cargon.position",
    periodKey: "work.experience.cargon.period",
    description: "oi"
  },
  {
    slug: "icolabora",
    company: "iColabora",
    positionKey: "work.experience.icolabora.position",
    periodKey: "work.experience.icolabora.period",
    description: "oi"
  }
];
