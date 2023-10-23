import { useLoaderData } from "react-router-dom";

const DetailsApple = () => {
    const apple = useLoaderData();
    const { name, price, description, rating, URL, productType, brand } = apple || {}
    const handleAddToCart = () => {
        const cart = { name, price, description, rating, URL, productType, brand }
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-44">
                <figure className="px-10 pt-10">
                    <img  src={URL} alt="Shoes" className="w-full rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <p>Type: {productType}</p>
                    <p>Brand: {brand}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsApple;