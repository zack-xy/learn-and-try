interface Window {
  helloWorld(): void;
}

interface Math {
  seedrandom(seed?: string): void;
}

declare var window: Window & typeof globalThis;
declare var Math: Math;


