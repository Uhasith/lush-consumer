import { BASE_URL } from "src/constants";
import { useCart } from "src/hooks";
import Flashsales  from "src/components/Flashsale/Flashsale";


const FilterCard = ({
  image,
  name,
  weight,
  unitType,
  hasPromotion,
  price,
  description,
  farm,
  id,
  product,
}) => {
  const { onItemAdd } = useCart();
  const handleAddToCart = (item) => {
    onItemAdd({ ...item, qty: 1, totalPrice: item?.price });
  };

  return (
    <div className="flex">
      <div className="flex" style={{ width: "80%" }}>
        <div className="flex">
          
          <img
            src={`${BASE_URL}/v1/documents/product-img/${image}`}
            alt=""
            className="filtercard-image"
          />
        </div>
        <div className="flex flex-col py-2 px-6 gap-2">
          <div className="flex">
          
            <div className="flex gap-2">
            <a className="text-xl text-[#262D33]" href={`/products/${id}`}>
              {name}
            </a>
            </div>
            <div className="divider divider-horizontal" />
            <div className="flex">
            {hasPromotion && <Flashsales/>}
            </div>





          </div>
          <div className="flex">
            <div className="flex gap-2">
              {/* <p className="font-bold text-sm line-through">€169</p> */}
              <p className="font-bold text-sm">€{price}</p>
            </div>
            <div className="divider divider-horizontal" />
            <div className="flex">
              <p className="text-[#4C8AE8] text-sm uppercase">
                {`${weight} / ${unitType}`} .{" "}
                <a href={`/farms/${farm?.id}`} className="underline">
                  {farm?.name}
                </a>
              </p>
            </div>
          </div>
          <div className="flex w-3/4">
            <p className="text-sm font-bold">{description}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="btn btn-circle btn-outline btn-xs border-[#D9DADB]"
              onClick={() => handleAddToCart(product)}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.29412 3.29412H14C14.0305 3.29416 14.8235 3.29517 14.8235 4.11765L14 9.05882C13.9267 9.46319 13.6466 9.88235 13.2294 9.88235H4.94118L5.01946 10.9517C5.07643 11.2239 5.3177 11.5294 5.59296 11.5294H12.8525C12.8835 11.5294 12.9136 11.5339 12.9424 11.5422C13.5397 11.6286 14 12.1439 14 12.7647C14 13.4459 13.4459 14 12.7647 14C12.0836 14 11.5294 13.4459 11.5294 12.7647C11.5294 12.6204 11.5543 12.4818 11.6 12.3529H6.51769C6.56337 12.4818 6.58824 12.6204 6.58824 12.7647C6.58824 13.4459 6.03409 14 5.35294 14C4.67179 14 4.11765 13.4459 4.11765 12.7647C4.11765 12.368 4.30557 12.0144 4.59707 11.7883C4.44332 11.5854 4.33192 11.3477 4.28204 11.1098L3.95999 9.57511L1.64706 0.823529H0.376862C0.168678 0.823529 0 0.591475 0 0.381003C0 0.170532 0.168678 0 0.376862 0H2.10964C2.28299 0 2.43402 0.119696 2.47556 0.289934L3.29412 3.29412Z"
                  fill="#BCBFC2"
                />
              </svg>
            </button>
            

          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center pl-8"
        style={{ width: "20%" }}
      >
        <button className="btn btn-circle btn-outline btn-xs border-[#D9DADB]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8391 1.96008C11.1701 1.21166 10.2807 0.799805 9.33459 0.799805C8.38831 0.799805 7.59423 1.21166 6.925 1.96008L6.49998 2.63896L6.075 1.96008C5.40597 1.21166 4.61164 0.799805 3.66557 0.799805C2.71953 0.799805 1.82982 1.21166 1.16086 1.96008C-0.220288 3.5053 -0.220288 6.01943 1.16086 7.56405L6.10991 12.3205C6.19083 12.4114 6.29157 12.467 6.39682 12.4884C6.43211 12.4962 6.46761 12.4998 6.50317 12.4998C6.64318 12.4998 6.78341 12.4401 6.89004 12.3205L11.8391 7.56405C13.2203 6.01943 13.2203 3.5053 11.8391 1.96008Z"
              fill="#BCBFC2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
