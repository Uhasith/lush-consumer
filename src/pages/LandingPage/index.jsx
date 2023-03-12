import { Hero, Map, Search, Contact } from "../../components";
import { Scrollbars } from 'react-custom-scrollbars-2';

const LandingPage = () => {
  return (
    <>
      <div class="container">
        <Hero />
       
      </div>
      <div class="px-4">
        <Map />
      </div>
      
      <div class="container" style={{  overflowX: 'auto' }}>
        {/* //////////////////////////////////////////////////////////// */}
        <Scrollbars style={{ width: "100%", height: 500 }}>
        <Search isSearch={true} />
      </Scrollbars>
        {/* //////////////////////////////////////////////////////////// */}
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;
