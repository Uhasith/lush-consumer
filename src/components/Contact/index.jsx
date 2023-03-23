import React from 'react';
import ReactDOM from 'react-dom';

const Mailto = ({ email, subject,message,children}) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(message) || ''}`}>{children}</a>
  );
};

const Contact = () => {
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

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

        <div className="flex justify-around items-center p-[18px] gap-4 mt-[30px] bg-[#F7C35E] rounded-[3px]">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-[350px]"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-[350px]"
            value={subject}
            onChange={handleSubjectChange}
          />
          <input
            type="text"
            placeholder="Message"
            className="input input-bordered w-[350px]"
            value={message}
            onChange={handleMessageChange}
          />
          <Mailto email={email} subject={subject} message={message}>
            <button className="btn bg-[#097435] border-none normal-case rounded-lg h-[40px] w-[180px]">
              Submit
            </button>
          </Mailto>
        </div>
      </div>
    </div>
  );
};

export default Contact;
