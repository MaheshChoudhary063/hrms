import React from "react";

function Modal({ title, children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        "fixed inset-0 z-50 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out " +
        (isOpen
          ? "translate-x-0 opacity-100 transition-opacity duration-500  "
          : "translate-x-full opacity-0 transition-all delay-500")
      }
    >
      <section
        className={
          "delay-400 absolute top-5 bottom-5 right-5 rounded-2xl w-screen max-w-md transform bg-white shadow-xl transition-all duration-500 ease-in-out" +
          (isOpen ? "translate-x-0" : " translate-x-full")
        }
      >
        <article className="relative flex h-full w-screen max-w-md flex-col space-y-6 overflow-y-scroll pb-10">
          {title && <header className="p-4 text-lg font-bold">{title}</header>}
          {children}
        </article>
      </section>
      <section
        className=" h-full w-screen cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

export default Modal;
