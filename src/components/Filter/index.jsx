import { useState } from "react";
import { DynamicSearch } from "src/components";

const Filter = ({ isSearch = true, onSearch, categories, onFilter }) => {
  const [chosen, setChosen] = useState("All");
  const handleKeyWordChange = (keyword) => {
    onSearch(keyword);
  };

  const handleFilterChange = (filter) => {
    onFilter(filter);
    setChosen(filter);
  };

  return (
    <div className="flex flex-col gap-4 my-[40px]">
      {isSearch && <DynamicSearch onSearch={handleKeyWordChange} />}
      <div className="flex">
        <p className="text-[16px] text-[#4B5157]">Filter by category:</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <button
          className="btn btn-sm gap-2 font-normal btn-outline border-[#D9DADB] text-[#4B5157] text-[14px] normal-case"
          onClick={() => handleFilterChange("All")}
          disabled={chosen == "All"}
        >
          All
        </button>
        {categories?.length > 0 &&
          categories?.map(({ name }, index) => (
            <button
              className="btn btn-sm gap-2 font-normal btn-outline border-[#D9DADB] text-[#4B5157] text-[14px] normal-case"
              key={index}
              onClick={() => handleFilterChange(name)}
              disabled={chosen == name}
            >
              {name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Filter;
