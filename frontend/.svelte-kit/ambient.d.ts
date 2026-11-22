
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
	export const LESSOPEN: string;
	export const SNAP_INSTANCE_KEY: string;
	export const USER: string;
	export const SNAP_COMMON: string;
	export const npm_config_user_agent: string;
	export const npm_node_execpath: string;
	export const SNAP_UID: string;
	export const SHLVL: string;
	export const WT_PROFILE_ID: string;
	export const HOME: string;
	export const SNAP_LIBRARY_PATH: string;
	export const OLDPWD: string;
	export const SNAP_USER_DATA: string;
	export const npm_package_json: string;
	export const MISE_ORIGINAL_CWD: string;
	export const npm_package_engines_node: string;
	export const __MISE_DIFF: string;
	export const MISE_PROJECT_ROOT: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const SNAP_REVISION: string;
	export const WSL_DISTRO_NAME: string;
	export const WAYLAND_DISPLAY: string;
	export const LOGNAME: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const NAME: string;
	export const _: string;
	export const SNAP_CONTEXT: string;
	export const WSL_INTEROP: string;
	export const PULSE_SERVER: string;
	export const SNAP_VERSION: string;
	export const npm_config_registry: string;
	export const MISE_TASK_FILE: string;
	export const TERM: string;
	export const SNAP_INSTANCE_NAME: string;
	export const MISE_TASK_NAME: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const WT_SESSION: string;
	export const SNAP_DATA: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const MISE_TASK_PGID_MANAGED: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SNAP_USER_COMMON: string;
	export const SNAP_ARCH: string;
	export const SNAP_COOKIE: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const npm_config_verify_deps_before_run: string;
	export const NODE_PATH: string;
	export const SNAP_REEXEC: string;
	export const MISE_CONFIG_ROOT: string;
	export const LESSCLOSE: string;
	export const SNAP_NAME: string;
	export const npm_config_node_version: string;
	export const npm_config_npm_globalconfig: string;
	export const MISE_TASK_DIR: string;
	export const npm_config_globalconfig: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const SNAP_REAL_HOME: string;
	export const XDG_DATA_DIRS: string;
	export const SNAP_EUID: string;
	export const SNAP: string;
	export const MISE_TASK_TIMINGS: string;
	export const MISE_TASK_COLOR: string;
	export const npm_config__jsr_registry: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const SNAP_APP_NAME: string;
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
		LESSOPEN: string;
		SNAP_INSTANCE_KEY: string;
		USER: string;
		SNAP_COMMON: string;
		npm_config_user_agent: string;
		npm_node_execpath: string;
		SNAP_UID: string;
		SHLVL: string;
		WT_PROFILE_ID: string;
		HOME: string;
		SNAP_LIBRARY_PATH: string;
		OLDPWD: string;
		SNAP_USER_DATA: string;
		npm_package_json: string;
		MISE_ORIGINAL_CWD: string;
		npm_package_engines_node: string;
		__MISE_DIFF: string;
		MISE_PROJECT_ROOT: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		SNAP_REVISION: string;
		WSL_DISTRO_NAME: string;
		WAYLAND_DISPLAY: string;
		LOGNAME: string;
		pnpm_config_verify_deps_before_run: string;
		NAME: string;
		_: string;
		SNAP_CONTEXT: string;
		WSL_INTEROP: string;
		PULSE_SERVER: string;
		SNAP_VERSION: string;
		npm_config_registry: string;
		MISE_TASK_FILE: string;
		TERM: string;
		SNAP_INSTANCE_NAME: string;
		MISE_TASK_NAME: string;
		PATH: string;
		npm_package_name: string;
		NODE: string;
		WT_SESSION: string;
		SNAP_DATA: string;
		XDG_RUNTIME_DIR: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		LANG: string;
		MISE_TASK_PGID_MANAGED: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SNAP_USER_COMMON: string;
		SNAP_ARCH: string;
		SNAP_COOKIE: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		npm_config_verify_deps_before_run: string;
		NODE_PATH: string;
		SNAP_REEXEC: string;
		MISE_CONFIG_ROOT: string;
		LESSCLOSE: string;
		SNAP_NAME: string;
		npm_config_node_version: string;
		npm_config_npm_globalconfig: string;
		MISE_TASK_DIR: string;
		npm_config_globalconfig: string;
		PWD: string;
		npm_execpath: string;
		SNAP_REAL_HOME: string;
		XDG_DATA_DIRS: string;
		SNAP_EUID: string;
		SNAP: string;
		MISE_TASK_TIMINGS: string;
		MISE_TASK_COLOR: string;
		npm_config__jsr_registry: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		WSL2_GUI_APPS_ENABLED: string;
		SNAP_APP_NAME: string;
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
