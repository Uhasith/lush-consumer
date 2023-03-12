import { useEffect, useState } from "react";
import _ from "lodash";
import { useFarm } from "src/hooks";
import { BASE_URL } from "src/constants";

const Search = ({ isSearch, title }) => {
  const { currentFarm } = useFarm();
  const [farmers, setFarmers] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setFarmers(currentFarm?.farmers);
  }, [currentFarm]);

  const ShortSearchList = () => {
    return farmers?.length > 0 ? (
      farmers?.map(({ id, profilePic, firstName, lastName }) => (
        <div>
          
          {/* //////////////////////////////////Update card////////////////////////////////////// */}

          <div
            className="w-64 sm:w-48 md:w-60 lg:w-300 h-80 max-h-full hover:max-h-screen bg-white rounded-lg shadow-lg p-6  hover:bg-green-100 ..."
            key={id}
          >
            <img
              className="h-48 max-h-full"
              src={
                profilePic
                  ? `${BASE_URL}/v1/documents/prof-pic/${profilePic}`
                  : `https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`
              }
              classNameName="rounded-lg"
              // height={100}
              alt="img"
            />

            <div className="text-center mt-5 py-4">
              <a className="font-bold text-xl mb-2 text-lg text-gray-600 hover:text-green-500 hover:text-xl" href={`/farmers/${id}`}>
                {`${firstName} ${lastName}`}
              </a>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////// */}

          {/* <div className="card card-compact w-96 bg-base-100 shadow-none" key={id}>
          <img
            src={
              profilePic
                ? `${BASE_URL}/v1/documents/prof-pic/${profilePic}`
                : `https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`
            }
            className="rounded-lg"
            alt="img"
          />
          <div className="card-body" style={{ padding: "16px 0px" }}>
            <a className="card-title pt-1" href={`/farmers/${id}`}>
              {`${firstName} ${lastName}`}
            </a>
          </div>

          
        </div> */}
        </div>
      ))
    ) : (
      <div style={{ width: "100%", textAlign: "center" }}>No results found</div>
    );
  };

  const handleSearch = () => {
    if (keyword == "") {
      return setFarmers(currentFarm?.farmers);
    }
    const foundFarmers = _.filter(
      farmers,
      _.flow(
        _.values,
        _.partialRight(_.some, _.method("match", new RegExp(keyword, "i")))
      )
    );
    setFarmers(foundFarmers);
  };

  return (
    <div className="bg-white flex align-start gap-4">
      <div className="w-full">
        {isSearch && (
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Farmer market near"
                className="input input-bordered w-[528px] border border-[#D2D4D7]"
                value={keyword}
                onChange={(e) => setKeyword(e?.target?.value)}
              />

              <button
                className="btn btn-square bg-white border border-[#D2D4D7]"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5316 14.5735L11.7188 10.6129C12.6991 9.449 13.2362 7.98455 13.2362 6.45999C13.2362 2.89801 10.3346 0 6.76814 0C3.20169 0 0.300049 2.89801 0.300049 6.45999C0.300049 10.022 3.20169 12.92 6.76814 12.92C8.10703 12.92 9.38293 12.5167 10.4738 11.751L14.3156 15.7416C14.4761 15.9082 14.6921 16 14.9236 16C15.1426 16 15.3504 15.9166 15.5082 15.7649C15.8434 15.4428 15.8541 14.9085 15.5316 14.5735ZM6.76814 1.68522C9.40431 1.68522 11.5489 3.82712 11.5489 6.45999C11.5489 9.09286 9.40431 11.2348 6.76814 11.2348C4.13197 11.2348 1.98738 9.09286 1.98738 6.45999C1.98738 3.82712 4.13197 1.68522 6.76814 1.68522Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {title && (
          <div classNameName="mt-[40px]">
            <h2 classNameName="font-bold text-[#262D33] text-xl">{title}</h2>
          </div>
        )}
        <div className="flex mt-[40px]" style={{ columnGap: "4rem" }}>
          <ShortSearchList />
        </div>
        <hr className="mt-10" />
      </div>
    </div>
  );
};

export default Search;
