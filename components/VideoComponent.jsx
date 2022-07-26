import React from "react";

const VideoComponent = () => {
  return (
    <div className="relative pt-32">
      <div className="relative flex flex-col justify-between mb-12 sm:flex-row sm:items-end md:mb-16 text-neutral-900 dark:text-neutral-50">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-semibold md:text-4xl">The Videos</h3>
          <span className="block mt-2 text-base font-normal md:mt-3 sm:text-xl text-neutral-500 dark:text-neutral-400">
            Check out our hottest videos. View more and share more new
            perspectives on just about any topic. Everyone’s welcome.
          </span>
        </div>
      </div>
      <div className="relative flex flex-col sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-slate-900/10 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40" />
        <div className="relative flex-grow pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          <div className="relative group pb-[300px] rounded-3xl overflow-hidden z-0 border-4 border-slate-100 dark:border-slate-900 xs:pb-[400px] sm:rounded-[50px] sm:border-[10px] md:!pb-[450px] lg:!pb-[500px] 2xl:!pb-[33vw]">
            <div className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer">
              <div className="w-20 h-20 p-3 bg-white rounded-full bg-opacity-30 backdrop-filter backdrop-blur lg:w-52 lg:h-52 lg:p-12">
                <div className="relative w-full h-full bg-white rounded-full text-primary-500">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600 md:w-12 md:h-12"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 ">
              <img
                src="https://img.youtube.com/vi/7H7cTSml5zk/maxresdefault.jpg"
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105 "
                alt="nc-imgs"
              />
            </div>
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-4 gap-2 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40">
          <div className="relative z-0 pb-24 overflow-hidden cursor-pointer group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative w-8 h-8 bg-white rounded-full shadow-inner md:w-10 md:h-10">
                <span className="absolute inset-0 flex items-center justify-center text-primary-500">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://img.youtube.com/vi/Qc4_VtsQV8E/mqdefault.jpg"
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110 "
                alt=""
              />
            </div>
          </div>
          <div className="relative z-0 pb-24 overflow-hidden cursor-pointer group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative w-8 h-8 bg-white rounded-full shadow-inner md:w-10 md:h-10">
                <span className="absolute inset-0 flex items-center justify-center text-primary-500">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://img.youtube.com/vi/HlwKt36NPfg/mqdefault.jpg"
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110 "
                alt=""
              />
            </div>
          </div>
          <div className="relative z-0 pb-24 overflow-hidden cursor-pointer group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative w-8 h-8 bg-white rounded-full shadow-inner md:w-10 md:h-10">
                <span className="absolute inset-0 flex items-center justify-center text-primary-500">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://img.youtube.com/vi/3NycM9lYdRI/mqdefault.jpg"
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110 "
                alt=""
              />
            </div>
          </div>
          <div className="relative z-0 pb-24 overflow-hidden cursor-pointer group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative w-8 h-8 bg-white rounded-full shadow-inner md:w-10 md:h-10">
                <span className="absolute inset-0 flex items-center justify-center text-primary-500">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://img.youtube.com/vi/53dF0osyS30/mqdefault.jpg"
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
