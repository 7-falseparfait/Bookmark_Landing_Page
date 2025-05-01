import { useState } from "react";
import { Button } from "./Button";

export function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const FAQs = [
    {
      question: " What is Bookmark",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis",
    },
    {
      question: " How can I request a new browser?",
      answer:
        " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
    },
    {
      question: "Is there a mobile app? ",
      answer:
        " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulumdolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers? ",
      answer:
        " Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];
  function toggleFAQ(index) {
    setOpenIndex(index === openIndex ? null : index);
  }
  return (
    <div className="px-6 mt-24 md:w-[50%] md:flex flex-col place-self-center md:px-16">
      <h2 className="text-2xl font-medium text-center md:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 text-center mt-4 md:text-[1.23rem]">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="FAQs-section mt-10">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="faq-item py-4 cursor-pointer border-b border-gray-200 text-gray-500"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-[1rem] text-gray-900 md:text-[1.2rem]">{faq.question}</h4>
              <span>
                {openIndex === index ? (
                  <svg
                    className="transition-transform duration-200 rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="hsl(0, 94%, 66%)"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                ) : (
                  <svg
                    className="transition-transform duration-200 rotate-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="#5267DF"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                )}
              </span>
            </div>

            <div>
              {openIndex === index && (
                <p className="text-[0.88rem] mt-3 md:text-[1rem]">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-9">
          <Button>More Info</Button>
        </div>
      </div>
    </div>
  );
}
