import { useState } from "react";

export function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const features = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
  return (
    <div className=" px-6 text-center">
      <h3 className="font-medium text-2xl  text-blue-950">Features</h3>
      <p className="mt-4 text-gray-500">
        {" "}
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="features mt-8">
        {features.map((item, i) => (
          <div
            onClick={() => setActiveTab(i)}
            key={i}
            className={` cursor-pointer ${i === 0 ? "border-t-2" : ""}  border-b-2 border-gray-200`}
          >
            <p
              className={`text-gray-700 py-2 text-[1rem] ${activeTab === i ? "bookmark-features text-gray-950" : ""} `}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-20 relative cat">
        <div className="blue blue-right"></div>
        <img
          className="gt"
          src={`/images/illustration-features-tab-${activeTab + 1}.svg`}
          alt=""
          srcset="" />
      </div>
      {activeTab === 0 && (
        <div className="mt-8">
          <h2 className="font-medium text-2xl  text-blue-950">
            Bookmark in one click
          </h2>
          <p className="mt-2 text-gray-500 text-center">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
        </div>
      )}
      {activeTab === 1 && (
        <div className="mt-8">
          <h2 className="font-medium text-2xl  text-blue-950">
            Intelligent Search
          </h2>
          <p className="mt-2 text-gray-500 text-center">
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
        </div>
      )}
      {activeTab === 2 && (
        <div className="mt-8">
          <h2 className="font-medium text-2xl  text-blue-950">
            Share your bookmarks
          </h2>
          <p className="mt-2 text-gray-500 text-center">
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button
          </p>
        </div>
      )}
    </div>
  );
}
