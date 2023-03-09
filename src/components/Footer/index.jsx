import Background from "../../assets/images/Background.png";

export const Footer = () => {
  return (
    <footer
      class="bg-[#3D4451] pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="container">
        <div class="flex -mx-4">
          <div class="w-full sm:w-1/2 lg:w-3/12 px-4">
            <div class="w-full mb-10">
              <h4 class=" text-white text-lg font-semibold mb-9">
                LUSH FARMER
              </h4>
              <div class="flex items-center mb-6">
                <a
                  href="#"
                  class="
                         w-8
                         h-8
                         flex
                         items-center
                         justify-center
                         rounded-full
                         border border-[#E5E5E5]
                          text-white
                         hover:text-white hover:bg-[#CF6A6A] hover:border-[#CF6A6A]
                         mr-3
                         sm:mr-4
                         lg:mr-3
                         xl:mr-4
                         "
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    class="fill-current"
                  >
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  class="
                         w-8
                         h-8
                         flex
                         items-center
                         justify-center
                         rounded-full
                         border border-[#E5E5E5]
                          text-white
                         hover:text-white hover:bg-[#CF6A6A] hover:border-[#CF6A6A]
                         mr-3
                         sm:mr-4
                         lg:mr-3
                         xl:mr-4
                         "
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    class="fill-current"
                  >
                    <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  class="
                         w-8
                         h-8
                         flex
                         items-center
                         justify-center
                         rounded-full
                         border border-[#E5E5E5]
                          text-white
                         hover:text-white hover:bg-[#CF6A6A] hover:border-[#CF6A6A]
                         mr-3
                         sm:mr-4
                         lg:mr-3
                         xl:mr-4
                         "
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    class="fill-current"
                  >
                    <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                  </svg>
                </a>
              </div>
              <p class="text-base  text-white">&copy; 2022 by Lush Farmers</p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
            <div class="w-full mb-10">
              <h4 class="text-white text-lg font-semibold mb-9">Company</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
            <div class="w-full mb-10">
              <h4 class=" text-white text-lg font-semibold mb-9">Company</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    Success History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    Setting & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="divider lg:divider-horizontal bg-gray" />

          <div
            class="px-4"
            style={{
              width: "auto",
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
            }}
          >
            <h3 class="text-white font-bold">Subscribe Now</h3>
            <h3 class="text-white">
              Would like to get more details about lush farmer
            </h3>
            <div class="form-control w-full">
              <div class="input-group w-[400px]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="input input-bordered bg-transparent w-[450px] border border-white"
                />
                <button class="btn btn-square bg-[#F7C35E] border-none">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.9084 0.414096C17.8282 0.34674 17.7142 0.331112 17.6176 0.374074L0.155693 8.15011C0.0616842 8.19199 0.00114611 8.28189 1.60703e-05 8.38122C-0.00111397 8.48055 0.057433 8.57169 0.150527 8.61547L3.6 10.1075C3.69062 10.1502 10.8 6.55938 10.8 6.55938L6.43411 11.2471C6.34792 11.3397 6.3 11.4614 6.3 11.5879V15.076C6.3 15.5262 6.84822 15.7471 7.1603 15.4227L9.44099 13.0524L13.0421 14.7992C13.1125 14.8315 13.194 14.8328 13.2655 14.803C13.337 14.7731 13.3915 14.7151 13.4148 14.6438L17.9876 0.685225C18.0196 0.587749 17.9884 0.481453 17.9084 0.414096Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute top-10 right-10 z-[-1]">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
