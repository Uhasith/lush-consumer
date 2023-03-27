import React from "react";
import ReactDOM from "react-dom";

const Mailto = ({ email, subject, message, children }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(message) || ""}`}
    >
      {children}
    </a>
  );
};

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="bg-white my-[40px]  text-center">
      <div className="w-full">
        <h1 className="text-xl font-bold uppercase">
          Contact For More Informations
        </h1>
      </div>

      <div className="flex-wrap justify-around items-center gap-4 mt-[30px] bg-[#F7C35E] rounded-[3px] pt-8 pb-8">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex justify-center">
              {" "}
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div class="flex justify-center">
              {" "}
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
                value={subject}
                onChange={handleSubjectChange}
              />
            </div>
            <div class="flex justify-center">
              {" "}
              <input
                type="text"
                placeholder="Message"
                className="input input-bordered w-full"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <div class="flex justify-center">
              <Mailto email={email} subject={subject} message={message}>
                <button className="btn bg-[#097435] border-none normal-case rounded-lg h-[40px] w-[180px]">
                  Submit
                </button>
              </Mailto>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
