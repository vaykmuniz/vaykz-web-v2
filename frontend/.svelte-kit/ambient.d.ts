
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
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_TYPE: string;
	export const PTYXIS_VERSION: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const LESS: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const ZSH: string;
	export const MISE_ORIGINAL_CWD: string;
	export const npm_package_engines_node: string;
	export const GTK_MODULES: string;
	export const __MISE_DIFF: string;
	export const MISE_PROJECT_ROOT: string;
	export const PAGER: string;
	export const MANAGERPID: string;
	export const P9K_TTY: string;
	export const DBUS_STARTER_BUS_TYPE: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const NVM_DIR: string;
	export const ZPFX: string;
	export const WAYLAND_DISPLAY: string;
	export const LOGNAME: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const _: string;
	export const _P9K_SSH_TTY: string;
	export const MANAGERPIDFDID: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const MISE_TASK_FILE: string;
	export const USERNAME: string;
	export const TERM: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const MISE_TASK_NAME: string;
	export const ZSH_CACHE_DIR: string;
	export const PMSPEC: string;
	export const FLATPAK_TTY_PROGRESS: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const INVOCATION_ID: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_MENU_PREFIX: string;
	export const PTYXIS_PROFILE: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const MISE_TASK_PGID_MANAGED: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const MISE_CONFIG_ROOT: string;
	export const GPG_AGENT_INFO: string;
	export const MISE_TASK_DIR: string;
	export const P9K_SSH: string;
	export const QT_IM_MODULE: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const _P9K_TTY: string;
	export const NVM_CD_FLAGS: string;
	export const DBUS_STARTER_ADDRESS: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_SESSION_EXTRA_DEVICE_ACCESS: string;
	export const MISE_TASK_TIMINGS: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const QT_IM_MODULES: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const VTE_VERSION: string;
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
		USER: string;
		npm_config_user_agent: string;
		XDG_SESSION_TYPE: string;
		PTYXIS_VERSION: string;
		npm_node_execpath: string;
		SHLVL: string;
		LESS: string;
		HOME: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_json: string;
		LSCOLORS: string;
		NVM_INC: string;
		ZSH: string;
		MISE_ORIGINAL_CWD: string;
		npm_package_engines_node: string;
		GTK_MODULES: string;
		__MISE_DIFF: string;
		MISE_PROJECT_ROOT: string;
		PAGER: string;
		MANAGERPID: string;
		P9K_TTY: string;
		DBUS_STARTER_BUS_TYPE: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		NVM_DIR: string;
		ZPFX: string;
		WAYLAND_DISPLAY: string;
		LOGNAME: string;
		pnpm_config_verify_deps_before_run: string;
		_: string;
		_P9K_SSH_TTY: string;
		MANAGERPIDFDID: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		MISE_TASK_FILE: string;
		USERNAME: string;
		TERM: string;
		GNOME_DESKTOP_SESSION_ID: string;
		MISE_TASK_NAME: string;
		ZSH_CACHE_DIR: string;
		PMSPEC: string;
		FLATPAK_TTY_PROGRESS: string;
		npm_config_node_gyp: string;
		PATH: string;
		INVOCATION_ID: string;
		npm_package_name: string;
		NODE: string;
		XDG_MENU_PREFIX: string;
		PTYXIS_PROFILE: string;
		GNOME_SETUP_DISPLAY: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		MISE_TASK_PGID_MANAGED: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		MISE_CONFIG_ROOT: string;
		GPG_AGENT_INFO: string;
		MISE_TASK_DIR: string;
		P9K_SSH: string;
		QT_IM_MODULE: string;
		PWD: string;
		npm_execpath: string;
		_P9K_TTY: string;
		NVM_CD_FLAGS: string;
		DBUS_STARTER_ADDRESS: string;
		XDG_DATA_DIRS: string;
		XDG_SESSION_EXTRA_DEVICE_ACCESS: string;
		MISE_TASK_TIMINGS: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		QT_IM_MODULES: string;
		MEMORY_PRESSURE_WRITE: string;
		VTE_VERSION: string;
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
