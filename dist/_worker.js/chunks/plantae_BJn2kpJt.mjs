globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/plantae_C15II2Kx.mjs');

export { page };
