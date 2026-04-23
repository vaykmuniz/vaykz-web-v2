<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type PillProps = HTMLAttributes<HTMLElement> 

	let { children, ...props }: PillProps = $props();
</script>

<span
    class="inline-flex w-fit rounded-full border border-sky-200/50 bg-sky-900/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-100"
    {...props}
>
	{@render children?.()}
</span>