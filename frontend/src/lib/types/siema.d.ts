declare module 'siema' {
	type PerPage = number | Record<number, number>;

	type SiemaOptions = {
		selector?: string | HTMLElement;
		duration?: number;
		easing?: string;
		perPage?: PerPage;
		startIndex?: number;
		draggable?: boolean;
		multipleDrag?: boolean;
		threshold?: number;
		loop?: boolean;
		rtl?: boolean;
		onInit?: () => void;
		onChange?: () => void;
	};

	export default class Siema {
		constructor(options?: SiemaOptions);
		currentSlide: number;
		innerElements: HTMLElement[];
		perPage: number;
		next(howManySlides?: number, callback?: () => void): void;
		prev(howManySlides?: number, callback?: () => void): void;
		goTo(index: number, callback?: () => void): void;
		destroy(removeStyle?: boolean, callback?: () => void): void;
	}
}
