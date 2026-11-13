<script lang="ts">
 import type { Snippet } from 'svelte';
 import { t } from '$lib/i18n/translations';
 let { open = false, handleClose, children } = $props<{ open?: boolean; handleClose?: () => void; children?: Snippet }>();
 let dialog: HTMLDialogElement;
 $effect(() => {
  if (open && !dialog.open) dialog.showModal();
  else if (!open && dialog.open) dialog.close();
 });
 $effect(() => {
  if (!open) return;
  const previous = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  return () => { document.body.style.overflow = previous; };
 });
</script>

<dialog bind:this={dialog} aria-label={$t('a11y.main_navigation')} onclose={handleClose} class="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-canvas p-0 text-content backdrop:bg-canvas/80">
 <button type="button" onclick={handleClose} aria-label={$t('a11y.close_drawer')} class="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full font-inter text-xl hover:bg-elevated focus-visible:outline-2 focus-visible:outline-accent">×</button>
 {@render children?.()}
</dialog>
