import { BASE_URL } from "src/constants";

const ManufactureDetail = ({ product }) => {
  const Description = ({ title, firstPara, secondPara, image }) => (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-[#262D33] text-sm">{title}</h3>
      <div className="flex gap-8">
{image && <img src={image} class="rounded-lg max-w-xs" alt="product-img" /> }

        <div>
          <p className="text=[#4B5157] text-justify">{firstPara}</p>


          {secondPara && (
            <p className="mt-4 text=[#4B5157] text-justify">{secondPara}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>




      
      <div className="py-8 flex flex-col gap-8">
        <div className="flex">
          <h2 className="font-bold text-[#262D33] text-xl ml-5">From Manufacture</h2>
        </div>


{/* ///////////////////////////////////////////////////////////////////////// */}
<div className="flex flex-col items-center  md:flex-row md:max-w-full ml-5">
      <Description
            image={
              product?.images?.[0]
                ? `${BASE_URL}/v1/documents/product-img/${product?.images?.[0]}`
                : "https://via.placeholder.com/350x150"
                
            }
            
            title="Product Discription"
    
          />
        <div className="flex flex-col justify-between p-4 leading-normal">
        <Description
            firstPara={product?.description}
            secondPara=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center  md:flex-row md:max-w-full ml-5">
      <Description
        image={"https://i.ibb.co/j8CwdYV/image-083-1.png"}
        title="About Us"

          />
        <div className="flex flex-col justify-between p-4 leading-normal">
        <Description
            firstPara={product?.description}
            secondPara=""
          />
        </div>
      </div>
      
      {/* ///////////////////////////////////////////////////////////////////////// */}
     

    



      </div>
      <hr class="mt-4" />
    </>
  );
};

export default ManufactureDetail;
