import { Button } from "./Button";

export function Hero() {
  return (
    <div className="mt-8 px-6 h-[100vh]">
      <div className="relative cat">
        <div className="blue blue-left"></div>
        <img src="images/illustration-hero.svg" alt="" srcset="" />
      </div>
      <div className="mt-28">
        <h2 className="text-3xl font-medium text-center text-blue-950">
          A Simple Bookmark Manager
        </h2>
        <p className="mt-4 text-center text-gray-500">
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4 mt-8">
          <Button className="w-full"> Get it on Chrome </Button>
          <Button variant="secondary" className="w-full shadow-md">
            {" "}
            Get it on Firefox{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
