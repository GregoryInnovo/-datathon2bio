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
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z"
            clipRule="evenodd"
          />
          <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
        </svg>
      ),
    },
    {
      name: "Explora el Reino Animalae",
      description:
        "Descubre las especies animales que habitan en Colombia y aprende sobre sus características.",
      link: "/animalae",
      nameIcon: (
        <svg viewBox="0 0 24 24" className="size-6">
          <path
            fill="white"
            d="m12 8l-1.33.09C9.81 7.07 7.4 4.5 5 4.5c0 0-1.97 2.96-.04 6.91c-.55.83-.89 1.26-.96 2.25l-1.93.29l.21.98l1.76-.26l.14.71l-1.57.94l.47.89l1.45-.89C5.68 18.76 8.59 20 12 20s6.32-1.24 7.47-3.68l1.45.89l.47-.89l-1.57-.94l.14-.71l1.76.26l.21-.98l-1.93-.29c-.07-.99-.41-1.42-.96-2.25C20.97 7.46 19 4.5 19 4.5c-2.4 0-4.81 2.57-5.67 3.59zm-3 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 3h2l-.7 1.39c.2.64.76 1.11 1.45 1.11a1.5 1.5 0 0 0 1.5-1.5h.5a2 2 0 0 1-2 2c-.75 0-1.4-.41-1.75-1c-.35.59-1 1-1.75 1a2 2 0 0 1-2-2h.5a1.5 1.5 0 0 0 1.5 1.5c.69 0 1.25-.47 1.45-1.11z"
          />
        </svg>
      ),
    },
    {
      name: "Explora el Reino Plantae",
      description:
        "Descubre las especies vegetales que habitan en Colombia y descubre sus características.",
      link: "/plantae",
      nameIcon: (
        <svg viewBox="0 0 24 24" className="size-5">
          <path
            fill="white"
            d="M23 4.1V2.3l-1.8-.2c-.1 0-.7-.1-1.7-.1c-4.1 0-7.1 1.2-8.8 3.3C9.4 4.5 7.6 4 5.5 4c-1 0-1.7.1-1.7.1l-1.9.3l.1 1.7c.1 3 1.6 8.7 6.8 8.7H9v3.4c-3.8.5-7 1.8-7 1.8v2h20v-2s-3.2-1.3-7-1.8V15c6.3-.1 8-7.2 8-10.9M12 18h-1v-5.6S10.8 9 8 9c0 0 1.5.8 1.9 3.7c-.4.1-.8.1-1.1.1C4.2 12.8 4 6.1 4 6.1S4.6 6 5.5 6c1.9 0 5 .4 5.9 3.1C11.9 4.6 17 4 19.5 4c.9 0 1.5.1 1.5.1s0 9-6.3 9H14c0-2 2-5 2-5c-3 1-3 4.9-3 4.9v5z"
          />
        </svg>
      ),
    },
    {
      name: "Explora el Reino fungi",
      description:
        "Descubre las especies de hongos que habitan en Colombia y aprende sobre sus características.",
      link: "/fungi",
      nameIcon: (
        <svg viewBox="0 0 24 24" className="size-5">
          <path
            fill="white"
            d="M4 12h16c0-3.73-2.56-6.87-6-7.75c-.14.99-1 1.75-2 1.75s-1.86-.76-2-1.75C6.56 5.13 4 8.27 4 12m8-10a10 10 0 0 1 10 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2A10 10 0 0 1 12 2m1.5 15h-3l-.58 2l-.27 1h4.7l-.27-1zm1.5-2l1 3.5l.27.95l.08.55c0 1.1-.9 2-2 2h-4.7l-.48-.06a2.004 2.004 0 0 1-1.44-2.44l.27-1L9 15zm1-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M8 7a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
          />
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

  const Feature = ({ name, link, description, nameIcon }) => {
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
          href={link}
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
