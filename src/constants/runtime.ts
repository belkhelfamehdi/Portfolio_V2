// True while the app is rendered to static HTML at build time:
// vite-prerender-plugin runs the bundle in Node, where `window` does not exist.
export const isPrerender = typeof window === "undefined";
