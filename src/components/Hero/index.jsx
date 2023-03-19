import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFarm } from "src/hooks";
import { request } from "src/request";
import Select from 'react-select';

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { onProductChange, products } = useFarm();
  const [isMapView, setIsMapView] = useState(true);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (location.pathname.includes("search")) {
      setIsMapView(false);
    } else {
      setIsMapView(true);
    }
    getAllCategories();
  }, []);

  useEffect(() => {
    if (location.pathname.includes("search")) {
      if (product == "" || category == "") {
        if (!products?.length > 0) {
          handleSearch();
        }
      }
    }
  }, []);

  const handleMapVisit = () => {
    navigate("/");
  };

  const handleListVist = () => {
    navigate("/search");
  };

  const handleSearch = async () => {
    await getAllProducts();
    !location.pathname.includes("search") && navigate("/search");
  };

  const getAllProducts = async () => {
    const response =
      product == "" && category == ""
        ? await request("GET", `/v1/products/total/search`)
        : await request(
            "GET",
            `/v1/products/total/search?product=${
              product.length > 0 ? product : category
            }`
          );
    onProductChange(response);
  };

  const getAllCategories = async () => {
    const response = await request("GET", `/v1/categories`)
    console.log(response)
    setCategories(response.results);
  };

  return (
    <div class="bg-white text-center pt-[60px]">
      <div class="w-full">
        <h1 class="text-xl font-semi uppercase text-[#A8ABAD]">
          Find your nearest market
        </h1>

        <h1 class="text-4xl font-bold text-[#275847]">
          Fresh Produce has never been closer
        </h1>
        <div className="pt-[50px] flex justify-between">
          <div className="flex gap-12">
            <input
              type="text"
              placeholder="Search by Produce (Fruits, Vegetables, Honey, wine...)"
              class="input input-bordered w-[600px]"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
            {categories && categories.length > 0 &&
            <Select
              options={categories.map(category => ({value: category.name, label: category.name}))}
              value={category && { value: category, label: category }}
              onChange={(selectedOption) => setCategory(selectedOption.value)}
              className="w-full mt-1"
            />}
          </div>

          <div className="flex gap-4">
            <button
              class="btn gap-2 bg-[#097435] border-none normal-case rounded-lg h-[40px]"
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

            {isMapView ? (
              <button
                class="btn gap-2 bg-[#097435] border-none normal-case rounded-lg h-[40px]"
                onClick={handleListVist}
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_213_1249)">
                    <path
                      d="M14.1428 7.57164C14.1428 12.5716 7.71422 16.8573 7.71422 16.8573C7.71422 16.8573 1.28564 12.5716 1.28564 7.57164C1.28564 5.86667 1.96294 4.23154 3.16853 3.02595C4.37412 1.82036 6.00925 1.14307 7.71422 1.14307C9.41918 1.14307 11.0543 1.82036 12.2599 3.02595C13.4655 4.23154 14.1428 5.86667 14.1428 7.57164Z"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.71439 9.71443C8.89786 9.71443 9.85725 8.75504 9.85725 7.57157C9.85725 6.3881 8.89786 5.42871 7.71439 5.42871C6.53092 5.42871 5.57153 6.3881 5.57153 7.57157C5.57153 8.75504 6.53092 9.71443 7.71439 9.71443Z"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_213_1249">
                      <rect width="15.4286" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                List View
              </button>
            ) : (
              <button
                class="btn gap-2 bg-[#097435] border-none normal-case rounded-lg h-[40px]"
                onClick={handleMapVisit}
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_213_1249)">
                    <path
                      d="M14.1428 7.57164C14.1428 12.5716 7.71422 16.8573 7.71422 16.8573C7.71422 16.8573 1.28564 12.5716 1.28564 7.57164C1.28564 5.86667 1.96294 4.23154 3.16853 3.02595C4.37412 1.82036 6.00925 1.14307 7.71422 1.14307C9.41918 1.14307 11.0543 1.82036 12.2599 3.02595C13.4655 4.23154 14.1428 5.86667 14.1428 7.57164Z"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.71439 9.71443C8.89786 9.71443 9.85725 8.75504 9.85725 7.57157C9.85725 6.3881 8.89786 5.42871 7.71439 5.42871C6.53092 5.42871 5.57153 6.3881 5.57153 7.57157C5.57153 8.75504 6.53092 9.71443 7.71439 9.71443Z"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_213_1249">
                      <rect width="15.4286" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Map View
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
