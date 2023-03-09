import { useFarm } from "src/hooks";
import { HorizontalSearchCard } from "../Cards";

const ResultList = () => {
  const { products } = useFarm();

  return (
    <div className="flex flex-col gap-8 py-12">
      {products?.length > 0 ? (
        products?.map((product) => (
          <>
            <HorizontalSearchCard data={product} />
            <hr />
          </>
        ))
      ) : (
        <p className="text-center w-full">No results found</p>
      )}
    </div>
  );
};

export default ResultList;
