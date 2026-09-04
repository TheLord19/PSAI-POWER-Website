// IntersectionObserver polyfill for jsdom test environment
// Required by framer-motion which uses IntersectionObserver internally
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [0];

  constructor() {
    // No-op constructor
  }

  observe(): void {
    // No-op
  }

  unobserve(): void {
    // No-op
  }

  disconnect(): void {
    // No-op
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = MockIntersectionObserver;
