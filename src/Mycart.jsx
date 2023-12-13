import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Mycart = () => {
    const loadedcart = useLoaderData();
    const [cart, setCart] = useState(loadedcart);
    const handleRemove = (id) => {
        fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data?.deletedCount > 0){
                    const remaining = cart.filter(product => product._id !== id);
                    setCart(remaining);
                    swal("Good job!", "products delete successfully", "success")
                }
            });
    };
    return (
        <div>
            <h1 className="text-5xl font-black text-center my-10">My cart</h1>
            <div className="grid grid-cols-2 gap-10">
                {
                    cart?.map(product => 
                        <div key={product._id} className="bg-slate-200 p-10 rounded-md">
                        <div className=""><img className="w-full h-60 rounded-md" src={product.URL} alt="" /></div>
                        <h3 className="text-3xl font-semibold">Name: {product.name}</h3>
                        <p className="text-xl font-medium">Price: {product.price}</p>
                        <p className="text-xl font-medium">Type: {product.productType} </p>
                        <p className="text-xl font-medium">Brand: {product.brand}</p>
                        <p className="text-xl font-medium">Rating: {product.rating}</p>
                        <Link to='/'><button className="btn btn-accent mr-2">Buy</button></Link>
                        <button onClick={() => handleRemove(product._id)} className="btn btn-accent">Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Mycart;