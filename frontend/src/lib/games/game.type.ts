export type GameOrientation = 'landscape' | 'portrait' | 'any';

export interface Game {
    slug: string;
    src: string;
    class: string;
    orientation: GameOrientation;
    thumbnail: string;
    title: string;
    content: string;
    labels: string[]
}
