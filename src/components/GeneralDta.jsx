// import { Icon } from "astro-icon/components";

const GeneralDta = () => {
  const features = [
    {
      name: "Revisa por regiones la biodiversidad de Colombia",
      description:
        "Explora la fauna y flora de Colombia por regiones y descubre la diversidad de especies que habitan en cada una.",
      link: "/explore",
      nameIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z"
            clip-rule="evenodd"
          />
          <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
        </svg>
      ),
    },
    {
      name: "Buscador semántico",
      description:
        "Busca por cualquier característica de la especie y obtén resultados más aproximados.",
      link: "/search",
      nameIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="size-6"
        >
          <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const Feature = ({ name, description, nameIcon }) => {
    return (
      <div key={name} className="relative pl-16  px-4 ">
        <dt className="text-base font-semibold leading-7 text-gray-900">
          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-forest">
            {nameIcon}
          </div>
          {name}
        </dt>
        <dd className="mt-2 text-base leading-7 text-gray-600 w-full ">
          {description}
        </dd>
        <a
          href="/search"
          className="text-base font-semibold leading-7 text-forest hover:text-sand mt-4"
        >
          Ver más
        </a>
      </div>
    );
  };

  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl  px-6 lg:px-8 xl:max-w-full">
        <div className="mx-auto max-w-2xl lg:text-center lg:max-w-6xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-coffee sm:text-4xl">
            Reto: Biodiversidad
          </p>
          <h2 className="text-base font-semibold leading-7 text-forest">
            Grupo Hyperion
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestro reto es abordar la falta de información precisa y accesible
            sobre la{" "}
            <p className="font-bold text-2xl text-forest inline-block">fauna</p>{" "}
            y{" "}
            <p className="font-bold text-2xl text-forest inline-block">flora</p>{" "}
            en{" "}
            <p className="font-bold text-2xl text-forest inline-block">
              Colombia.
            </p>{" "}
            Este problema afecta la capacidad de conservar y proteger la
            biodiversidad del país, ya que
            <strong>
              {" "}
              sin datos fiables es difícil tomar decisiones informadas.{" "}
            </strong>
            Nuestra solución proporciona una plataforma que centraliza y
            visualiza datos de biodiversidad,{" "}
            <strong>
              facilitando el acceso y entendimiento para diversos usuarios.
            </strong>
          </p>
        </div>
        <div className="mx-auto mt-16 md:w-full  sm:mt-20 lg:mt-24 lg:w-3/4">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 w-full max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <Feature key={feature.name} {...feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default GeneralDta;
