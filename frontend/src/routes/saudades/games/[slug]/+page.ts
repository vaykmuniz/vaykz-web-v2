import { error } from '@sveltejs/kit';
import getGame from '$lib/games/get-game';
import translations from '$lib/i18n/translations.const';
import type { PageLoad } from './$types';

const GAME_NOT_FOUND_MESSAGE = translations.en["game.not_found"];

export const load: PageLoad = ({ params }) => {
    const slug = params.slug;
    if (!slug) {
        throw error(404, {
            message: GAME_NOT_FOUND_MESSAGE
        });
    }

    const game = getGame(slug);

    if (!game) {
        throw error(404, {
            message: GAME_NOT_FOUND_MESSAGE
        });
    }

    return {
        game
    };
};
