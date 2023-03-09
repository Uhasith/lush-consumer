import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FarmBanner, Contact, Filter, SubHeader } from "src/components";
import { MarketCard } from "src/components/Cards";
import { request } from "src/request";

const FarmersMarketPage = () => {
  const { farmId } = useParams();
  const [farm, setFarm] = useState({});

  useEffect(() => {
    getFarm();
  }, []);

  const getFarm = async () => {
    try {
      const response = await request("GET", `/v1/farms/${farmId}`);
      setFarm(response);
    } catch (err) {
      console.log(err);
    }
  };

  const MarketItemList = () => {
    return (
      <div className="flex justify-center w-full">
        <div className="flex gap-8 py-6 overflow-y-auto max-h-[50rem] flex-wrap">
          {farm?.farmers?.length > 0 ? (
            farm?.farmers?.map(({ id, firstName, lastName, profilePic }) => {
              return (
                <MarketCard
                  key={id}
                  name={`${firstName} ${lastName}`}
                  image={profilePic}
                  id={id}
                />
              );
            })
          ) : (
            <p>No farmers found</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <FarmBanner
        name={farm?.name}
        openEndTime={farm?.openEndTime}
        location={farm?.address}
      />
      <div className="container">
        <SubHeader name={farm?.name} />
        <MarketItemList />
        <Contact />
      </div>
    </>
  );
};

export default FarmersMarketPage;
