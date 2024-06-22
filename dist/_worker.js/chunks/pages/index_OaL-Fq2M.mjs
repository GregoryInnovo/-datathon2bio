globalThis.process ??= {}; globalThis.process.env ??= {};
import '../@astrojs_CP8W6PcL.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as createAstro, d as renderComponent } from '../../renderers.mjs';
import '../kleur_BcFxsYqz.mjs';
import { $ as $$Layout } from './animalae_B1Y7_6Ku.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$ImportantValue = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImportantValue;
  const { icon, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col w-48 items-center"> <img class="w-20 h-20"${addAttribute(icon, "src")}${addAttribute(description, "alt")}> <h2>${title}</h2> <a class="text-center font-bold text-sm">${description}</a> </section>`;
}, "C:/Users/greg/dev/datathon2Bio/src/components/ImportantValue.astro", void 0);

const $$Astro = createAstro();
const $$DataGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DataGeneral;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-1"> <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> <div class="font-light text-white sm:text-lg"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-green-300"> ${title} </h2> <p class="mb-4"> ${description} </p> </div> <div class="grid grid-cols-2 gap-4 mt-8"> <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"> <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"> </div> </div> </section>`;
}, "C:/Users/greg/dev/datathon2Bio/src/components/DataGeneral.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const images = [
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg"
    // Añade todas las rutas de tus imágenes aquí
  ];
  const importantValues = [
    {
      title: "32,877",
      description: "Registros de biodiversidad",
      icon: "assets/icons/total.png"
    },
    {
      title: "71,937",
      description: "Invertebrados",
      icon: "assets/icons/inver.png"
    },
    {
      title: "50,837",
      description: "Vertebrados",
      icon: "assets/icons/ver.png"
    }
    // {
    //   title: "1,200",
    //   description: "Especies de aves",
    //   icon: "/public/icons/bird.png",
    // },
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hyperion | Explora la biodiversidad de Colombia", "currentPage": "index", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative inset-x-0 bottom-40" data-astro-cid-j7pv25f6> <div class="grid grid-cols-6 w-11/12 mx-auto" data-astro-cid-j7pv25f6> ${images.map((src) => renderTemplate`<div class="aspect-square" data-astro-cid-j7pv25f6>  <img${addAttribute(src, "src")} alt="Image" class="object-cover w-full h-full filter " data-astro-cid-j7pv25f6> </div>`)} </div> </section> <main data-astro-cid-j7pv25f6> <section class="flex flex-row flex-wrap w-full justify-between" data-astro-cid-j7pv25f6> ${importantValues.map((value) => renderTemplate`${renderComponent($$result2, "ImportantValue", $$ImportantValue, { "title": value.title, "description": value.description, "icon": value.icon, "data-astro-cid-j7pv25f6": true })}`)} </section> ${renderComponent($$result2, "DataGeneral", $$DataGeneral, { "title": "Reino", "description": "En el campo de la biolog\xEDa, un reino es una clasificaci\xF3n que agrupa a organismos bas\xE1ndose en caracter\xEDsticas fundamentales compartidas, tales como la estructura de sus c\xE9lulas, su forma de obtener energ\xEDa y su reproducci\xF3n. Por ejemplo, el reino Animalia incluye seres vivos que se alimentan de otros organismos y tienen la capacidad de moverse, mientras que el reino Plantae consta de organismos que generan su propio alimento a trav\xE9s de la fotos\xEDntesis. Los reinos son esenciales para entender c\xF3mo los distintos tipos de vida en la Tierra est\xE1n relacionados entre s\xED y c\xF3mo han evolucionado a lo largo del tiempo.", "data-astro-cid-j7pv25f6": true })} <section class="mt-1" data-astro-cid-j7pv25f6> <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6" data-astro-cid-j7pv25f6> <div class="font-light text-white sm:text-lg" data-astro-cid-j7pv25f6> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-green-300" data-astro-cid-j7pv25f6>
Filo
</h2> <p data-astro-cid-j7pv25f6>
En biología, un filo es una categoría taxonómica (relacionada con la
            taxonomía, que es la ciencia de clasificar los seres vivos) que se
            encuentra entre el reino y la clase, y se utiliza para agrupar
            organismos que comparten un ancestro común y un modelo de
            organización similar.
</p> <ol class="mb-4 list-decimal" data-astro-cid-j7pv25f6> <li class="ml-4 text-base mb-1" data-astro-cid-j7pv25f6>
Los filos representan grandes grupos de la vida en la Tierra y se
              definen por características distintivas en su estructura y
              desarrollo. Por ejemplo, el filo Chordata incluye a todos los
              animales con una cuerda dorsal, como los mamíferos, aves y peces,
              mientras que el filo Arthropoda abarca a los insectos, arácnidos y
              crustáceos, conocidos por su exoesqueleto y segmentación corporal.
</li> <li class="ml-4 text-base" data-astro-cid-j7pv25f6>
La clasificación en filos ayuda a los científicos a entender las
              complejas relaciones evolutivas y la diversidad biológica.
</li> </ol> </div> <div class="grid grid-cols-2 gap-4 mt-8" data-astro-cid-j7pv25f6> <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" data-astro-cid-j7pv25f6> <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" data-astro-cid-j7pv25f6> </div> </div> </section> ${renderComponent($$result2, "DataGeneral", $$DataGeneral, { "title": "Clase", "description": "En biolog\xEDa, la clase es una categor\xEDa taxon\xF3mica (relacionada con la taxonom\xEDa, que es la ciencia de clasificar los seres vivos) que se ubica entre el filo y el orden. Agrupa a organismos que comparten un conjunto de rasgos distintivos y un ancestro com\xFAn. Por ejemplo, la clase Mammalia (mam\xEDferos) incluye a todos los animales que poseen gl\xE1ndulas mamarias para alimentar a sus cr\xEDas con leche. La clasificaci\xF3n en clases ayuda a organizar la diversidad biol\xF3gica y refleja la historia evolutiva y las relaciones entre diferentes grupos de seres vivos.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "DataGeneral", $$DataGeneral, { "title": "Orden", "description": "En biolog\xEDa, el orden es una categor\xEDa taxon\xF3mica (que se refiere a la clasificaci\xF3n cient\xEDfica de los seres vivos) situada entre la clase y la familia. Agrupa a organismos que comparten caracter\xEDsticas evolutivas y morfol\xF3gicas significativas. Por ejemplo, el orden Carnivora incluye animales que tienen dientes y garras adaptados para cazar y comer carne, como leones y osos. Esta categor\xEDa ayuda a los cient\xEDficos a entender las relaciones evolutivas entre los organismos y a estudiar su diversidad de una manera organizada.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "DataGeneral", $$DataGeneral, { "title": "Familia", "description": "En biolog\xEDa, la familia es una categor\xEDa taxon\xF3mica (que se refiere a la clasificaci\xF3n cient\xEDfica de los seres vivos) que se encuentra entre el orden y el g\xE9nero. Agrupa organismos que comparten caracter\xEDsticas evolutivas y morfol\xF3gicas significativas, lo que indica un ancestro com\xFAn. Por ejemplo, la familia Canidae incluye a los perros, lobos y zorros, que son conocidos por sus similitudes en la estructura dental y comportamiento social. La categor\xEDa de familia es crucial para entender las relaciones evolutivas y la diversidad biol\xF3gica en un nivel m\xE1s espec\xEDfico que el orden, pero m\xE1s general que el g\xE9nero.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "DataGeneral", $$DataGeneral, { "title": "G\xE9nero", "description": "En biolog\xEDa, el g\xE9nero es una categor\xEDa taxon\xF3mica que se encuentra justo por encima de la especie y por debajo de la familia en la jerarqu\xEDa de clasificaci\xF3n de los seres vivos. Un g\xE9nero agrupa a varias especies que son muy similares y comparten caracter\xEDsticas espec\xEDficas, lo que sugiere un ancestro com\xFAn cercano. Por ejemplo, el g\xE9nero Panthera incluye grandes felinos como el le\xF3n (Panthera leo), el tigre (Panthera tigris), y el jaguar (Panthera onca). Estas especies comparten rasgos distintivos que las hacen diferentes de otros g\xE9neros dentro de la misma familia, como Felis, que incluye al gato dom\xE9stico (Felis catus). La categor\xEDa de g\xE9nero es crucial para la taxonom\xEDa porque ayuda a los cient\xEDficos a identificar y clasificar la diversidad de la vida, proporcionando una comprensi\xF3n m\xE1s detallada de las relaciones evolutivas entre las especies.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "DataGeneral", $$DataGeneral, { "title": "Especies", "description": "En biolog\xEDa, una especie es el nivel m\xE1s espec\xEDfico de clasificaci\xF3n biol\xF3gica y se refiere a un grupo de organismos que pueden reproducirse entre s\xED y producir descendencia f\xE9rtil. Los miembros de una especie comparten caracter\xEDsticas gen\xE9ticas y f\xEDsicas similares, lo que indica un linaje com\xFAn. Un ejemplo claro es el del Pez Payaso (Amphiprioninae), conocido por su asociaci\xF3n simbi\xF3tica con las an\xE9monas marinas. Cada pez payaso es parte de la misma especie porque puede aparearse con otro pez payaso y tener cr\xEDas que tambi\xE9n ser\xE1n peces payaso.", "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/greg/dev/datathon2Bio/src/pages/index.astro", void 0);

const $$file = "C:/Users/greg/dev/datathon2Bio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
