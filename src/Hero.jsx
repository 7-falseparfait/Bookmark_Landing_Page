import { Button } from "./Button";

export function Hero() {
  return (
    <div className="mt-8 px-6 h-[100vh] md:flex flex-row-reverse justify-between md:pr-0 md:px-16 md:h-[85vh]">
      <div className="relative cat md:hidden">
        <div className="blue blue-left"></div>
        <img src="images/illustration-hero.svg" alt="" srcset="" />
      </div>
      <div className="hidden relative md:block w-[48%]">
        <div className="bat">
          <img src="images/illustration-hero.svg" alt="" srcset="" />
        </div>
        <div className="deskBlue desk-right"></div>
      </div>
      <div className="mt-28 w- full md:w-[45%] md:mt-0 md:place-content-center">
        <h2 className="text-3xl font-medium text-center text-blue-950 md:text-6xl md:text-left">
          A Simple Bookmark Manager
        </h2>
        <p className="mt-4 text-center text-gray-500 md:text-[1.23rem] md:text-left md:mt-8">
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8 md:justify-start">
          <Button className="xs:w-[47%] xs:text-[0.653rem] md:text-[1.2rem]">
            Get it on Chrome
          </Button>
          <Button
            variant="secondary"
            className="xs:w-[47%] shadow-md text-[0.653rem] md:text-[1.2rem]"
          >
            Get it on Firefox
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
