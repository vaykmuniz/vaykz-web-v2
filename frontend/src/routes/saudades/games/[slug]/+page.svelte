<script lang="ts">
    import GameModal from '$lib/components/game-modal/+game-modal.svelte';
    import { t } from '$lib/i18n/translations';



    let { data } = $props();
    let showGameplay = $state(false);

    const game = $derived(data.game);
</script>

<svelte:head><title>{game.title} — Saudades</title><meta name="description" content={$t(`saudades.${game.slug}.description`)} /></svelte:head>
<div class="flex flex-col gap-0">
<a href="/saudades" class="mx-auto w-full max-w-7xl px-4 py-6 text-muted hover:text-accent sm:px-8">← {$t('saudades.back')}</a>
<div class="saudades-diamonds bg-elevated"><img src={game.thumbnail} alt={game.title} class="mx-auto h-64 w-full max-w-7xl object-contain p-6 sm:h-96" /></div>
    <div class="saudades-divider" aria-hidden="true"></div>
    <section class="palette-dark-orange w-full bg-elevated text-content"><div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-12 sm:px-8 sm:py-16">
        <h1 class="text-4xl text-accent font-semibold">{game.title}</h1>
        <hr class="h-px w-full opacity-50 md:w-1/4" />

        <div class="mt-2 max-w-none font-sans leading-relaxed">
            <h2 class="text-xl text-content">{$t(`saudades.${game.slug}.summary`)}</h2><p class="mt-4 text-muted">{$t(`saudades.${game.slug}.description`)}</p>
        </div>

        <button
            type="button"
            class="mt-6 w-fit bg-accent px-8 py-3 font-semibold text-on-accent hover:bg-accent-hover"
            onclick={() => (showGameplay = true)}
        >
            {$t("game.play")}
        </button>
    </div></section>

    <GameModal
        open={showGameplay}
        src={game.src}
        title={game.title}
        orientation={game.orientation}
        onClose={() => (showGameplay = false)}
    />
</div>
