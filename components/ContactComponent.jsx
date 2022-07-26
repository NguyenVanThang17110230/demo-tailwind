import React from "react";
import Link from "next/link";

const ContactComponent = () => {
  return (
    <div className="relative my-32">
      <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20 " />
      <div className="relative flex flex-col items-center py-16 lg:flex-row">
        <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
          <span className="text-xs font-medium tracking-wider uppercase text-neutral-400">
            supper change your planning powers
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl !mt-3">
            Become an author and share your great stories
          </h2>
          <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
            Become an author you can earn extra income by writing articles. Read
            and share new perspectives on just about any topic. Everyone’s
            welcome.
          </span>
          <Link href="#">
            <a className="relative inline-flex items-center justify-center h-auto px-4 py-3 mt-8 text-sm font-medium transition-colors bg-blue-700 rounded-full nc-Button focus:outline-none sm:text-base sm:px-6 disabled:bg-opacity-70 hover:bg-blue-800 text-neutral-50 ">
              Become an author
            </a>
          </Link>
        </div>
        <div className="flex-grow">
          <img
            className="max-w-full"
            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/BecomeAnAuthorImg.02703848-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
