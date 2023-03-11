/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Flashsale.css";

const Flashsale = () => {
  return (
    <div>
      <a className="flashsale" href="#">
        <span>
          {" "}
          <small> Promotion </small>{" "}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 h-4"
        >
          <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
        </svg>
      </a>
    </div>
  );
};

export default Flashsale;
