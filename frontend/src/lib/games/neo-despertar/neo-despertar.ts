import type { Game } from '../game.type'
import thumbnail from './neo-despertar.png'

const neoDespertar: Game = {
    slug: 'neo-despertar',
    src: '/neo-despertar/neo-despertar.html',
    class: 'h-[600px] w-[1100px] border-none',
    orientation: 'landscape',
    thumbnail,
    labels: ['Soon'],
    title: 'Despertar Grid RTS',
    content: `
## A grid-based RTS prototype

Despertar Grid RTS is a tactical real-time strategy experiment focused on positioning and timing.

- Command units on a battle grid.
- Expand your control while managing pressure.
- Adapt quickly as the frontline shifts.
`
}

export default neoDespertar
