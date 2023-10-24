import { Link } from "react-router-dom";

const Brand = ({ singleBrand }) => {
  const { name, photo } = singleBrand || {};
  const nameLowerCase = name.toLowerCase();

  return (
    <div>
      <Link to={`/${nameLowerCase}`}>
        <div className="border text-center bg-slate-200 p-5">
          <div className="">
            <img className="h-56 w-full" src={photo} alt="" />
          </div>
          <h3 className="text-3xl text-center font-semibold my-3">Name : {name}</h3>
          <button className="text-2xl font-medium px-5 rounded-2xl py-1 bg-slate-400">See more</button>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
