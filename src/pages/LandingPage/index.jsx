import { Hero, Map, Search, Contact } from "../../components";

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
  
 
        <Search isSearch={true} />
    
     
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;
