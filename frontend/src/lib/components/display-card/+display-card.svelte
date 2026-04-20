<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface DisplayCardProps extends HTMLAttributes<HTMLElement> {
		img: string
		title: string
		label: string
	}

	let { img, title, label, class: className, ...props }: DisplayCardProps = $props();
</script>

<article
	{...props}
	class={`flex h-full w-full flex-col overflow-hidden rounded-2xl border border-sky-200/40 bg-slate-900/70 text-sky-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/70 ${className ?? ''}`}
>
	<img src={img} alt={title} class="h-52 w-full object-cover" loading="lazy" />

	<div class="flex flex-1 flex-col gap-3 p-4">
		<h3 class="text-lg font-semibold leading-tight">{title}</h3>
		<div class="mt-auto">
			<span
				class="inline-flex w-fit rounded-full border border-sky-200/50 bg-sky-900/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-100"
			>
				{label}
			</span>
		</div>
	</div>
</article>
