<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type CardProps = HTMLAttributes<HTMLElement> & { variant?: 'default' | 'project' }

	let { class: className, variant = 'default', children, ...props }: CardProps = $props();
</script>

<article
	{...props}
	class={`flex h-full w-full flex-col overflow-hidden text-content ${variant === 'project' ? 'border border-line bg-canvas' : 'rounded-2xl border border-accent/40 bg-surface/70 shadow-lg'} ${className ?? ''}`}
>
	{@render children?.()}
</article>
