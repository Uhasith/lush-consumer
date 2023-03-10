import { useEffect } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "src/constants";
import { useCart } from "src/hooks";

const Cart = ({ handleTabChange, setMustAuthenticate}) => {
  const { items, subTotal, onItemIncrement, onItemDecrement, onItemRemove } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleClick = () => {
    const token = localStorage.getItem('tokens');
    if (!token) {
      setMustAuthenticate(true);
    } else {
      handleTabChange("SHIPPING INFORMATION");
    }
  }

  const ItemsNotFound = () => (
    <section class="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="w-40 h-40 dark:text-gray-600"
        >
          <path
            fill="currentColor"
            d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          ></path>
          <rect
            width="176"
            height="32"
            x="168"
            y="320"
            fill="currentColor"
          ></rect>
          <polygon
            fill="currentColor"
            points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
          ></polygon>
          <polygon
            fill="currentColor"
            points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
          ></polygon>
        </svg>
        <p class="text-3xl">Looks like no items in the cart</p>
        <div
          onClick={handleGoBack}
          class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 cursor-pointer"
        >
          Back to shoping
        </div>
      </div>
    </section>
  );

  const handleGoBack = () => {
    navigate(-1);
  };

  const CartItem = ({ item }) => {
    return (
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rouned-lg w-12 h-12">
                {item?.images?.[0] ? (
                  <img
                    src={
                      item.images[0].includes("http://") ||
                      item.images[0].includes("https://")
                        ? item.images[0]
                        : `${BASE_URL}/v1/documents/product-img/${item.images[0]}`
                    }
                    alt="product-img"
                    className="h-[200px] w-[335px]"
                  />
                ) : (
                  <img
                    src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    alt="product-img"
                    className="h-[200px] w-[335px]"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{item?.name}</div>
              <div className="text-sm text-[#4B5157]">
                {`${item?.weight} / ${item?.unitType}`}
              </div>
              <div className="flex mt-1">
                {item?.subCategories?.map((cat) => (
                  <div class="text-xs inline-flex items-center font-bold leading-sm px-2 py-1 bg-green-200 text-green-700 rounded-full">
                    {cat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="text-sm text-[#4B5157]">€{item?.price}</div>
        </td>
        <td>
          <div className="flex border-2 items-center rounded-full gap-6 py-2 px-4  justify-around">
            <div
              className="cursor-pointer"
              onClick={() => onItemDecrement(item)}
            >
              <svg
                width="14"
                height="2"
                viewBox="0 0 14 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="2" rx="1" fill="#BCBFC2" />
              </svg>
            </div>
            <p>{item?.qty}</p>
            <div
              className="cursor-pointer"
              onClick={() => onItemIncrement(item)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H8V13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13V8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H6V1C6 0.447715 6.44772 0 7 0C7.55228 0 8 0.447715 8 1V6Z"
                  fill="#BCBFC2"
                />
              </svg>
            </div>
          </div>
        </td>
        <td>
          <div className="text-sm text-[#4B5157] text-center">
            €{item?.totalPrice}
          </div>
        </td>
        <td>
          <div className="cursor-pointer">
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
                d="M16.1187 1.94694C15.2268 0.949039 14.041 0.399902 12.7794 0.399902C11.5178 0.399902 10.459 0.949039 9.56667 1.94694L8.99997 2.85211L8.43333 1.94694C7.5413 0.949039 6.48219 0.399902 5.22076 0.399902C3.95938 0.399902 2.7731 0.949039 1.88115 1.94694C0.0396161 4.00723 0.0396161 7.35941 1.88115 9.41889L8.47989 15.7608C8.58778 15.882 8.72209 15.9561 8.86242 15.9847C8.90948 15.9951 8.95681 15.9999 9.00423 15.9999C9.1909 15.9999 9.37789 15.9203 9.52005 15.7608L16.1188 9.41889C17.9604 7.35941 17.9604 4.00723 16.1187 1.94694Z"
                fill="#BCBFC2"
              />
            </svg>
          </div>
        </td>

        <td>
          <div className="cursor-pointer" onClick={() => onItemRemove(item)}>
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
                d="M8 6.59824L14.3079 0.290314C14.695 -0.0967714 15.3226 -0.0967714 15.7097 0.290314C16.0968 0.6774 16.0968 1.30499 15.7097 1.69208L9.40176 8L15.7097 14.3079C16.0968 14.695 16.0968 15.3226 15.7097 15.7097C15.3226 16.0968 14.695 16.0968 14.3079 15.7097L8 9.40176L1.69208 15.7097C1.30499 16.0968 0.6774 16.0968 0.290314 15.7097C-0.0967714 15.3226 -0.0967714 14.695 0.290314 14.3079L6.59824 8L0.290314 1.69208C-0.0967714 1.30499 -0.0967714 0.6774 0.290314 0.290314C0.6774 -0.0967714 1.30499 -0.0967714 1.69208 0.290314L8 6.59824Z"
                fill="#BCBFC2"
              />
            </svg>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col px-[20%] pb-48">
      {items?.length == 0 ? (
        <ItemsNotFound />
      ) : (
        <>
          <div className="flex gap-3">
            <h2 className="font-bold">Cart</h2>
            <h2 className="font-bold text-[#939699]">{items?.length}</h2>
          </div>
          <div className="overflow-x-auto w-full py-8">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="text-[#4B5157] normal-case text-[14px] font-normal">
                    Item
                  </th>
                  <th className="text-[#4B5157] normal-case text-[14px] font-normal">
                    Price
                  </th>
                  <th className="text-center text-[#4B5157] normal-case text-[14px] font-normal">
                    Quantity
                  </th>
                  <th className="text-center text-[#4B5157] normal-case text-[14px] font-normal">
                    Sub Total
                  </th>

                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items?.length > 0 &&
                  items?.map((item) => <CartItem item={item} />)}
              </tbody>
            </table>
          </div>
          <div class="justify-end flex">
            <p className="text-[#4B5157] text-[14px]">
              Sub Total:{" "}
              <span className="font-bold text-[#262D33]">€{subTotal}</span>
            </p>
          </div>
          <hr className="mt-6" />
          <div className="flex justify-between mt-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <svg
                width="15"
                height="7"
                viewBox="0 0 15 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 3V4H4V7L0 3.5L4 0V3H15Z"
                  fill="#BCBFC2"
                />
              </svg>

              <p className="text-[#939699] font-bold" onClick={handleGoBack}>
                Back to shoping
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-1">
                <p>Total Price: </p>
                <p className="font-bold text-[#262D33]">€{subTotal}</p>
              </div>
              <div>
                <button
                  class="btn bg-[#097435] border-none normal-case rounded-full h-[40px] w-[180px] gap-3"
                  onClick={handleClick}
                >
                  <p className="white">Checkout</p>
                  <svg
                    width="15"
                    height="7"
                    viewBox="0 0 15 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 3V4H11V7L15 3.5L11 0V3H0Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
