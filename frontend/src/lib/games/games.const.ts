import despertar from "./despertar/despertar"
import type { Game } from "./game.type"
import neoDespertar from "./neo-despertar/neo-despertar"
import tarot from "./tarot/tarot"

export const games: Game[] = [tarot, despertar, neoDespertar]
