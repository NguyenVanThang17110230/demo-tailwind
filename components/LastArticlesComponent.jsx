import React, { useState } from "react";

const LastArticlesComponent = () => {
  const [tab, setTab] = useState("All");
  const listTab = ["All", "Toys", "Sports", "Women"];
  return (
    
      <div className="relative pt-32">
        <div className="relative flex flex-col mb-8">
          <div className="relative flex flex-col justify-between mb-12 sm:flex-row sm:items-end md:mb-16 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold md:text-4xl">
                Latest Articles{" "}
              </h3>
              <span className="block mt-2 text-base font-normal md:mt-3 sm:text-xl text-neutral-500 dark:text-neutral-400">
                Discover the most outstanding articles in all topics of life.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <nav className="relative flex w-full overflow-x-auto text-sm md:text-base">
              <ul className="flex sm:space-x-2">
                {listTab.map((data, index) => (
                  <li className="relative flex-shrink-0" key={index}>
                    <button
                      className={
                        "block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition-all duration-150" +
                        (data === tab ? " bg-green-800 !text-white" : "")
                      }
                      onClick={() => setTab(data)}
                    >
                      {data}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <span className="flex-shrink-0 invisible sm:visible sm:block">
              <a
                href="#"
                className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-slate-700/60 !leading-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              >
                <span className="mr-4">View All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-right"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <line x1={13} y1={18} x2={19} y2={12} />
                  <line x1={13} y1={6} x2={19} y2={12} />
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:gap-8">
            <div className="group relative flex flex-col overflow-hidden h-full border rounded-3xl border-slate-400 transition-all duration-200 dark:border-slate-800 hover:bg-[#1f2937]">
              <span className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden z-0">
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <a href="#" className="absolute inset-0">
                      <div className="absolute inset-0">
                        <img
                          src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-268533-1.jpeg"
                          className="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </span>
              <div className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300">
                <div>
                  <button
                    aria-label="facebook"
                    className="hover:opacity-70"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <svg viewBox="0 0 64 64" width={24} height={24}>
                      <circle cx={32} cy={32} r={31} fill="#3b5998" />
                      <path
                        d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <button
                    aria-label="twitter"
                    className="hover:opacity-70"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <svg viewBox="0 0 64 64" width={24} height={24}>
                      <circle cx={32} cy={32} r={31} fill="#00aced" />
                      <path
                        d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <button
                    aria-label="telegram"
                    className="hover:opacity-70"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <svg viewBox="0 0 64 64" width={24} height={24}>
                      <circle cx={32} cy={32} r={31} fill="#37aee2" />
                      <path
                        d="m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <button
                    aria-label="whatsapp"
                    className="hover:opacity-70"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <svg viewBox="0 0 64 64" width={24} height={24}>
                      <circle cx={32} cy={32} r={31} fill="#25D366" />
                      <path
                        d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <a href="#" className="absolute inset-0" />
              <div className="flex flex-col p-4 sm:p-5">
                <div className="space-y-3">
                  <div className="flow-root">
                    <div className="flex flex-wrap -my-1 space-x-2 ">
                      <a
                        href="#"
                        className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-blue-800 bg-blue-100 hover:bg-blue-800"
                      >
                        Sports
                      </a>
                    </div>
                  </div>
                  <h3 className="block text-lg font-semibold transition-colors text-neutral-900 dark:text-neutral-100 sm:text-2xl">
                    <a href="#" className=" group-hover:text-white">
                      Autem molestiae mollitia delectus et
                    </a>
                  </h3>
                  <div className="block text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-gray-400">
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </div>
                </div>
                <a href="#" className="relative inline-flex items-center my-4">
                  <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 overflow-hidden text-base font-semibold uppercase rounded-full shadow-inner text-neutral-100">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/bqe0j0b26rq-1-e1633222495376-150x150.jpg"
                      alt=""
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-medium truncate text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white group-hover:text-white">
                      Blaze
                    </h4>
                    <span className="flex items-center mt-1 text-xs truncate text-neutral-500 dark:text-neutral-400 group-hover:text-gray-400">
                      <span>Sep 18, 2021</span>
                      <span className="mx-1 transition-opacity lg:inline ">
                        ·
                      </span>
                      <span className="truncate transition-opacity lg:inline ">
                        <span /> <span> 3</span> <span>minutes</span>
                      </span>
                    </span>
                  </div>
                </a>
                <div className="flex items-center justify-between mt-auto">
                  <div className="relative flex items-center space-x-2">
                    <div className="relative group-hover:text-white">
                      <button className="border border-slate-500 relative flex cursor-pointer items-center justify-center rounded-full px-3 py-1 transition-all duration-300 dark:bg-[#1f2937] dark:border-transparent dark:group-hover:border-slate-200">
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
                        <span className="ml-1">32</span>
                      </button>
                    </div>
                    <a
                      href="#"
                      className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs focus:outline-none"
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
                        1
                      </span>
                    </a>
                  </div>
                  <div className="relative inline-block text-left">
                    <button
                      className="relative flex items-center justify-center transition-colors duration-300 rounded-full focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
                      title="Share with"
                      id="headlessui-menu-button-:rv:"
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
                          defaultValue="https://ncmaz.chisnghiax.com/autem-molestiae-mollitia-delectus-et/"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 2xl:gap-8">
              <div className="border rounded-3xl border-slate-400 dark:border-slate-800 group relative flex flex-row items-center p-4 transition-all duration-200 hover:bg-[#1f2937] mb-2.5 sm:mb-0">
                <a href="#" className="absolute inset-0 z-0" />
                <div className="flex flex-col flex-grow">
                  <div className="space-y-1.5 sm:space-y-3 mb-2 sm:mb-4">
                    <div className="flow-root">
                      <div className="flex flex-wrap -my-1 space-x-2 ">
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-blue-800 bg-blue-100 hover:bg-blue-800"
                        >
                          Health
                        </a>
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-blue-800 bg-blue-100 hover:bg-blue-800"
                        >
                          Sports
                        </a>
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-indigo-800 bg-indigo-100 hover:bg-indigo-800"
                        >
                          Travel
                        </a>
                      </div>
                    </div>
                    <h3 className="block text-sm font-semibold sm:text-base group-hover:text-white">
                      <a href="#">
                        Animi veniam dolores dicta sint quos architecto
                      </a>
                    </h3>
                    <div className="inline-flex items-center text-xs leading-none text-neutral-800 dark:text-neutral-200">
                      <a
                        href="#"
                        className="relative flex items-center space-x-2 "
                      >
                        <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-5 h-5 overflow-hidden text-xs font-semibold uppercase rounded-full shadow-inner text-neutral-100 sm:h-7 sm:w-7 sm:text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/bqe0j0b26rq-1-e1633222495376-150x150.jpg"
                            alt=""
                          />
                        </div>
                        <span className="block py-1 font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white group-hover:text-white">
                          Blaze
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium group-hover:text-gray-400">
                        ·
                      </span>
                      <span className="font-normal text-neutral-500 dark:text-neutral-400 group-hover:text-gray-400">
                        Sep 26, 2021
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between mt-auto">
                    <div className="relative flex items-center space-x-2">
                      <div className="relative group-hover:text-white">
                        <button className="border border-slate-500 relative flex cursor-pointer items-center justify-center rounded-full px-3 py-1 transition-all duration-300 dark:bg-[#1f2937] dark:border-transparent dark:group-hover:border-slate-200">
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
                          <span className="ml-1">123</span>
                        </button>
                      </div>
                      <a
                        href="#"
                        className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                        title="Comments"
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
                          1
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <span className="group-hover:text-gray-400">
                        <span>Reading Time:</span> <span>3</span>{" "}
                        <span>minutes</span>
                      </span>

                      <div className="relative inline-block text-left">
                        <button
                          className="relative flex items-center justify-center transition-colors duration-300 rounded-full focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
                          title="Share with"
                          id="headlessui-menu-button-:r10:"
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
                            <input type="text" hidden className="hidden" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="relative flex-shrink-0 block w-20 h-20 ml-5 overflow-hidden sm:w-40 sm:h-full rounded-2xl "
                >
                  <div className="absolute inset-0">
                    <img
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5874628-1.jpeg"
                      className="object-cover w-full h-full"
                      alt="Animi veniam dolores dicta sint quos architecto"
                    />
                  </div>
                  <span className="absolute bottom-1 left-1">
                    <div />
                  </span>
                </a>
              </div>
              <div className="border rounded-3xl border-slate-400 dark:border-slate-800 relative flex group flex-row items-center p-4 transition-all duration-200 hover:bg-[#1f2937] mb-2.5 sm:mb-0">
                <a href="" className="absolute inset-0 z-0" />
                <div className="flex flex-col flex-grow">
                  <div className="space-y-1.5 sm:space-y-3 mb-2 sm:mb-4">
                    <div className="flow-root ">
                      <div className="flex flex-wrap -my-1 space-x-2 ">
                        <a
                          href=""
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-blue-800 bg-blue-100 hover:bg-blue-800"
                        >
                          Sports
                        </a>
                        <a
                          href=""
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-gray-800 bg-gray-100 hover:bg-gray-800"
                        >
                          Toys
                        </a>
                        <a
                          href=""
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                        >
                          Videos
                        </a>
                      </div>
                    </div>
                    <h3 className="block text-sm font-semibold sm:text-base group-hover:text-white">
                      <a href="#">
                        Suscipit repellat voluptas consequatur omnis
                      </a>
                    </h3>
                    <div className="inline-flex items-center text-xs leading-none text-neutral-800 dark:text-neutral-200">
                      <a
                        href="#"
                        className="relative flex items-center space-x-2 "
                      >
                        <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-5 h-5 overflow-hidden text-xs font-semibold uppercase rounded-full shadow-inner text-neutral-100 sm:h-7 sm:w-7 sm:text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780-150x150.jpg"
                            alt="pcormier"
                          />
                        </div>
                        <span className="block py-1 font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white group-hover:text-white">
                          Frederique
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium group-hover:text-gray-400">
                        ·
                      </span>
                      <span className="font-normal text-neutral-500 dark:text-neutral-400 group-hover:text-gray-400">
                        Sep 24, 2021
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between mt-auto">
                    <div className="relative flex items-center space-x-2">
                      <div className="relative group-hover:text-white">
                        <button className="border border-slate-500 relative flex cursor-pointer items-center justify-center rounded-full px-3 py-1 transition-all duration-300 dark:bg-[#1f2937] dark:border-transparent dark:group-hover:border-slate-200">
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
                          <span className="ml-1">323</span>
                        </button>
                      </div>
                      <a
                        href="#"
                        className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                        title="Comments"
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
                          0
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <span className="group-hover:text-gray-400">
                        <span /> <span> 3</span> <span>minutes</span>
                      </span>

                      <div className="relative inline-block text-left">
                        <button
                          className="relative flex items-center justify-center transition-colors duration-300 rounded-full focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
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
                            <input type="text" hidden className="hidden" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="relative flex-shrink-0 block w-20 h-20 ml-5 overflow-hidden sm:w-40 sm:h-full rounded-2xl "
                >
                  <div className="absolute inset-0">
                    <img
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/surfer-wave-sunset-the-indian-ocean-390051-1-768x443.jpeg"
                      className="object-cover w-full h-full"
                      alt="Suscipit repellat voluptas consequatur omnis"
                    />
                  </div>
                  <span className="absolute bottom-1 left-1">
                    <div>
                      <span className="flex items-center justify-center text-xl text-white border border-white rounded-full bg-neutral-900 bg-opacity-60 h-7 w-7">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                          />
                        </svg>
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="border rounded-3xl border-slate-400 dark:border-slate-800 relative flex group flex-row items-center p-4 transition-all duration-200 hover:bg-[#1f2937] mb-2.5 sm:mb-0">
                <a href="#" className="absolute inset-0 z-0" />
                <div className="flex flex-col flex-grow">
                  <div className="space-y-1.5 sm:space-y-3 mb-2 sm:mb-4">
                    <div className="flow-root">
                      <div className="flex flex-wrap -my-1 space-x-2 ">
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-blue-800 bg-blue-100 hover:bg-blue-800"
                        >
                          Sports
                        </a>
                        <a
                          href="#"
                          className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1  text-purple-800 bg-purple-100 hover:bg-purple-800"
                        >
                          Women
                        </a>
                      </div>
                    </div>
                    <h3 className="block text-sm font-semibold sm:text-base group-hover:text-white">
                      <a href="#">Expedita similique ut voluptatum enim</a>
                    </h3>
                    <div className="inline-flex items-center text-xs leading-none text-neutral-800 dark:text-neutral-200">
                      <a
                        href="#"
                        className="relative flex items-center space-x-2 "
                      >
                        <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-5 h-5 overflow-hidden text-xs font-semibold uppercase rounded-full shadow-inner text-neutral-100 sm:h-7 sm:w-7 sm:text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/n4kewlkfozw-1-e1633222521399-150x150.jpg"
                            alt="dennis.huel"
                          />
                        </div>
                        <span className="block py-1 font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white group-hover:text-white">
                          Leone
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium group-hover:text-gray-400">
                        ·
                      </span>
                      <span className="font-normal text-neutral-500 dark:text-neutral-400 group-hover:text-gray-400">
                        Sep 12, 2021
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between mt-auto">
                    <div className="relative flex items-center space-x-2">
                      <div className="relative group-hover:text-white">
                        <button className="border border-slate-500 relative flex cursor-pointer items-center justify-center rounded-full px-3 py-1 transition-all duration-300 dark:bg-[#1f2937] dark:border-transparent dark:group-hover:border-slate-200">
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
                          <span className="ml-1">3</span>
                        </button>
                      </div>
                      <a
                        href="#"
                        className="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                        title="Comments"
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
                          1
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <span className="group-hover:text-gray-400">
                        <span /> <span>3</span> <span>minutes</span>
                      </span>
                      <div className="relative inline-block text-left">
                        <button
                          className="relative flex items-center justify-center transition-colors duration-300 rounded-full focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 h-7 w-7 sm:h-8 sm:w-8"
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
                              defaultValue="#"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative flex-shrink-0 block w-20 h-20 ml-5 overflow-hidden sm:w-40 sm:h-full rounded-2xl "
                >
                  <div className="absolute inset-0">
                    <img
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-768x512.jpeg"
                      className="object-cover w-full h-full"
                      alt="Expedita similique ut voluptatum enim"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default LastArticlesComponent;
