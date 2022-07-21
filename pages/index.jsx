import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import AvatarImage from "../public/images/test-avt.jpg";
import Project1 from "../public/images/demo-tw-1.png";
import Project2 from "../public/images/demo-tw-2.jpeg";
import Project3 from "../public/images/demo-tw-3.png";
import Project4 from "../public/images/demo-tw-4.png";
import Project5 from "../public/images/demo-tw-5.png";
import Project6 from "../public/images/demo-tw-6.jpg";

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme();
  const renderChangeTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
              className="fill-transparent"
            />
            <path
              d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
              className="fill-slate-200"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
              className="fill-slate-200"
            />
          </svg>
        </div>
      );
    } else {
      return (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              className="stroke-slate-800"
            />
            <path
              d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
              className="stroke-slate-800"
            />
          </svg>
        </div>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen h-full">
        {/* menu */}
        <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-slate-100/60 dark:bg-transparent">
          <div className="max-w-8xl mx-auto">
            <div className="py-4 mx-4 md:px-10">
              <div className="relative flex items-center">
                <div className="font-bold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-tailwind mr-1"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="#38BDF8"
                    fill="#38BDF8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                  </svg>
                  Demo
                </div>
                <div className="relative lg:flex items-center ml-auto">
                  <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                    <ul className="flex space-x-8">
                      <li>
                        <a
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                          href="#"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                    <label className="sr-only" id="headlessui-listbox-label-3">
                      Theme
                    </label>
                    <button
                      type="button"
                      id="headlessui-listbox-button-4"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-undefined"
                    >
                      {renderChangeTheme()}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m19 19-3.5-3.5" />
                    <circle cx={11} cy={11} r={6} />
                  </svg>
                </button>
                <div className="ml-2 -my-1 lg:hidden">
                  <button
                    type="button"
                    className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <span className="sr-only">Navigation</span>
                    <svg width={24} height={24} fill="none" aria-hidden="true">
                      <path
                        d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* baner */}
        <div id="home" name="home">
          <div className="flex flex-wrap justify-center items-center text-center h-auto py-10 relative md:justify-start md:items-start md:h-[94vh] md:mx-10 md:py-20">
            <div className="w-full mx-[1vw] bg-[#e6dace] rounded-xl md:w-[38%] md:h-full md:mx-0"></div>
            <div className="w-3/4 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-1/2 sm:grid sm:grid-cols-2">
              <div className="bg-[#F4ECE6] flex flex-col justify-center items-center pt-[2.2vw] text-black h-full shadow-2xl">
                <div className="w-48 h-48 md:w-[13vw] md:h-[13vw] relative">
                  <Image
                    src={AvatarImage}
                    alt="heroImage"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full block rounded-full"
                  />
                </div>
                <div className="font-black mt-2 text-2xl">Thang</div>
                <div className="font-black text-2xl">Nguyen</div>
                <hr className="bg-black w-1/6 md:w-1/4 mt-2 border-2 border-blue-800" />
                <div className="text-xl mt-2">FE Developer</div>
                <div className="w-full bg-white py-3 flex items-center justify-center mt-2">
                  <Link href="fb.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-facebook"
                      width={26}
                      height={26}
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="#000000"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </Link>
                  <Link href="fb.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-twitter mx-2"
                      width={26}
                      height={26}
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#000000"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                  </Link>
                  <Link href="fb.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-slack"
                      width={26}
                      height={26}
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#000000"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" />
                      <path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" />
                      <path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" />
                      <path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center h-full py-5 px-8 shadow-2xl md:items-start md:px-0 md:pl-20 md:py-0">
                <h1 className="font-bold text-7xl text-left mb-5">Hello!</h1>
                <p className="text-left font-normal font mb-5 flex-wrap">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis aperiam placeat molestiae atque tempore perspiciatis
                  laboriosam quasi pariatur, vitae sequi veritatis veniam rerum,
                  quos consectetur commodi rem totam voluptatum? Hic!
                </p>
                <a
                  href="#"
                  className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
                >
                  See My Portfolio !
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ex */}
        <div id="services" name="services">
          <div className="w-full h-auto flex flex-col justify-center items-center py-20">
            <p className="text-sm uppercase text-gray-400">My Skills</p>
            <h1 className="text-indigo-900 text-6xl font-bold text-center">
              My Expertise
            </h1>
            <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
              <div className="flex flex-col justify-center items-center border rounded-lg py-7 ease-in-out shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                {/* first block */}
                <div className="flex justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-tinder"
                    width={44}
                    height={44}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffec00"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" />
                  </svg>
                  <h2 className="text-xl text-indigo-600 font-semibold">
                    Demo
                  </h2>
                </div>
                <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                </p>
              </div>

              {/* second block */}
              <div className="flex flex-col justify-center items-center border rounded-lg py-7 ease-in-out shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                <div className="flex justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-tinder"
                    width={44}
                    height={44}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fd0061"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" />
                  </svg>
                  <h2 className="text-xl text-indigo-600 font-semibold">
                    Demo
                  </h2>
                </div>
                <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                </p>
              </div>
            </div>

            {/* second grid */}
            <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
              <div className="flex flex-col justify-center items-center border rounded-lg py-7 ease-in-out shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                {/* first block */}
                <div className="flex justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-tinder"
                    width={44}
                    height={44}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#00b341"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" />
                  </svg>
                  <h2 className="text-xl text-indigo-600 font-semibold ">
                    Demo
                  </h2>
                </div>
                <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                </p>
              </div>

              {/* second block */}
              <div className="flex flex-col justify-center items-center border rounded-lg py-7 ease-in-out shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                <div className="flex justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-tinder"
                    width={44}
                    height={44}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#00abfb"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" />
                  </svg>
                  <h2 className="text-xl text-indigo-600 font-semibold">
                    Demo
                  </h2>
                </div>
                <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis aliquid fuga, asperiores voluptas expedita nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project */}
        <div id="work" name="work">
          <div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
            <p className="text-sm uppercase text-gray-400">Portfolio</p>
            <h1 className="text-indigo-900 text-6xl font-bold text-center">
              All Creative Works
            </h1>
            <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
              <div className="rounded-lg w-80 h-60 shadow-xl relative">
                <Image
                  src={Project1}
                  alt="one"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded-lg cursor-pointer"
                />
              </div>
              <div className="rounded-lg w-80 h-60 shadow-xl relative">
                <Image
                  src={Project2}
                  alt="two"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded-lg cursor-pointer"
                />
              </div>
              <div className="rounded-lg w-80 h-60 shadow-xl relative">
                <Image
                  src={Project3}
                  alt="three"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
              <div className="rounded-lg w-80 h-60 shadow-xl relative">
                <Image
                  src={Project4}
                  alt="four"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded-lg cursor-pointer"
                />
              </div>
              <div className="rounded-lg w-80 h-60 shadow-xl relative">
                <Image
                  src={Project5}
                  alt="five"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded-lg cursor-pointer"
                />
              </div>
              <div className="rounded-lg w-80 h-60 shadow-xl relative">
                <Image
                  src={Project6}
                  alt="six"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <h1 className="text-slate-900 dark:text-slate-100 text-base my-10">
              Discover all projects on{" "}
              <a href="#" className="text-blue-700 font-semibold">
                github{" "}
              </a>
            </h1>
          </div>
        </div>
        {/* contact */}
        {/* <div id="contact" name="contact">
          <div>
            <div className="w-full py-20 h-auto flex flex-col justify-center items-center">
              <p className="text-sm uppercase text-gray-400">Contact</p>
              <h1 className="text-indigo-900 text-6xl font-bold text-center">
                Contact
              </h1>

              <div className="flex justify-center text-center md:w-1/2 w-full my-5">
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  placeholder="xyz@gmail.com"
                  className="mt-5 pb-1 pl-8 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-indigo-900 h-10"
                />
                <button className="mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded-tr-lg rounded-br-lg hover:bg-black">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}