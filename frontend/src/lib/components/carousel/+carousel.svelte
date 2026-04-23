<script lang="ts">
	import Siema from 'siema';
	import { createEventDispatcher, onMount, type Snippet } from 'svelte';

	type PerPage = number | Record<number, number>;

	type Props = {
		perPage?: PerPage;
		loop?: boolean;
		autoplay?: number;
		duration?: number;
		easing?: string;
		startIndex?: number;
		draggable?: boolean;
		multipleDrag?: boolean;
		dots?: boolean;
		controls?: boolean;
		threshold?: number;
		rtl?: boolean;
		children?: Snippet;
		leftControl?: Snippet;
		rightControl?: Snippet;
	};

	let {
		perPage = 3,
		loop = true,
		autoplay = 0,
		duration = 200,
		easing = 'ease-out',
		startIndex = 0,
		draggable = true,
		multipleDrag = true,
		dots = true,
		controls = true,
		threshold = 20,
		rtl = false,
		children,
		leftControl,
		rightControl
	}: Props = $props();

	let currentIndex = $state(0);
	let siemaNode: HTMLElement | undefined;
	let controller = $state<Siema | undefined>(undefined);
	let timer: ReturnType<typeof setInterval> | undefined;

	const dispatch = createEventDispatcher<{
		change: { currentSlide: number; slideCount: number };
	}>();

	const pips = $derived(controller?.innerElements ?? []);
	const currentPerPage = $derived(controller?.perPage ?? (typeof perPage === 'number' ? perPage : 1));
	const totalDots = $derived(currentPerPage > 0 ? Math.ceil(pips.length / currentPerPage) : 0);

	onMount(() => {
		if (!siemaNode) {
			return;
		}

		currentIndex = startIndex;
		controller = new Siema({
			selector: siemaNode,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
			duration,
			easing,
			startIndex,
			draggable,
			multipleDrag,
			threshold,
			rtl,
			onChange: handleChange
		});

		if (autoplay > 0) {
			timer = setInterval(right, autoplay);
		}

		return () => {
			if (timer) {
				clearInterval(timer);
			}
			controller?.destroy();
		};
	});

	export function isDotActive(slideIndex: number, dotIndex: number): boolean {
		const normalizedIndex = slideIndex < 0 ? pips.length + slideIndex : slideIndex;
		const start = dotIndex * currentPerPage;
		const end = start + currentPerPage;
		return normalizedIndex >= start && normalizedIndex < end;
	}

	export function left(): void {
		controller?.prev();
	}

	export function right(): void {
		controller?.next();
	}

	export function go(index: number): void {
		controller?.goTo(index);
	}

	export function pause(): void {
		if (timer) {
			clearInterval(timer);
			timer = undefined;
		}
	}

	export function resume(): void {
		if (autoplay > 0) {
			pause();
			timer = setInterval(right, autoplay);
		}
	}

	function handleChange(): void {
		if (!controller) {
			return;
		}

		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		});
	}

	function resetInterval(node: HTMLElement, condition: number) {
		const handleReset = () => {
			pause();
			resume();
		};

		if (condition > 0) {
			node.addEventListener('click', handleReset);
		}

		return {
			update(nextCondition: number) {
				if (condition <= 0 && nextCondition > 0) {
					node.addEventListener('click', handleReset);
				}
				if (condition > 0 && nextCondition <= 0) {
					node.removeEventListener('click', handleReset);
				}
				condition = nextCondition;
			},
			destroy() {
				node.removeEventListener('click', handleReset);
			}
		};
	}
</script>

<div class="carousel">
	<div class="slides" bind:this={siemaNode}>
		{@render children?.()}
	</div>
	{#if controls}
		<button class="left" onclick={left} use:resetInterval={autoplay} aria-label="Previous slide" type="button">
			{@render leftControl?.()}
		</button>
		<button class="right" onclick={right} use:resetInterval={autoplay} aria-label="Next slide" type="button">
			{@render rightControl?.()}
		</button>
	{/if}
	{#if dots}
		<ul>
			{#each Array.from({ length: totalDots }) as _, i}
				<li>
					<button
						type="button"
						class="dot"
						class:active={isDotActive(currentIndex, i)}
						onclick={() => go(i * currentPerPage)}
						aria-label={`Go to slide ${i + 1}`}
					></button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.left,
	.right {
		position: absolute;
		width: 40px;
		height: 40px;
		top: 50%;
		z-index: 50;
		margin-top: -20px;
		border: none;
		background-color: transparent;
	}

	.left:focus,
	.right:focus {
		outline: none;
	}

	.left {
		left: 2vw;
	}

	.right {
		right: 2vw;
	}

	ul {
		list-style-type: none;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: -30px;
		padding: 0;
	}

	ul li {
		margin: 6px;
	}

	.dot {
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.5);
		height: 8px;
		width: 8px;
		padding: 0;
		border: none;
		cursor: pointer;
	}

	.dot:hover {
		background-color: rgba(255, 255, 255, 0.85);
	}

	.dot.active {
		background-color: rgba(255, 255, 255, 1);
	}
</style>
