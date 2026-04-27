import type { Game } from '../game.type'
import thumbnail from './despertar.png'

const despertar: Game = {
    slug: 'despertar',
    src: '/autobattler/autobattler.html',
    class: "w-dvw h-full border-none",
    orientation: 'portrait',
    thumbnail,
    labels: ['Soon'],
    title: 'Despertar',
    content: `
## Auto-battler prototype

Despertar is a strategy prototype focused on positioning, team choices, and progression.

- Build a squad from available units.
- Adapt your setup between rounds.
- Watch combat resolve and iterate your strategy.
`
}

export default despertar
