import { games } from "./games.const"
import { type Game } from "./game.type"

export default function getGame(slug: string): Game | null {
    const game = games.find((g) => g.slug == slug)
    if (!game) {
        return null
    }
    return game
}