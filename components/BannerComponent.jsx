import Image from "next/image";
import React, { useState, useEffect } from "react";

const BannerComponent = () => {
  const [step, setStep] = useState("step1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);
  
  const renderStepBanner = (step) => {
    switch (step) {
      case "step1":
        return (
          <div className="relative flex flex-col-reverse justify-end md:flex-row ">
            <div className="z-10 w-full px-3 -mt-8 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:mt-0 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
              <div
                className={
                  "p-4 sm:p-8 xl:py-14 md:px-10 bg-white dark:bg-slate-900/40 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0" +
                  (isLoading ? "" : step !== "step1" ? "" : " animate-toUp")
                }
              >
                {isLoading ? (
                  <div className="w-full animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
                  </div>
                ) : (
                  <>
                    <div className="flow-root">
                      <div className="flex flex-wrap -my-1 space-x-2 ">
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-green-800 bg-green-100 hover:bg-green-800"
                        >
                          Garden
                        </a>
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                        >
                          Videos
                        </a>
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold sm:text-2xl ">
                      <a href="#">
                        Lenovo’s smarter devices stoke professional passions
                      </a>
                    </h2>
                    <a href="#" className="relative inline-flex items-center">
                      <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 overflow-hidden text-base font-semibold uppercase rounded-full shadow-inner text-neutral-100">
                        <Image
                          className="absolute inset-0 object-cover w-full h-full"
                          src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/slgyaq_stmm-1-e1633222654843-150x150.jpg"
                          alt=""
                          layout="fill"
                        />
                        <span>w</span>
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-sm font-medium truncate text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                          Lila
                        </h4>
                        <span className="flex items-center mt-1 text-xs truncate text-neutral-500 dark:text-neutral-400">
                          <span>Sep 18, 2021</span>
                          <span className="mx-1 transition-opacity lg:inline ">
                            ·
                          </span>
                          <span className="truncate transition-opacity lg:inline ">
                            <span className="span-reading-time rt-reading-time">
                              <span className="rt-label rt-prefix" />{" "}
                              <span className="rt-time"> 3</span>{" "}
                              <span className="rt-label rt-postfix">
                                minutes
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </a>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <button className="flex relative dark:bg-[#1f2937] border border-slate-500 dark:border-transparent rounded-full px-4 py-2">
                            <svg
                              width={24}
                              height={24}
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>237</span>
                          </button>
                        </div>
                        <a
                          href="#"
                          className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                        >
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                            />
                          </svg>
                          <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                            5
                          </span>
                        </a>
                      </div>
                      <div className="relative inline-block text-left">
                        <button
                          className="relative flex items-center justify-center transition-colors duration-300 rounded-full nc-PostCardDropdownShare focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
                          title="Share with"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div>
                            <svg
                              width={24}
                              height={24}
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M12 14.25L12 5"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M8.75 8.25L12 4.75L15.25 8.25"
                              />
                            </svg>
                            <input
                              type="text"
                              hidden
                              className="hidden"
                              defaultValue="https://ncmaz.chisnghiax.com/aut-quisquam-odit-voluptates/"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4 sm:pt-8 sm:px-10">
                <div className="relative flex items-center space-x-2 nc-NextPrev text-neutral-900 dark:text-neutral-300">
                  <button
                    className="flex items-center justify-center text-xl bg-gray-400 border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Prev"
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <button
                    className="flex items-center justify-center text-xl bg-gray-400 border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Next"
                    onClick={() => setStep("step2")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-right"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/5 lg:w-2/3">
              <a href="#">
                <div className="relative pb-[40vw] md:pb-[60vw] lg:pb-[40vw] 2xl:pb-[30vw]">
                  {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full bg-white border rounded-3xl dark:border-transparent dark:bg-gray-700 animate-pulse">
                      <svg
                        className="w-32 h-32 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
                  ) : (
                    <Image
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/photo-1440778303588-435521a205bc.jpeg"
                      className={
                        "absolute h-full w-full inset-0 object-cover rounded-3xl" +
                        (isLoading ? "" : " animate-toUpScale")
                      }
                      layout="fill"
                      alt=""
                    />
                  )}
                </div>
              </a>
            </div>
          </div>
        );
      case "step2":
        return (
          <div className="relative flex flex-col-reverse justify-end md:flex-row">
            <div className="z-10 w-full px-3 -mt-8 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:mt-0 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
              <div className="p-4 sm:p-8 xl:py-14 md:px-10 bg-white dark:bg-slate-900/40 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 animate-toUp">
                <div className="flow-root ">
                  <div className="flex flex-wrap -my-1 space-x-2 ">
                    <a
                      href="#"
                      className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-green-800 bg-green-100 hover:bg-green-800"
                    >
                      Garden
                    </a>
                    <a
                      href="#"
                      className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                    >
                      Videos
                    </a>
                  </div>
                </div>
                <h2 className="text-xl font-semibold nc-card-title sm:text-2xl ">
                  <a href="#">
                    Lenovo’s smarter devices stoke professional passions
                  </a>
                </h2>
                <a href="#" className="relative inline-flex items-center">
                  <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 overflow-hidden text-base font-semibold uppercase rounded-full shadow-inner text-neutral-100">
                    <Image
                      className="absolute inset-0 object-cover w-full h-full"
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/x6uj51n5ce8-1-e1633222556192-150x150.jpg"
                      alt=""
                      layout="fill"
                    />
                    <span className="wil-avatar__name">w</span>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-medium truncate text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                      Frieda
                    </h4>
                    <span className="flex items-center mt-1 text-xs truncate text-neutral-500 dark:text-neutral-400">
                      <span>Sep 18, 2021</span>
                      <span className="hidden mx-1 transition-opacity lg:inline ">
                        ·
                      </span>
                      <span className="hidden truncate transition-opacity lg:inline ">
                        <span className="span-reading-time rt-reading-time">
                          <span className="rt-label rt-prefix" />{" "}
                          <span className="rt-time"> 3</span>{" "}
                          <span className="rt-label rt-postfix">minutes</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </a>
                <div className="flex items-center justify-between mt-auto">
                  <div
                    className="flex items-center space-x-2 nc-PostCardLikeAndComment "
                    data-nc-id="PostCardLikeAndComment"
                  >
                    <div className="relative">
                      <button className="flex relative dark:bg-[#1f2937] border border-slate-500 dark:border-transparent rounded-full px-4 py-2">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>37</span>
                      </button>
                    </div>
                    <a
                      href="#"
                      className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                    >
                      <svg
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                        />
                      </svg>
                      <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                        5
                      </span>
                    </a>
                  </div>
                  <div className="relative inline-block text-left">
                    <button
                      className="relative flex items-center justify-center transition-colors duration-300 rounded-full nc-PostCardDropdownShare focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
                      title="Share with"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div>
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 14.25L12 5"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8.75 8.25L12 4.75L15.25 8.25"
                          />
                        </svg>
                        <input
                          type="text"
                          hidden
                          className="hidden"
                          defaultValue="https://ncmaz.chisnghiax.com/aut-quisquam-odit-voluptates/"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:pt-8 sm:px-10">
                <div className="relative flex items-center space-x-2 nc-NextPrev text-neutral-900 dark:text-neutral-300">
                  <button
                    className="flex items-center justify-center text-xl bg-gray-400 border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Prev"
                    onClick={() => setStep("step1")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <button
                    className="flex items-center justify-center text-xl bg-gray-400 border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Next"
                    onClick={() => setStep("step3")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-right"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/5 lg:w-2/3">
              <a className="block" href="#">
                <div className="relative pb-[40vw] md:pb-[60vw] lg:pb-[40vw] 2xl:pb-[30vw]">
                  <Image
                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2294353-1.jpeg"
                    className="absolute inset-0 object-cover w-full h-full rounded-3xl animate-toUpScale"
                    alt=""
                    layout="fill"
                  />
                </div>
              </a>
            </div>
          </div>
        );
      case "step3":
        return (
          <div className="relative flex flex-col-reverse justify-end md:flex-row">
            <div className="z-10 w-full px-3 -mt-8 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:mt-0 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
              <div className="p-4 sm:p-8 xl:py-14 md:px-10 bg-white dark:bg-slate-900/40 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 animate-toUp">
                <div className="flow-root">
                  <div className="flex flex-wrap -my-1 space-x-2 ">
                    <a
                      href="#"
                      className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-green-800 bg-green-100 hover:bg-green-800"
                    >
                      Garden
                    </a>
                    <a
                      href="#"
                      className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                    >
                      Videos
                    </a>
                  </div>
                </div>
                <h2 className="text-xl font-semibold nc-card-title sm:text-2xl ">
                  <a href="#">
                    Lenovo’s smarter devices stoke professional passions
                  </a>
                </h2>
                <a href="#" className="relative inline-flex items-center">
                  <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 overflow-hidden text-base font-semibold uppercase rounded-full shadow-inner wil-avatar text-neutral-100">
                    <Image
                      className="absolute inset-0 object-cover w-full h-full"
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/xdyqr14kyas-1-1-e1633222632921-150x150.jpg"
                      alt=""
                      layout="fill"
                    />
                    <span className="wil-avatar__name">w</span>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-medium truncate text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                      Lauretta
                    </h4>
                    <span className="flex items-center mt-1 text-xs truncate text-neutral-500 dark:text-neutral-400">
                      <span>Sep 18, 2021</span>
                      <span className="hidden mx-1 transition-opacity lg:inline ">
                        ·
                      </span>
                      <span className="hidden truncate transition-opacity lg:inline ">
                        <span className="span-reading-time rt-reading-time">
                          <span className="rt-label rt-prefix" />{" "}
                          <span className="rt-time"> 3</span>{" "}
                          <span className="rt-label rt-postfix">minutes</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </a>
                <div className="flex items-center justify-between mt-auto">
                  <div
                    className="flex items-center space-x-2 nc-PostCardLikeAndComment "
                    data-nc-id="PostCardLikeAndComment"
                  >
                    <div className="relative">
                      <button className="flex relative dark:bg-[#1f2937] border border-slate-500 dark:border-transparent rounded-full px-4 py-2">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>25</span>
                      </button>
                    </div>
                    <a
                      href="#"
                      className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                    >
                      <svg
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                        />
                      </svg>
                      <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                        5
                      </span>
                    </a>
                  </div>
                  <div className="relative inline-block text-left">
                    <button
                      className="relative flex items-center justify-center transition-colors duration-300 rounded-full nc-PostCardDropdownShare focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
                      title="Share with"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div>
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 14.25L12 5"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8.75 8.25L12 4.75L15.25 8.25"
                          />
                        </svg>
                        <input
                          type="text"
                          hidden
                          className="hidden"
                          defaultValue="https://ncmaz.chisnghiax.com/aut-quisquam-odit-voluptates/"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:pt-8 sm:px-10">
                <div className="relative flex items-center space-x-2 nc-NextPrev text-neutral-900 dark:text-neutral-300">
                  <button
                    className="flex items-center justify-center text-xl bg-gray-400 border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Prev"
                    onClick={() => setStep("step2")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <button
                    className="flex items-center justify-center text-xl bg-gray-400 border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Next"
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-right"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/5 lg:w-2/3">
              <a className="block" href="#">
                <div className="relative pb-[40vw] md:pb-[60vw] lg:pb-[40vw] 2xl:pb-[30vw]">
                  <Image
                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/photo-1489753735160-2cbf3d9006d4-768x512.jpg"
                    className="absolute inset-0 object-cover w-full h-full rounded-3xl animate-toUpScale"
                    alt=""
                    layout="fill"
                  />
                </div>
              </a>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative flex flex-col-reverse justify-end md:flex-row ">
            <div className="z-10 w-full px-3 -mt-8 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:mt-0 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
              <div
                className={
                  "p-4 sm:p-8 xl:py-14 md:px-10 bg-white dark:bg-slate-900 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0" +
                  (isLoading ? "" : step !== "step1" ? "" : " animate-toUp")
                }
              >
                {isLoading ? (
                  <div className="w-full animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
                  </div>
                ) : (
                  <>
                    <div className="flow-root">
                      <div className="flex flex-wrap -my-1 space-x-2 ">
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-green-800 bg-green-100 hover:bg-green-800"
                        >
                          Garden
                        </a>
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                        >
                          Videos
                        </a>
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold nc-card-title sm:text-2xl ">
                      <a href="#">
                        Lenovo’s smarter devices stoke professional passions
                      </a>
                    </h2>
                    <a href="#" className="relative inline-flex items-center">
                      <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 overflow-hidden text-base font-semibold uppercase rounded-full shadow-inner text-neutral-100">
                        <Image
                          className="absolute inset-0 object-cover w-full h-full"
                          src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/slgyaq_stmm-1-e1633222654843-150x150.jpg"
                          alt=""
                          layout="fill"
                        />
                        <span className="wil-avatar__name">w</span>
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-sm font-medium truncate text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                          Lila
                        </h4>
                        <span className="flex items-center mt-1 text-xs truncate text-neutral-500 dark:text-neutral-400">
                          <span>Sep 18, 2021</span>
                          <span className="hidden mx-1 transition-opacity lg:inline ">
                            ·
                          </span>
                          <span className="hidden truncate transition-opacity lg:inline ">
                            <span className="span-reading-time rt-reading-time">
                              <span className="rt-label rt-prefix" />{" "}
                              <span className="rt-time"> 3</span>{" "}
                              <span className="rt-label rt-postfix">
                                minutes
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </a>
                    <div className="flex items-center justify-between mt-auto">
                      <div
                        className="flex items-center space-x-2 nc-PostCardLikeAndComment "
                        data-nc-id="PostCardLikeAndComment"
                      >
                        <div className="relative ncmaz-button-like-post">
                          <button className="flex relative dark:bg-[#1f2937] border rounded-full px-4 py-2">
                            <svg
                              width={24}
                              height={24}
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>237</span>
                          </button>
                        </div>
                        <a
                          href="#"
                          className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                        >
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                            />
                          </svg>
                          <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                            5
                          </span>
                        </a>
                      </div>
                      <div className="relative inline-block text-left">
                        <button
                          className="relative flex items-center justify-center transition-colors duration-300 rounded-full nc-PostCardDropdownShare focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
                          title="Share with"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div>
                            <svg
                              width={24}
                              height={24}
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M12 14.25L12 5"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M8.75 8.25L12 4.75L15.25 8.25"
                              />
                            </svg>
                            <input
                              type="text"
                              hidden
                              className="hidden"
                              defaultValue="https://ncmaz.chisnghiax.com/aut-quisquam-odit-voluptates/"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4 sm:pt-8 sm:px-10">
                <div className="relative flex items-center space-x-2 nc-NextPrev text-neutral-900 dark:text-neutral-300">
                  <button
                    className="flex items-center justify-center text-xl bg-white border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Prev"
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <button
                    className="flex items-center justify-center text-xl bg-gray-400 border rounded-full w-11 h-11 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                    title="Next"
                    onClick={() => setStep("step2")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-right"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/5 lg:w-2/3">
              <a href="#">
                <div className="relative pb-[40vw] md:pb-[60vw] lg:pb-[40vw] 2xl:pb-[30vw]">
                  {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full bg-white border rounded-3xl dark:border-transparent dark:bg-gray-700 animate-pulse">
                      <svg
                        className="w-32 h-32 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
                  ) : (
                    <Image
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/photo-1440778303588-435521a205bc.jpeg"
                      className={
                        "absolute h-full w-full inset-0 object-cover rounded-3xl" +
                        (isLoading ? "" : " animate-toUpScale")
                      }
                      layout="fill"
                      alt=""
                    />
                  )}
                </div>
              </a>
            </div>
          </div>
        );
    }
  };
  return (
    <div className="relative">
      <div className="relative flex flex-col justify-between mb-12 sm:flex-row sm:items-end md:mb-16 text-neutral-900 dark:text-neutral-50">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Editor&#39;s pick{" "}
          </h3>
          <span className="block mt-2 text-base font-normal md:mt-3 sm:text-xl text-neutral-500 dark:text-neutral-400">
            Discover the most outstanding articles in all topics of life.
          </span>
        </div>
      </div>
      {renderStepBanner(step)}
    </div>
  );
};

export default BannerComponent;
