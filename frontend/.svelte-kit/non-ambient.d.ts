
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
		RouteId(): "/" | "/about" | "/saudades" | "/saudades/autobattler" | "/saudades/tarot";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/saudades": Record<string, never>;
			"/saudades/autobattler": Record<string, never>;
			"/saudades/tarot": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/saudades" | "/saudades/" | "/saudades/autobattler" | "/saudades/autobattler/" | "/saudades/tarot" | "/saudades/tarot/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/autobattler/autobattler.apple-touch-icon.png" | "/autobattler/autobattler.audio.position.worklet.js" | "/autobattler/autobattler.audio.worklet.js" | "/autobattler/autobattler.html" | "/autobattler/autobattler.icon.png" | "/autobattler/autobattler.js" | "/autobattler/autobattler.pck" | "/autobattler/autobattler.png" | "/autobattler/autobattler.wasm" | "/robots.txt" | "/tarot/web.apple-touch-icon.png" | "/tarot/web.audio.position.worklet.js" | "/tarot/web.audio.worklet.js" | "/tarot/web.html" | "/tarot/web.icon.png" | "/tarot/web.js" | "/tarot/web.pck" | "/tarot/web.png" | "/tarot/web.wasm" | string & {};
	}
}