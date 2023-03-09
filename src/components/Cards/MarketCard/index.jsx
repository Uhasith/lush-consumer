import { Link } from "react-router-dom";
import { BASE_URL } from "src/constants";

const MarketCard = ({ name, image, id }) => {
  return (
    <div className="relative flex flex-col items-center justify-between overflow-hidden sm:rounded-xl rounded-xl w-[265px]">
      <Link
        to={`/farmers/${id}`}
        class="relative block overflow-hidden bg-center bg-no-repeat bg-cover w-full  rounded-xl hover:scale-110 transition duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${BASE_URL}/v1/documents/prof-pic/${image})`,
        }}
      >
        <div class="relative p-8 pt-40 text-white bg-black bg-opacity-40 hover:bg-opacity-20">
          <h5 class="text-2xl font-bold uppercase">{name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default MarketCard;
