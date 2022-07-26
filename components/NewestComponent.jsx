import React from "react";
import Image from "next/image";

const NewestComponent = () => {
  return (
    <div className="pt-32">
      <div className="relative py-16">
        <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20" />
        <div className="relative">
          <div className="relative flex flex-col justify-between mb-12 nc-Section-Heading sm:flex-row sm:items-end md:mb-16 text-neutral-900 dark:text-neutral-50">
            <div className="w-full max-w-2xl mx-auto text-center ">
              <h3 className="text-3xl font-semibold md:text-4xl">
                Newest authors{" "}
              </h3>
              <span className="block mt-2 text-base font-normal md:mt-3 sm:text-xl text-neutral-500 dark:text-neutral-400">
                Say hello to future creator potentials
              </span>
            </div>
          </div>
          <div className="overflow-hidden">
            <ul className="grid grid-cols-1 gap-9 will-change-transform m-0 p-0 overflow-hidden touch-pan-y list-none relative xs:grid-cols-2 xs:gap-5 sm:!gap-8 md:!grid-cols-2 lg:!grid-cols-4">
              <li className="mx-[10%] h-full flex-shrink-0 whitespace-normal xs:mx-0">
                <a
                  href="#"
                  className="flex flex-col overflow-hidden border rounded-2xl"
                >
                  <div className="relative flex-shrink-0">
                    <div className="relative flex w-full pb-44">
                      <Image
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/dhztnlvne8m-1.jpg"
                        className="absolute object-cover w-full h-full"
                        alt=""
                        layout="fill"
                      />
                    </div>
                    <div className="absolute flex top-3 inset-x-3">
                      <div className="flex items-center justify-center px-4 py-1 text-xs font-medium leading-none rounded-full bg-neutral-100 dark:bg-neutral-800">
                        13
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 ml-3 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-8 -mt-8 text-center">
                    <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-16 h-16 overflow-hidden text-2xl font-semibold uppercase rounded-full shadow-inner wil-avatar text-neutral-100 ring-2 ring-white">
                      <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780-150x150.jpg"
                        alt=""
                        layout="fill"
                      />
                      <span className="wil-avatar__name">p</span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-base font-medium">
                        <span className="line-clamp-1">Frederique</span>
                      </h4>
                      <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        UX Designer
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="mx-[10%] h-full flex-shrink-0 whitespace-normal xs:mx-0">
                <a
                  href="#"
                  className="flex flex-col overflow-hidden border rounded-2xl"
                >
                  <div className="relative flex-shrink-0">
                    <div className="relative flex w-full pb-44">
                      <Image
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/dhztnlvne8m-1.jpg"
                        className="absolute object-cover w-full h-full"
                        alt=""
                        layout="fill"
                      />
                    </div>
                    <div className="absolute flex top-3 inset-x-3">
                      <div className="flex items-center justify-center px-4 py-1 text-xs font-medium leading-none rounded-full bg-neutral-100 dark:bg-neutral-800">
                        13
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 ml-3 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-8 -mt-8 text-center">
                    <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-16 h-16 overflow-hidden text-2xl font-semibold uppercase rounded-full shadow-inner wil-avatar text-neutral-100 ring-2 ring-white">
                      <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780-150x150.jpg"
                        alt=""
                        layout="fill"
                      />
                      <span className="wil-avatar__name">p</span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-base font-medium">
                        <span className="line-clamp-1">Frederique</span>
                      </h4>
                      <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        UX Designer
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="mx-[10%] h-full flex-shrink-0 whitespace-normal xs:mx-0">
                <a
                  href="#"
                  className="flex flex-col overflow-hidden border rounded-2xl"
                >
                  <div className="relative flex-shrink-0">
                    <div className="relative flex w-full pb-44">
                      <Image
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/dhztnlvne8m-1.jpg"
                        className="absolute object-cover w-full h-full"
                        alt=""
                        layout="fill"
                      />
                    </div>
                    <div className="absolute flex top-3 inset-x-3">
                      <div className="flex items-center justify-center px-4 py-1 text-xs font-medium leading-none rounded-full bg-neutral-100 dark:bg-neutral-800">
                        13
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 ml-3 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-8 -mt-8 text-center">
                    <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-16 h-16 overflow-hidden text-2xl font-semibold uppercase rounded-full shadow-inner wil-avatar text-neutral-100 ring-2 ring-white">
                      <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780-150x150.jpg"
                        alt=""
                        layout="fill"
                      />
                      <span className="wil-avatar__name">p</span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-base font-medium">
                        <span className="line-clamp-1">Frederique</span>
                      </h4>
                      <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        UX Designer
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="mx-[10%] h-full flex-shrink-0 whitespace-normal xs:mx-0">
                <a
                  href="#"
                  className="flex flex-col overflow-hidden border rounded-2xl"
                >
                  <div className="relative flex-shrink-0">
                    <div className="relative flex w-full pb-44">
                      <Image
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/dhztnlvne8m-1.jpg"
                        className="absolute object-cover w-full h-full"
                        alt=""
                        layout="fill"
                      />
                    </div>
                    <div className="absolute flex top-3 inset-x-3">
                      <div className="flex items-center justify-center px-4 py-1 text-xs font-medium leading-none rounded-full bg-neutral-100 dark:bg-neutral-800">
                        13
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 ml-3 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-8 -mt-8 text-center">
                    <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-16 h-16 overflow-hidden text-2xl font-semibold uppercase rounded-full shadow-inner wil-avatar text-neutral-100 ring-2 ring-white">
                      <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780-150x150.jpg"
                        alt=""
                        layout="fill"
                      />
                      <span className="wil-avatar__name">p</span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-base font-medium">
                        <span className="line-clamp-1">Frederique</span>
                      </h4>
                      <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        UX Designer
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestComponent;
