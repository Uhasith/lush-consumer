import { useState } from "react";

const DynamicSearch = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="flex gap-6">
      <input
        type="text"
        placeholder="Search by Produce (Fruits, Vegetables, Honey, wine...)"
        class="input input-bordered w-[440px]"
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button
        class="btn flex gap-2 bg-[#097435] border-none normal-case rounded-lg"
        onClick={handleSearch}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5316 14.5735L11.7188 10.6129C12.6991 9.449 13.2362 7.98455 13.2362 6.45999C13.2362 2.89801 10.3346 0 6.76814 0C3.20169 0 0.300049 2.89801 0.300049 6.45999C0.300049 10.022 3.20169 12.92 6.76814 12.92C8.10703 12.92 9.38293 12.5167 10.4738 11.751L14.3156 15.7416C14.4761 15.9082 14.6921 16 14.9236 16C15.1426 16 15.3504 15.9166 15.5082 15.7649C15.8434 15.4428 15.8541 14.9085 15.5316 14.5735ZM6.76814 1.68522C9.40431 1.68522 11.5489 3.82712 11.5489 6.45999C11.5489 9.09286 9.40431 11.2348 6.76814 11.2348C4.13197 11.2348 1.98738 9.09286 1.98738 6.45999C1.98738 3.82712 4.13197 1.68522 6.76814 1.68522Z"
            fill="#EEEEEE"
          />
        </svg>
        Search
      </button>
    </div>
  );
};

export default DynamicSearch;
