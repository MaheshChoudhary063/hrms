import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    setAtTop(window.pageYOffset <= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div
        className={`fixed inset-x-0 z-50 mx-auto mt-4 w-full max-w-2xl transform rounded-full px-8 py-4 transition-all duration-1000 ease-in-out ${
          atTop
            ? "max-w-2xl"
            : "max-w-4xl bg-brand-500 bg-opacity-90 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex w-full flex-col p-2 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-row items-center justify-between">
            <span
              className={`font-bold uppercase tracking-tighter ${
                atTop
                  ? "text-navy-700 dark:text-white"
                  : "text-navy-700 dark:text-white"
              }`}
            >
              BitWitT
            </span>
            <button
              className="focus:outline-none md:hidden"
              onClick={() => setOpen(!open)}
            >
              {/* SVG Burger icon */}
              <svg
                className={`h-6 w-6 ${open ? "text-white" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <nav
            className={`flex-grow flex-col gap-8 ${
              open ? "flex" : "hidden"
            } justify-end pb-4 md:flex md:flex-row md:pb-0 lg:ml-auto`}
          >
            <a
              href="https://bitwittechno.com/"
              className={`text-black ${
                atTop
                  ? "text-navy-700 dark:text-white"
                  : "text-navy-700 dark:text-white"
              }`}
            >
              About
            </a>
            <a
              href="https://bitwittechno.com/blogs/"
              className={`text-black ${
                atTop
                  ? "text-navy-700 dark:text-white"
                  : "text-navy-700 dark:text-white"
              }`}
            >
              Blog
            </a>
            <Link
              className={`text-black ${
                atTop
                  ? "text-navy-700 dark:text-white"
                  : "text-navy-700 dark:text-white"
              }`}
              to="/auth/sign-in"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
}

export default Home;
