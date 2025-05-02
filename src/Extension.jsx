import { ExtensionCards } from "./ExtensionCards";

export function Extension() {
  const details = [
    {
      src: "/images/logo-chrome.svg",
      title: "Add to Chrome",
      text: " Minimum version 62",
    },
    {
      src: "/images/logo-firefox.svg",
      title: "Add to Firefox",
      text: " Minimum version 55",
    },
    {
      src: "/images/logo-opera.svg",
      title: "Add to Opera",
      text: " Minimum version 46",
    },
  ];
  return (
    <div className="h-[90vh] mt-[15rem] px-6 md:h-[80vh] md:mt-[22rem] md:px-16">
      <div>
        <h2 className="font-medium text-2xl  text-blue-950 text-center md:text-3xl">
          Download the extension
        </h2>
        <p className="mt-2 text-gray-500 text-center md:text-[1.23rem]">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="md:flex justify-center gap-12 mt-10">
        {details.map((item, i) => (
          <ExtensionCards
            key={i}
            src={item.src}
            title={item.title}
            text={item.text}
            className={i === 0 ? "" : i === 1 ? "md:mt-16" : "md:mt-32"}
          />
        ))}
      </div>
    </div>
  );
}
