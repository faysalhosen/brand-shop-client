import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import About from "./components/About/About";

const Home = () => {
  const brand = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {brand?.map((singleBrand) => (
          <Brand key={singleBrand._id} singleBrand={singleBrand}></Brand>
        ))}
      </div>
      <About></About>
      <Payment></Payment>
      <Footer></Footer>
    </div>
  );
};

export default Home;
