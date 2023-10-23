import { Link, useLoaderData } from "react-router-dom";

const Sony = () => {
    const sony = useLoaderData();
  
    return (
        <div>
            <div className="grid grid-cols-2 gap-20 mx-20">
            {
                sony?.map(product => 
                <div key={product._id} className="bg-slate-200 p-10 rounded-md">
                    <div className=""><img className="w-full h-60 rounded-md" src={product.URL} alt="" /></div>
                    <h3 className="text-3xl font-semibold">Name: {product.name}</h3>
                    <p className="text-xl font-medium">Price: {product.price}</p>
                    <p className="text-xl font-medium">Type: {product.productType} </p>
                    <p className="text-xl font-medium">Brand: {product.brand}</p>
                    <p className="text-xl font-medium">Rating: {product.rating}</p>
                    <Link to={`/detailsSony/${product._id}`}><button className="btn btn-accent mr-2">Details</button></Link>
                    <Link to={`/updateSony/${product._id}`}><button className="btn btn-accent">Update</button></Link>
                </div>)
            }
        </div>
        </div>
    );
};

export default Sony;