import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  ProductSlider,
  ManufactureDetail,
  ProductDetail,
} from "src/components";
import Loading from "src/components/Loading";
import { request } from "src/request";
import { isEmpty } from "lodash";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await request("GET", `/v1/products/${productId}`);
      setProduct(response);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      {
        <div className="container">
          {!isEmpty(product) && <ProductDetail product={product} />}
          {!isEmpty(product) && <ManufactureDetail product={product} />}
          
          <ProductSlider title="Related to this items" />
          {isLoading && <Loading />}
        </div>
      }
    </>
  );
};

export default ProductDetailsPage;
