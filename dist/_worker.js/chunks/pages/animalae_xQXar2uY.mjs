globalThis.process ??= {}; globalThis.process.env ??= {};
import '../@astrojs_Cu8H2S4g.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, d as renderComponent, e as createAstro, f as addAttribute, u as unescapeHTML, F as Fragment, g as renderHead } from '../../renderers.mjs';
import '../kleur_BcFxsYqz.mjs';
/* empty css                             */
/* empty css                             */

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/greg/dev/datathon2Bio/src/components/Container.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const menuItems = [
    // { href: "animalae", text: "Animalae" },
    // { href: "plantae", text: "Plantae" },
    // { href: "fungi", text: "Fungi" },
    {
      href: "explore",
      text: "Explora la biodiversidad de Colombia",
      isButton: true
    }
  ];
  const { currentPage = "index" } = Astro2.props;
  const pageTexts = {
    index: "Explora la maravillosa <strong>biodiversidad</strong><br />en <strong>Colombia</strong> y sus m\xFAltiples regiones",
    animalae: "Descubre la fascinante fauna de <strong>Colombia</strong>",
    plantae: "Admira la exuberante flora <strong>colombiana</strong>",
    fungi: "Explora el misterioso mundo de los hongos en <strong>Colombia</strong>",
    explore: `<ul class="text-center text-2xl text-green-900 dark:text-white">
    <li>Conoce la <strong>biodiversidad</strong> en <strong>Colombia</strong></li>
    <li>en sus m\xFAltiples regiones y especies</li>
  </ul>
  <br/>
  <p class="text-xl text-green-700 dark:text-green-200">
    Selecciona una categor\xEDa para: <br/> Conocer el n\xFAmero de especies en cada reino <br/> Filtrar por departamento
  </p>`
  };
  const headerText = pageTexts[currentPage] || pageTexts.index;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav class="z-1 w-full relative" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative" data-astro-cid-3ef6ksr2> <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" class="hidden peer" data-astro-cid-3ef6ksr2> <div class="relative z-20 w-full flex justify-between lg:w-max md:px-0" data-astro-cid-3ef6ksr2> <a href="/" aria-label="logo" class="flex space-x-2 items-center" data-astro-cid-3ef6ksr2> <span class="text-2xl font-bold text-green-900 dark:text-white" data-astro-cid-3ef6ksr2>Hyperion</span> </a> <div class="relative flex items-center lg:hidden max-h-10" data-astro-cid-3ef6ksr2> <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" class="relative p-6 -mr-6" data-astro-cid-3ef6ksr2> <div aria-hidden="true" id="line" class="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300" data-astro-cid-3ef6ksr2></div> <div aria-hidden="true" id="line2" class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300" data-astro-cid-3ef6ksr2></div> </label> </div> </div> <div aria-hidden="true" class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70" data-astro-cid-3ef6ksr2></div> <div class="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none
                            dark:shadow-none dark:bg-green-800 dark:border-green-700" data-astro-cid-3ef6ksr2> <div class="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0" data-astro-cid-3ef6ksr2> <ul class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0" data-astro-cid-3ef6ksr2> ${menuItems.map(
    (item) => !item.isButton ? renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")} class="block md:px-4 transition hover:text-primary" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>${item.text}</span> </a> </li>` : null
  )} </ul> </div> <div class="mt-12 lg:mt-0" data-astro-cid-3ef6ksr2> ${menuItems.map(
    (item) => item.isButton ? renderTemplate`<a${addAttribute(item.href, "href")} class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" data-astro-cid-3ef6ksr2> <span class="relative text-sm font-semibold text-white" data-astro-cid-3ef6ksr2> ${item.text} </span> </a>` : null
  )} </div> </div> </div> ` })} <hr class="border-t border-gray-200 my-4 w-11/12 mx-auto" data-astro-cid-3ef6ksr2> <h3 class="text-center text-2xl text-green-900 dark:text-white pb-48" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(headerText)}` })} </h3> </nav>  </header>`;
}, "C:/Users/greg/dev/datathon2Bio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-green-800 rounded-lg shadow m-4"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm text-white sm:text-center">Hyperion</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0"> <li> <a href="/authors" class="hover:underline me-4 md:me-6">Autores</a> </li> <li> <a href="#" class="hover:underline me-4 md:me-6">Metodología</a> </li> <li> <a href="#" class="hover:underline me-4 md:me-6">Como citar</a> </li> </ul> </div> </footer>`;
}, "C:/Users/greg/dev/datathon2Bio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, currentPage = "index" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "currentPage": currentPage })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/greg/dev/datathon2Bio/src/layouts/Layout.astro", void 0);

const $$Animalae = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reino Animalae", "currentPage": "animalae", "data-astro-cid-de6dxiz5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-de6dxiz5> <section class="relative inset-x-0 bottom-36" data-astro-cid-de6dxiz5> <iframe title="Animalia" width="100%" height="1800" src="https://app.powerbi.com/view?r=eyJrIjoiYTA4NzI4NGQtOTUzNS00NTQ5LWI0OTYtODY3OTAxZGUzNDllIiwidCI6IjEzZDVlMjVjLTQ5NTEtNDFhMi05NzQyLWMxYzA3ZDY2OTVhMyIsImMiOjR9" frameborder="0" allowFullScreen="true" data-astro-cid-de6dxiz5></iframe> </section> </main> ` })} `;
}, "C:/Users/greg/dev/datathon2Bio/src/pages/animalae.astro", void 0);

const $$file = "C:/Users/greg/dev/datathon2Bio/src/pages/animalae.astro";
const $$url = "/animalae";

const animalae = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Animalae,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, animalae as a };
