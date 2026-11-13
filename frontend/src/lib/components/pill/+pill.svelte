<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type PillProps = HTMLAttributes<HTMLElement> 

	let { children, ...props }: PillProps = $props();
</script>

<span
    class="inline-flex w-fit rounded-full border border-accent/50 bg-elevated/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-content"
    {...props}
>
	{@render children?.()}
</span>