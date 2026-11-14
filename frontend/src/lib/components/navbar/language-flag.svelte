<script lang="ts">
 let { language } = $props<{ language: string }>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="24" height="16" aria-hidden="true" class="shrink-0 overflow-hidden rounded-sm">
 {#if language === 'en'}
  <path fill="#fff" d="M0 0h30v20H0z" />
  <path stroke="#b22234" stroke-width="1.54" d="M0 .77h30M0 3.85h30M0 6.92h30M0 10h30M0 13.08h30M0 16.15h30M0 19.23h30" />
  <path fill="#3c3b6e" d="M0 0h12v10.77H0z" />
  {#each [0, 1, 2, 3, 4] as row}
   {#each [0, 1, 2, 3, 4] as column}
    <circle cx={1.2 + column * 2.4} cy={1.1 + row * 2.1} r=".45" fill="#fff" />
   {/each}
  {/each}
 {:else if language === 'es'}
  <path fill="#aa151b" d="M0 0h30v20H0z" />
  <path fill="#f1bf00" d="M0 5h30v10H0z" />
  <path fill="#aa151b" d="M8 8h4v4a2 2 0 0 1-4 0z" />
 {:else}
  <path fill="#009739" d="M0 0h30v20H0z" />
  <path fill="#ffdf00" d="m15 2 12 8-12 8L3 10z" />
  <circle cx="15" cy="10" r="5" fill="#002776" />
  <path d="M10.2 8.6q5-.9 9.5 3" fill="none" stroke="#fff" stroke-width="1" />
  <circle cx="14" cy="12" r=".35" fill="#fff" />
  <circle cx="17" cy="13" r=".3" fill="#fff" />
 {/if}
</svg>
