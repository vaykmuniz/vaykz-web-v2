<script lang="ts">
    let { data } = $props();
    
    const game = data.game;
</script>

<div class="h-full w-full text-sky-200 flex flex-col items-center">
    <h1 class="text-2xl my-4">{game.slug}</h1>
    
    <iframe 
        src={game.src} 
        title={game.slug} 
        class={game.class}
    ></iframe>
</div>