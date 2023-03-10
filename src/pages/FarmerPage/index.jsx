import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner, Contact, About, Filter } from "src/components";
import { FilterCard } from "src/components/Cards";
import { request } from "src/request";

const FarmerPage = () => {
  const { farmId } = useParams();
  const [farmer, setFarmer] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getFarmer();
  }, []);

  useEffect(() => {
    getFarmerProducts();
  }, []);

  useEffect(() => {
    if (products?.length > 0) {
      const categories = products.map((product) => product.category);
      setCategories(categories);
    }
  }, [products]);

  const getFarmer = async () => {
    try {
      const response = await request("GET", `/v1/users/${farmId}`);
      setFarmer(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getFarmerProducts = async () => {
    try {
      const response = await request(
        "GET",
        `/v1/products?status=Active&sortBy=createdAt:desc&limit=100&createdBy=${farmId}`
      );

      setProducts(response?.results);
      setFilteredProducts(response?.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (keyword) => {
    if (keyword == "") return setFilteredProducts(products);
    const _products = products.filter((prdct) => {
      if (String(prdct?.name).toLowerCase().includes(keyword.toLowerCase()))
        return prdct;
    });
    setFilteredProducts(_products);
  };

  const handleFilter = (category) => {
    if (category == "All") return setFilteredProducts(products);
    const _products = products.filter((prdct) => {
      if (prdct?.category?.name == category) return prdct;
    });
    setFilteredProducts(_products);
  };

  const ResultList = () => {
    return (
      <div className="flex flex-col gap-8 py-6 overflow-auto max-h-[50rem]">
        {filteredProducts?.length > 0 ? (
          filteredProducts?.map(
            (
              {
                id,
                images,
                name,
                weight,
                hasPromotion,
                unitType,
                price,
                description,
                ...rest
              },
              index
            ) => (
              <div key={index}>
                <FilterCard
                  image={images[0]}
                  name={name}
                  weight={weight}
                  unitType={unitType}
                  price={price}
                  hasPromotion={hasPromotion}
                  description={description}
                  farm={farmer?.farm}
                  id={id}
                  product={{
                    ...rest,
                    id,
                    images,
                    name,
                    weight,
                    unitType,
                    price,
                    description,
                  }}
                />
                <hr />
              </div>
            )
          )
        ) : (
          <p>No products found</p>
        )}
      </div>
    );
  };

  return (
    <>
      <Banner data={farmer} />
      <div className="container">
        <About data={farmer} />
        <Filter
          onSearch={handleSearch}
          categories={categories}
          onFilter={handleFilter}
        />
        <ResultList />
        <Contact />
      </div>
    </>
  );
};

export default FarmerPage;
