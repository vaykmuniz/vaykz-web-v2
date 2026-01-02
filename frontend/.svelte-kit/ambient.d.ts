
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const __MISE_ORIG_PATH: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const __MISE_SESSION: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const LESS: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const ZSH: string;
	export const MISE_ORIGINAL_CWD: string;
	export const npm_package_engines_node: string;
	export const __MISE_DIFF: string;
	export const MISE_PROJECT_ROOT: string;
	export const PAGER: string;
	export const P9K_TTY: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const WSL_DISTRO_NAME: string;
	export const NVM_DIR: string;
	export const ZPFX: string;
	export const WAYLAND_DISPLAY: string;
	export const LOGNAME: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const NAME: string;
	export const _: string;
	export const WSL_INTEROP: string;
	export const _P9K_SSH_TTY: string;
	export const MISE_SHELL: string;
	export const PULSE_SERVER: string;
	export const npm_config_registry: string;
	export const MISE_TASK_FILE: string;
	export const TERM: string;
	export const MISE_TASK_NAME: string;
	export const ZSH_CACHE_DIR: string;
	export const PMSPEC: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SHELL: string;
	export const NODE_PATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const npm_config_verify_deps_before_run: string;
	export const MISE_CONFIG_ROOT: string;
	export const npm_config_node_version: string;
	export const MISE_TASK_DIR: string;
	export const P9K_SSH: string;
	export const __MISE_ZSH_PRECMD_RUN: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const _P9K_TTY: string;
	export const NVM_CD_FLAGS: string;
	export const MISE_TASK_TIMINGS: string;
	export const npm_config__jsr_registry: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const PNPM_HOME: string;
	export const HOSTTYPE: string;
	export const WSLENV: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		__MISE_ORIG_PATH: string;
		USER: string;
		npm_config_user_agent: string;
		__MISE_SESSION: string;
		npm_node_execpath: string;
		SHLVL: string;
		LESS: string;
		HOME: string;
		OLDPWD: string;
		NVM_BIN: string;
		npm_package_json: string;
		LSCOLORS: string;
		NVM_INC: string;
		ZSH: string;
		MISE_ORIGINAL_CWD: string;
		npm_package_engines_node: string;
		__MISE_DIFF: string;
		MISE_PROJECT_ROOT: string;
		PAGER: string;
		P9K_TTY: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		WSL_DISTRO_NAME: string;
		NVM_DIR: string;
		ZPFX: string;
		WAYLAND_DISPLAY: string;
		LOGNAME: string;
		pnpm_config_verify_deps_before_run: string;
		NAME: string;
		_: string;
		WSL_INTEROP: string;
		_P9K_SSH_TTY: string;
		MISE_SHELL: string;
		PULSE_SERVER: string;
		npm_config_registry: string;
		MISE_TASK_FILE: string;
		TERM: string;
		MISE_TASK_NAME: string;
		ZSH_CACHE_DIR: string;
		PMSPEC: string;
		npm_config_node_gyp: string;
		PATH: string;
		npm_package_name: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		LANG: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SHELL: string;
		NODE_PATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		npm_config_verify_deps_before_run: string;
		MISE_CONFIG_ROOT: string;
		npm_config_node_version: string;
		MISE_TASK_DIR: string;
		P9K_SSH: string;
		__MISE_ZSH_PRECMD_RUN: string;
		PWD: string;
		npm_execpath: string;
		_P9K_TTY: string;
		NVM_CD_FLAGS: string;
		MISE_TASK_TIMINGS: string;
		npm_config__jsr_registry: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		WSL2_GUI_APPS_ENABLED: string;
		PNPM_HOME: string;
		HOSTTYPE: string;
		WSLENV: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
