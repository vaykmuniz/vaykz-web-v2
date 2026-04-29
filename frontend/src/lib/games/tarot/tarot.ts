import type { Game } from '../game.type'
import thumbnail from './tarot.png'

const tarot: Game = {
    slug: 'tarot',
    src: '/tarot/tarot.html',
    class: 'h-[600px] w-[1100px] border-none',
    orientation: 'landscape',
    thumbnail,
    labels: ['Soon'],
    title: 'Tarot',
    content: `
## A ritual-inspired card reading

Tarot is a small interactive experience about intuition, symbols, and chance.

- Draw cards and reveal archetypes.
- Read concise interpretations.
- Use it as a quick reflective prompt.
`
}

export default tarot
