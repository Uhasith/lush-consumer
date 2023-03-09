const About = ({ data }) => {
  return (
    <div className="pt-[60px] flex flex-col gap-4">
      <div className="flex">
        <h2 className="text-[24px] font-bold text-[#262D33]">
          ABOUT THIS FARMER
        </h2>
      </div>
      <div className="flex">
        <p className="text-[16px] text-[#262D33]">
          The family-run vineyard sits on sunny south-facing slopes overlooking
          the South Downs. West Sussex is blessed with rare free-draining
          greensand – excellent for viticulture in a country renowned for the
          occasional rain shower. Their vines are the classic champagne
          varieties of Chardonnay, Pinot Noir and Pinot Meunier but their clones
          are Burgundian, selected for their superior quality.
        </p>
      </div>
      <div className="pt-[20px]">
        <hr />
      </div>
    </div>
  );
};

export default About;
