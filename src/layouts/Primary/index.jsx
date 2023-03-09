import { Outlet } from "react-router-dom";
import { Header, Footer } from "src/components";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <div class="relative bg-white">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
