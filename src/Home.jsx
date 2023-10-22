import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";

const Home = () => {
  const brand = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-3 gap-5">
        {brand?.map((singleBrand) => (
          <Brand key={singleBrand._id} singleBrand={singleBrand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Home;
