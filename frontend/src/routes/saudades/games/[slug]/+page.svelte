<script lang="ts">
    import GameModal from '$lib/components/game-modal/+game-modal.svelte';
    import { marked } from 'marked';
    import sanitizeHtml from 'sanitize-html';

    let { data } = $props();
    let showGameplay = $state(false);

    const game = $derived(data.game);
    const gameContent = $derived(
        sanitizeHtml(marked.parse(game.content, { async: false }) as string)
    );
</script>

<div class="flex flex-col items-start justify-center gap-8 px-4 py-4">
    <section class="flex w-full flex-col gap-2 px-5">
        <h3 class="text-2xl opacity-50 uppercase font-thin tracking-widest font-oswald">{game.title}</h3>
        <hr class="h-px w-full opacity-50 md:w-1/4" />

        <div class="prose prose-invert mt-2 max-w-none font-sans">
            {@html gameContent}
        </div>

        <button
            type="button"
            class="mt-2 w-fit border border-sky-200/50 px-4 py-2 text-sm uppercase tracking-widest transition-colors hover:bg-sky-200/10"
            onclick={() => (showGameplay = true)}
            disabled={showGameplay}
        >
            {showGameplay ? 'Playing' : 'Play game'}
        </button>
    </section>

    <GameModal
        open={showGameplay}
        src={game.src}
        title={game.title}
        orientation={game.orientation}
        onClose={() => (showGameplay = false)}
    />
</div>
