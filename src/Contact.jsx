import { useState } from "react";
import validator from "validator";
import { Button } from "./Button";

export function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  function handleSubmit() {
    if (validator.isEmail(email)) {
      setError("");
    } else {
      setError("Whoops, make sure it's a valid email");
    }
  }
  return (
    <div className="contact-section bg-blue-600 text-white px-6 pt-12 pb-7 mt-14 text-center">
      <p className="text-xs tracking-[0.2rem]">35,000+ ALREADY JOINED</p>
      <h3 className="text-xl font-medium">
        Stay up-to-date with what we're doing
      </h3>
      <div
        className={`mt-5 rounded-bl-[0.12rem]  transition-all duration-600 ease-in-out rounded-br-[0.12rem] ${error ? "input-area" : ""}`}
      >
        <input
          onChange={handleEmailChange}
          value={email}
          className="w-full email py-3 px-2 border rounded-[0.27rem] text-black"
          placeholder="e-mail address..."
          type="text" />
        {error && (
          <p className="text-[0.7rem] text-left transition-all duration-600 ease-in-out w-full pl-1 pt-[0.16rem]">
            Whoops, make sure it's an email
          </p>
        )}
      </div>
      <div className="w-full mt-5">
        <Button variant="contact" onClick={handleSubmit} className="w-full">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
