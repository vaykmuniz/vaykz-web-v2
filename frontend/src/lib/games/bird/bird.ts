import type { Game } from '../game.type'
import thumbnail from '$lib/assets/favicon.png'

const bird: Game = {
    slug: 'bird',
    src: '/bird/bird.html',
    class: "w-dvw h-full border-none",
    orientation: 'landscape',
    thumbnail,
    labels: ['Soon'],
    title: 'Bird',
    content: `
None
`
}

export default bird
