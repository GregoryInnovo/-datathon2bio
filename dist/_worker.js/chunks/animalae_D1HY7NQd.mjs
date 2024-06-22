globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/animalae_B1Y7_6Ku.mjs').then(n => n.a);

export { page };
