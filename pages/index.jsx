import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import BannerComponent from "../components/BannerComponent";
import NewestComponent from "../components/NewestComponent";
import LastArticlesComponent from "../components/LastArticlesComponent";
import VideoComponent from "../components/VideoComponent";
import ContactComponent from "../components/ContactComponent";

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
        <title>Demo TailwindCSS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-slate-100/60 dark:bg-transparent">
        <div className="mx-auto max-w-8xl">
          <div className="py-4 mx-4 md:px-10">
            <div className="relative flex items-center">
              <div className="flex items-center font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 icon icon-tabler icon-tabler-brand-tailwind"
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
              <div className="relative flex items-center ml-auto">
                <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <Link href="/login">
                        <a className="hover:text-sky-500 dark:hover:text-sky-400">
                          Login
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center pl-6 ml-6 border-l border-slate-200 dark:border-slate-800">
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
            </div>
          </div>
        </div>
      </div>
      <main className="relative pt-10 overflow-hidden md:pt-16">
        <div className="absolute inset-x-0 top-0 z-0 flex flex-col min-h-0 py-32 pl-10 overflow-hidden">
          {" "}
          <span className="bg-[#ef233c] w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96" />{" "}
          <span className="bg-[#04868b] w-80 h-80 ml-10 -mt-10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96 nc-animation-delay-2000" />
        </div>
        <div className="relative">
          <div className="w-full md:w-[95%] lg:w-[90%] 2xl:w-[85%] mx-auto px-3">
            <BannerComponent />
            <NewestComponent />
            <LastArticlesComponent />
            <VideoComponent />
            <ContactComponent />
          </div>
        </div>
        <hr />
        <div className="w-full md:w-[95%] lg:w-[90%] 2xl:w-[85%] mx-auto px-3 py-6">&#169;Copyright 2022 TailwindCSS by ThangNV1 collab ThanhLD</div>
      </main>
    </div>
  );
}
