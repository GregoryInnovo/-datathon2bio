globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/animalae_BSkuLprX.mjs').then(n => n.a);

export { page };
