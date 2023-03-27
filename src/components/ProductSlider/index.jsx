import { Scrollbars } from 'react-custom-scrollbars-2';


const Search = ({ isSearch, title }) => {
  const ProductSlider = () => {
    return [1, 2, 3, 4].map((result) => (


<>

      {/* ////////////////////////////////////////////////////////////////// */}
      <div className="w-full bg-white border border-gray-200 rounded-lg ">
      <img
          src="https://i.ibb.co/m0DqT0x/image-167-1.png"
          class="rounded-lg"
          width={"100%"}
          alt="Shoes"
        />
        <div className="p-5">
        <h2 class="text-sm font-bold">€99</h2>
          <a href="#">
            <h5 className="mb-2 font-bold tracking-tight"> Trethowan's Dary and Puxton Court Farm</h5>
          </a>


          
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////// */}

  

</>

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

<Scrollbars style={{ width: "100%", height: 400}}>

        <div class="flex mt-[40px]" style={{ columnGap: "2rem" }}>
          <ProductSlider />
        </div>
        </Scrollbars>
        <hr class="mt-10" />
      </div>
    </div>
  );
};

export default Search;
