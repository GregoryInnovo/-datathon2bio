globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_PD8kHLrR.mjs';
import { c as createExports, b as serverEntrypointModule } from './chunks/@astrojs_Cu8H2S4g.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./renderers.mjs').then(n => n.i);
const _page1 = () => import('./chunks/animalae_D9GljQTf.mjs');
const _page2 = () => import('./chunks/authors_BtaitI0O.mjs');
const _page3 = () => import('./chunks/explore_BDT6zono.mjs');
const _page4 = () => import('./chunks/fungi_SJ6hHVlK.mjs');
const _page5 = () => import('./chunks/plantae_BoHeBaz-.mjs');
const _page6 = () => import('./chunks/index_Cxy1wlu3.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/animalae.astro", _page1],
    ["src/pages/authors.astro", _page2],
    ["src/pages/explore.astro", _page3],
    ["src/pages/fungi.astro", _page4],
    ["src/pages/plantae.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
