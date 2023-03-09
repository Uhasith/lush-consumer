const SubHeader = ({ name }) => {
  return (
    <div className="pt-[60px] flex flex-col gap-4">
      <div className="flex">
        <h2 className="text-[24px] font-bold text-[#262D33]">
          Farmers selling at {name}:
        </h2>
      </div>
    </div>
  );
};

export default SubHeader;
