
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/automation" | "/saudades" | "/saudades/games" | "/saudades/games/[slug]" | "/software";
		RouteParams(): {
			"/saudades/games/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/automation": Record<string, never>;
			"/saudades": { slug?: string };
			"/saudades/games": { slug?: string };
			"/saudades/games/[slug]": { slug: string };
			"/software": Record<string, never>
		};
		Pathname(): "/" | "/automation" | "/automation/" | "/saudades" | "/saudades/" | "/saudades/games" | "/saudades/games/" | `/saudades/games/${string}` & {} | `/saudades/games/${string}/` & {} | "/software" | "/software/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/autobattler/autobattler.apple-touch-icon.png" | "/autobattler/autobattler.audio.position.worklet.js" | "/autobattler/autobattler.audio.worklet.js" | "/autobattler/autobattler.html" | "/autobattler/autobattler.icon.png" | "/autobattler/autobattler.js" | "/autobattler/autobattler.pck" | "/autobattler/autobattler.png" | "/autobattler/autobattler.wasm" | "/robots.txt" | "/tarot/tarot.apple-touch-icon.png" | "/tarot/tarot.audio.position.worklet.js" | "/tarot/tarot.audio.worklet.js" | "/tarot/tarot.html" | "/tarot/tarot.icon.png" | "/tarot/tarot.js" | "/tarot/tarot.pck" | "/tarot/tarot.png" | "/tarot/tarot.wasm" | string & {};
	}
}