import Arrow from "@/constants/svg/arrow.svg";
import { cn } from "@/lib/utils";
import Particles from "@tsparticles/react";
import Image from "next/image";
// import { title } from "process";

const ParticleBg = () => (
  <Particles
    options={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            // value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.5,
            // opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    title: `Success Stories from Industry Leaders`,
    description: `Don't just take our word for it — hear what top innovators and digital leaders have to say:.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    description: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    description: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section>
    <div className={cn(`w-full min-h-screen bg-gray-900 relative`)}>
      <div
        className={cn(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}
      >
        <ParticleBg />
      </div>
      <div className={cn(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1
          className={cn(
            `text-white text-4xl lg:text-7xl font-bold text-center`
          )}
        >
          What will you build?
        </h1>
        <p className={cn(`text-white  text-center text-xl mt-12`)}>
          Unleash the potential of AI-driven voice technology to revolutionize
          customer interactions, streamline processes, and enhance user
          engagement. Your imagination is the only limit.
        </p>
        <div className={cn(`mx-auto pt-24`)}>
          <div className={cn(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={cn(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`
                )}
              >
                <div className={cn(`h-64 z-20`)}>
                  <Image
                    src={article.image}
                    alt={article.alt}
                    className={cn(
                      `h-full w-full object-cover overflow-hidden rounded`
                    )}
                    width={400}
                    height={300}
                  />
                </div>
                <div
                  className={cn(
                    `p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`
                  )}
                >
                  <p
                    className={cn(
                      `uppercase text-sm text-gray-700 text-center pb-1`
                    )}
                  >
                    {article.title}
                  </p>
                  <p className={cn(`text-gray-500 text-center pb-1 text-sm`)}>
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
            <span
              className={cn(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`
              )}
            >
              See all case studies
              <Arrow className={cn(`h-6 w-6 fill-current ml-2`)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
