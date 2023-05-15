import React from "react";

export default function Github() {
  return (
    <section id="github" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="text-center">
            <div className="w-10 inline-block mb-4">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./github.svg"
                width="100px"
                height="100px"
              />
            </div>
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Github
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <a href="https://github.com/randomnewb">
              <u> View my repositories</u>
            </a>{" "}
            for a closer look at what I've been working on and my code.
          </p>
        </div>
      </div>
    </section>
  );
}
