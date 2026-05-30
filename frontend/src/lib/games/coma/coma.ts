import type { Game } from '../game.type'
import thumbnail from './despertar.png'

const coma: Game = {
    slug: 'coma',
    src: '/autobattler/autobattler.html',
    class: "w-dvw h-full border-none",
    orientation: 'landscape',
    thumbnail,
    labels: ['Soon'],
    title: 'Coma',
    content: `
## Auto-battler prototype

Coma is a strategy prototype focused on positioning, team choices, and progression.

- Build a squad from available units.
- Adapt your setup between rounds.
- Watch combat resolve and iterate your strategy.
`
}

export default coma
