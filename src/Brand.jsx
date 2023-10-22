import React from "react";

const Brand = ({ singleBrand }) => {
  const { name, photo } = singleBrand || {};
  const handleSeemore = () => {
    
  }
  return (
    <div>
      <div className="border text-center bg-slate-200 p-5">
        <div className="">
          <img className="" src={photo} alt="" />
        </div>
        <h3 className="text-3xl text-center font-semibold my-3">Name : {name}</h3>
        <button onClick={handleSeemore} className="text-2xl font-medium px-5 rounded-2xl py-1 bg-lime-400">See more</button>
      </div>
    </div>
  );
};

export default Brand;
