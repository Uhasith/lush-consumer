const Search = ({ isSearch, title }) => {
  const ProductSlider = () => {
    return [1, 2, 3, 4].map((result) => (
      <div class="card card-compact w-96 bg-base-100 shadow-none">
        <img
          src="https://i.ibb.co/m0DqT0x/image-167-1.png"
          class="rounded-lg"
          alt="Shoes"
        />
        <div class="card-body" style={{ padding: "16px 0px" }}>
          <h2 class="text-sm font-bold">€99</h2>
          <h2 class="pt-1 font-bold text-lg">
            Trethowan's Dary and Puxton Court Farm
          </h2>
          <div class="card-actions justify-start flex gap-3">
            <div class="flex gap-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1346 12V15L8.36064 12H2.25C1.42157 12 0.75 11.3284 0.75 10.5V3C0.75 2.17157 1.42157 1.5 2.25 1.5H12.75C13.5784 1.5 14.25 2.17157 14.25 3V10.5C14.25 11.3284 13.5784 12 12.75 12H11.1346Z"
                  fill="#BCBFC2"
                />
              </svg>

              <p class="text-sm text-[#939699]">309</p>
            </div>
            <div class="flex gap-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8391 2.96008C12.1701 2.21166 11.2807 1.7998 10.3346 1.7998C9.38831 1.7998 8.59423 2.21166 7.925 2.96008L7.49998 3.63896L7.075 2.96008C6.40597 2.21166 5.61164 1.7998 4.66557 1.7998C3.71953 1.7998 2.82982 2.21166 2.16086 2.96008C0.779712 4.5053 0.779712 7.01943 2.16086 8.56405L7.10991 13.3205C7.19083 13.4114 7.29157 13.467 7.39682 13.4884C7.43211 13.4962 7.46761 13.4998 7.50317 13.4998C7.64318 13.4998 7.78341 13.4401 7.89004 13.3205L12.8391 8.56405C14.2203 7.01943 14.2203 4.5053 12.8391 2.96008Z"
                  fill="#BCBFC2"
                />
              </svg>

              <p class="text-sm text-[#939699]">2,049</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div class="bg-white flex align-start gap-4">
      <div class="w-full">
        {isSearch && (
          <div class="form-control">
            <div class="input-group">
              <input
                type="text"
                placeholder="Farmer market near"
                class="input input-bordered w-[528px] border border-[#D2D4D7]"
              />

              <button class="btn btn-square bg-white border border-[#D2D4D7]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 8.59824L16.3079 2.29031C16.695 1.90323 17.3226 1.90323 17.7097 2.29031C18.0968 2.6774 18.0968 3.30499 17.7097 3.69208L11.4018 10L17.7097 16.3079C18.0968 16.695 18.0968 17.3226 17.7097 17.7097C17.3226 18.0968 16.695 18.0968 16.3079 17.7097L10 11.4018L3.69208 17.7097C3.30499 18.0968 2.6774 18.0968 2.29031 17.7097C1.90323 17.3226 1.90323 16.695 2.29031 16.3079L8.59824 10L2.29031 3.69208C1.90323 3.30499 1.90323 2.6774 2.29031 2.29031C2.6774 1.90323 3.30499 1.90323 3.69208 2.29031L10 8.59824Z"
                    fill="#BCBFC2"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {title && (
          <div className="mt-[40px]">
            <h2 className="font-bold text-[#262D33] text-xl">{title}</h2>
          </div>
        )}
        <div class="flex mt-[40px]" style={{ columnGap: "5rem" }}>
          <ProductSlider />
        </div>
        <hr class="mt-10" />
      </div>
    </div>
  );
};

export default Search;
