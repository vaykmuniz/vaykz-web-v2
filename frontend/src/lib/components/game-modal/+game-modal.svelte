<script lang="ts">
    import { t } from '$lib/i18n/translations';
    import type { GameOrientation } from '$lib/games/game.type';

    type LockOrientation = Exclude<GameOrientation, 'any'>;
    type OrientationApi = ScreenOrientation & {
        lock?: (orientation: LockOrientation) => Promise<void>;
        unlock?: () => void;
    };

    let {
        open = false,
        src,
        title,
        orientation = 'any',
        onClose
    } = $props<{
        open?: boolean;
        src: string;
        title: string;
        orientation?: GameOrientation;
        onClose?: () => void;
    }>();

    let modal = $state<HTMLDivElement | null>(null);

    const frameStyle = $derived.by(() => {
        if (orientation === 'portrait') {
            return 'width: min(100dvw, calc(100dvh * 9 / 16)); height: min(100dvh, calc(100dvw * 16 / 9));';
        }

        if (orientation === 'landscape') {
            return 'width: min(100dvw, calc(100dvh * 16 / 9)); height: min(100dvh, calc(100dvw * 9 / 16));';
        }

        return 'width: 100dvw; height: 100dvh;';
    });

    function requestClose() {
        onClose?.();
    }

    async function enterFullscreenAndLock() {
        if (!modal || typeof document === 'undefined') {
            return;
        }

        if (!document.fullscreenElement && modal.requestFullscreen) {
            try {
                await modal.requestFullscreen();
            } catch (err) {
                console.error('Failed to enter fullscreen mode:', err);
            }
        }

        const orientationApi =
            typeof screen !== 'undefined' ? (screen.orientation as OrientationApi | undefined) : undefined;

        if (orientation === 'any' || !orientationApi?.lock) {
            return;
        }

        try {
            await orientationApi.lock(orientation);
        } catch (err) {
            console.error('Failed to lock orientation:', err);
        }
    }

    async function unlockAndExitFullscreen() {
        if (typeof document === 'undefined') {
            return;
        }

        const orientationApi =
            typeof screen !== 'undefined' ? (screen.orientation as OrientationApi | undefined) : undefined;

        if (orientationApi?.unlock) {
            try {
                orientationApi.unlock();
            } catch (err) {
                console.error('Failed to unlock orientation:', err);
            }
        }

        if (!document.fullscreenElement) {
            return;
        }

        try {
            await document.exitFullscreen();
        } catch (err) {
            console.error('Failed to exit fullscreen mode:', err);
        }
    }

    $effect(() => {
        if (!open || typeof document === 'undefined') {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        void enterFullscreenAndLock();

        const handleFullscreenChange = () => {
            if (open && !document.fullscreenElement) {
                requestClose();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                requestClose();
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('keydown', handleKeyDown);
            void unlockAndExitFullscreen();
        };
    });
</script>

{#if open}
    <div
        class="fixed inset-0 z-[200] flex items-center justify-center bg-black"
        role="dialog"
        aria-modal="true"
        aria-label={$t("a11y.gameplay_dialog", { title })}
        bind:this={modal}
    >
        <button
            type="button"
            class="absolute top-4 right-4 z-10 border border-sky-200/50 bg-black/70 px-3 py-2 text-xs uppercase tracking-widest text-sky-100 transition-colors hover:bg-sky-200/10"
            onclick={requestClose}
            aria-label={$t("a11y.close_game_modal")}
        >
            {$t("common.close")}
        </button>

        <div class="overflow-hidden" style={frameStyle}>
            <iframe src={src} title={title} class="h-full w-full border-none bg-black"></iframe>
        </div>
    </div>
{/if}
