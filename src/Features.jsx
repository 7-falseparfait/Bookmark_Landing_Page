import { useState } from "react";
import { Button } from "./Button";

export function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const features = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
  return (
    <div className=" px-6 md:px-16 text-center md:mt-24 md:pl-0 md:h-[85vh]">
      <h3 className="font-medium text-2xl md:text-3xl  text-blue-950 md:ml-6">
        Features
      </h3>
      <p className="mt-4 text-gray-500 md:text-[1.23rem] md:ml-6">
        {" "}
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="features mt-8 md:flex items-center justify-center md:border-b-2 md:border-gray-200 gap-10 md:ml-16">
        {features.map((item, i) => (
          <div
            onClick={() => setActiveTab(i)}
            key={i}
            className={` cursor-pointer ${i === 0 ? "border-t-2 md:border-t-0" : ""}  border-b-2 border-gray-200 md:border-none`}
          >
            <p
              className={`text-gray-700 py-2 text-[1rem] ${activeTab === i ? "bookmark-features text-gray-950" : ""} md:text-[1.2rem] `}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className=" md:flex justify-between">
        <div className="mt-20 relative cat md:hidden">
          <div className="blue blue-right"></div>
          <img
            className="gt"
            src={`/images/illustration-features-tab-${activeTab + 1}.svg`}
            alt=""
            srcset=""
          />
        </div>
        <div className="hidden md:flex justify-between md:relative w-[50%] md:mt-8 left-0 md:h-[47rem] ">
          <div className="pl-6 absolute bottom-[10rem] right-0 h-[60%] w-[80%]">
            <img
            className="object-cover w-full h-full"
              src={`/images/illustration-features-tab-${activeTab + 1}.svg`}
              alt=""
              srcset=""
            />
          </div>
          <div className="deskBlue desk-left"></div>
        </div>

        {activeTab === 0 && (
          <div className="mt-8 md:w-[45%]  md:flex-col flex flex-col justify-center md:text-left">
            <h2 className="font-medium text-2xl  text-blue-950 md:text-5xl ">
              Bookmark in one click
            </h2>
            <p className="mt-2 text-gray-500 text-center md:text-[1.2rem] md:text-left md:mt-5">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <div className="hidden md:block mt-5">
              <Button>More Info</Button>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="mt-8 md:w-[43%]  md:flex-col flex flex-col justify-center md:text-left">
            <h2 className="font-medium text-2xl  text-blue-950 md:text-5xl md:text-left">
              Intelligent Search
            </h2>
            <p className="mt-2 text-gray-500 text-center md:text-[1.2rem] md:text-left md:mt-5">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <div className=" hidden md:block mt-5">
              <Button>More Info</Button>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="mt-8 md:w-[43%]  md:flex-col flex flex-col justify-center md:text-left">
            <h2 className="font-medium text-2xl  text-blue-950 md:text-5xl md:text-left">
              Share your bookmarks
            </h2>
            <p className="mt-2 text-gray-500 text-center md:text-[1.2rem] md:text-left">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button
            </p>
            <div className="hidden md:block mt-5">
              <Button>More Info</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
