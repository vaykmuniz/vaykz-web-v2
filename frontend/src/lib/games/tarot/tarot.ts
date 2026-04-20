import type { Game } from '../game.type'
import thumbnail from './tarot.png'

const tarot: Game = {
    slug: 'tarot',
    src: '/tarot/web.html',
    class: 'h-[600px] w-[1100px] border-none',
    thumbnail,
    labels: ['Soon'],
    title: 'Tarot'
}

export default tarot