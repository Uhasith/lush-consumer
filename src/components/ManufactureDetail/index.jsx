import { BASE_URL } from "src/constants";

const ManufactureDetail = ({ product }) => {
  const Description = ({ title, firstPara, secondPara, image }) => (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-[#262D33] text-sm">{title}</h3>
      <div className="flex gap-8">
        <img src={image} class="rounded-lg max-w-xs" alt="product-img" />
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
          <h2 className="font-bold text-[#262D33] text-xl">From Manufacture</h2>
        </div>
        <div className="flex flex-col gap-8">
          <Description
            image={
              product?.images?.[0]
                ? `${BASE_URL}/v1/documents/product-img/${product?.images?.[0]}`
                : "https://via.placeholder.com/350x150"
            }
            title="Product Discription"
            firstPara={product?.description}
            secondPara=""
          />
          <Description
            image="https://i.ibb.co/j8CwdYV/image-083-1.png"
            title="About Us"
            firstPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio"
          />
        </div>
      </div>
      <hr class="mt-4" />
    </>
  );
};

export default ManufactureDetail;
