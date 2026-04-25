<script lang="ts">
	let { open = false, handleClose, children } = $props<{
		open?: boolean;
		handleClose?: () => void;
		children?: () => unknown;
	}>();
</script>

<div
	class={`fixed left-0 right-0 bottom-0 -top-4 z-99 bg-black text-white transform transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}
>
	<button
		class="absolute top-4 right-4 mt-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-transparent text-inherit transition-colors duration-200 hover:bg-gray-700"
		type="button"
		onclick={handleClose}
		aria-label="Close drawer"
	>
		X
	</button>
	{@render children?.()}
</div>
