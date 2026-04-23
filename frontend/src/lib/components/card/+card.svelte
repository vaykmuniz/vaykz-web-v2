<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type CardProps = HTMLAttributes<HTMLElement>

	let { class: className, children, ...props }: CardProps = $props();
</script>

<article
	{...props}
	class={`flex h-full w-full flex-col overflow-hidden rounded-2xl border border-sky-200/40 bg-slate-900/70 text-sky-100 shadow-lg ${className ?? ''}`}
>
	{@render children?.()}
</article>
