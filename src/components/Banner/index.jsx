import banner from "../../assets/images/banner.png";
const Banner = ({ data }) => {
  return (


    <>
    
    

    {/* ////////////////////////////  Banner  //////////////////////////// */}
    <div className=" w-full mobile-framerbanner">
        <div className="relative overflow-hidden rounded-lg shadow-lg ">

        <img src={banner} alt="banner-img" className="w-full object-cover" />

          <div className="absolute top-0 left-0 px-6 py-4">
          <div>
          <h1 className="text-[#255845] font-bold">{`${data?.firstName} ${data?.lastName}'s Farm`}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18ZM10 9V5C10 4.44772 9.55229 4 9 4C8.44771 4 8 4.44772 8 5V10C8 10.5523 8.44771 11 9 11H12C12.5523 11 13 10.5523 13 10C13 9.44771 12.5523 9 12 9H10Z"
                fill="#59AF59"
              />
            </svg>
            <h3 className="text-[#255845] font-semi">
              Everyday {data?.farm?.openEndTime}
            </h3>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9497 1.84277C14.4129 4.05679 14.6901 8.22556 12.5998 10.7307L7 18L1.4002 10.7307C-0.69014 8.22556 -0.412865 4.05679 2.05026 1.84277C4.78411 -0.614256 9.21627 -0.614256 11.9497 1.84277ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                fill="#59AF59"
              />
            </svg>

            <h3 className="text-[#255845] font-semi">
              {data?.farm?.address}
            </h3>
          </div>
        </div>
          </div>
        </div>
    
      
      </div>

    {/* ////////////////////////////  Banner  //////////////////////////// */}


    <div className="w-full max-h-fit desktop-framerbanner">
      <img src={banner} alt="banner-img" className="w-full object-cover" />
      <div
        className="flex flex-col gap-8 absolute top-[10rem] left-[6rem]"
        style={{
          width: "max-content",
        }}
      >
        <div>
          <h2 className="text-[#255845] font-bold text-[55px]">{`${data?.firstName} ${data?.lastName}'s Farm`}</h2>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18ZM10 9V5C10 4.44772 9.55229 4 9 4C8.44771 4 8 4.44772 8 5V10C8 10.5523 8.44771 11 9 11H12C12.5523 11 13 10.5523 13 10C13 9.44771 12.5523 9 12 9H10Z"
                fill="#59AF59"
              />
            </svg>
            <p className="text-[#255845] font-semi text-[18px]">
              Everyday {data?.farm?.openEndTime}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9497 1.84277C14.4129 4.05679 14.6901 8.22556 12.5998 10.7307L7 18L1.4002 10.7307C-0.69014 8.22556 -0.412865 4.05679 2.05026 1.84277C4.78411 -0.614256 9.21627 -0.614256 11.9497 1.84277ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                fill="#59AF59"
              />
            </svg>

            <p className="text-[#255845] font-semi text-[18px]">
              {data?.farm?.address}
            </p>
          </div>
        </div>


      </div>
    </div>
    </>

  );
};
export default Banner;
