export interface Game {
    slug: string
    src: string
    class: string
}

export const games: Game[] = [
    {
        slug: 'tarot',
        src: '/tarot/web.html',
        class: 'h-[600px] w-[1100px] border-none'
    },
    {
        slug: 'autobattler',
        src: '/autobattler/autobattler.html',
        class: "w-dvw h-full border-none"
    }
]