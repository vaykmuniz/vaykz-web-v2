import type { Game } from '../game.type'
import thumbnail from '$lib/assets/favicon.png'

const readme: Game = {
    slug: 'readme',
    src: '/readme/read.me.html',
    class: "w-[640px] h-[360px] border-none",
    orientation: 'portrait',
    thumbnail,
    labels: ['Start here'],
    title: 'ReadMe',
    content: `Start here, a simple game where you can help me to make points by killing bugs with koji, my cat.`
}

export default readme
