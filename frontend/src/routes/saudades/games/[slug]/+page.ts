import { error } from '@sveltejs/kit';
import getGame from '$lib/games/get-game';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const slug = params.slug;
    if (!slug) {
        throw error(404, {
            message: 'Jogo não encontrado'
        });
    }

    const game = getGame(slug);

    if (!game) {
        throw error(404, {
            message: 'Jogo não encontrado'
        });
    }

    return {
        game
    };
};
