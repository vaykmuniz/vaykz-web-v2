import bird from "./bird/bird"
import coma from "./coma/coma"
import type { Game } from "./game.type"
import neoDespertar from "./neo-despertar/neo-despertar"
import tarot from "./tarot/tarot"

export const games: Game[] = [tarot, bird, coma, neoDespertar]
