import { type Game, games } from "./games.const"

export default function getGame(slug: string): Game | null {
    const game = games.find((g) => g.slug == slug)
    if (!game) {
        return null
    }
    return game
}