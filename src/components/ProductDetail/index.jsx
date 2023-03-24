import { BASE_URL } from "src/constants";
import Flashsales  from "src/components/Flashsale/Flashsale";
import { useCart } from "src/hooks";
import React, { useEffect } from 'react';





  const ProductDetail = ({product,item}) => {

    

    const { onItemAdd } = useCart();
    const handleAddToCart = (item) => {
      onItemAdd({ ...item, qty: 1, totalPrice: item?.price });
    };

    const {onItemIncrement, onItemDecrement } = useCart();



    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);



  return (
    <div className="py-12 flex gap-10">
      <div className="flex">
        <img
          src={
            product?.images?.[0]
              ? `${BASE_URL}/v1/documents/product-img/${product?.images?.[0]}`
              : "https://via.placeholder.com/350x150"
          }
          alt="product-img"
          className="max-w-sm"
        />
      </div>
      <div className="flex flex-col gap-4">
       



        <div class="flex">
  <span class="mr-2"><p className="font-bold text-white px-3 py-1 bg-[#FF4F52] rounded-md">Sale</p></span>
</div>




        <div className="flex">
         
          <span class="mr-2"> <h2 className="font-bold text-[25px]">{product?.name}</h2></span>
  <span className="mt-1" >{product?.hasPromotion && <Flashsales/>}</span>
        </div>
        <div className="flex gap-4">
          <h2 className="font-bold text-[20px]">Product Discription</h2>
         
        </div>
        <div className="flex">
          <p>{product?.description}</p>
        </div>
        <hr />
        <div className="flex gap-6 items-center">
          <div className="flex gap-4">
            <div className="flex">
              <h2 className="font-bold">
                €{product?.price} {item?.totalPrice} per {product?.unitType}
              </h2>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center">
              <h2>Quantity</h2>
            </div>


            <div className="flex">
              <div className="flex border-2 items-center rounded-full gap-6 py-2 px-4">
                <div className="cursor-pointer"
                onClick={() => onItemDecrement(item)}>
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
    onClick={() => {
      onItemIncrement(item);
      console.log(item?.qty);
    }}
  
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
            </div>



          </div>
        </div>
        <hr />
        <div className="flex">
          <button class="btn bg-[#097435] border-none normal-case rounded-lg h-[40px] w-[180px] gap-3"
          onClick={() => handleAddToCart(product)}>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4.00049H17C17.037 4.00054 18 4.00176 18 5.00049L17 11.0005C16.911 11.4915 16.5709 12.0005 16.0642 12.0005H6L6.09506 13.299C6.16424 13.6296 6.45721 14.0005 6.79145 14.0005H15.6066C15.6443 14.0005 15.6808 14.0059 15.7158 14.016C16.441 14.1209 17 14.7466 17 15.5005C17 16.3276 16.3271 17.0005 15.5 17.0005C14.6729 17.0005 14 16.3276 14 15.5005C14 15.3253 14.0302 15.1569 14.0857 15.0005H7.91434C7.9698 15.1569 8 15.3252 8 15.5005C8 16.3276 7.32711 17.0005 6.5 17.0005C5.67289 17.0005 5 16.3276 5 15.5005C5 15.0188 5.2282 14.5895 5.58216 14.3148C5.39546 14.0685 5.26019 13.7798 5.19962 13.491L4.80856 11.6274L2 1.00049H0.457618C0.204824 1.00049 0 0.718708 0 0.463135C0 0.207563 0.204824 0.000488281 0.457618 0.000488281H2.56171C2.77221 0.000488281 2.95559 0.145833 3.00603 0.352551L4 4.00049Z"
                fill="white"
              />
            </svg>
            <p className="white">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
