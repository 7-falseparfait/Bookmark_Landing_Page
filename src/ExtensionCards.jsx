import { Button } from "./Button";

export function ExtensionCards({ src, title, text, className = "" }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="w-72 rounded-md mt-8 pt-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="fish py-10">
          <img src={src} alt="" />
          <h2 className="font-medium text-[1rem] mt-4 text-blue-950 text-center">
            {title}
          </h2>
          <p className="mt-3 text-[0.8rem] text-gray-500">{text}</p>
        </div>
        <img className="w-full" src="/images/bg-dots.svg" alt="" />
        <div className="flex justify-center items-center py-5">
          <Button className="w-[90%]">Add & Install Extension</Button>
        </div>
      </div>
    </div>
  );
}
