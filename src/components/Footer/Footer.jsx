

const Footer = () => {
    return (
        <div>
            
    <div className="bg-gray-800 text-white py-10 text-center">
        <div>
        <div className="col-span-2 mb-8">
                <h2 className="text-2xl font-semibold">Our Brand Shop</h2>
                <p className="mt-2">Discover our exclusive products and brands.</p>
            </div>
        </div>
        <div className="container mx-auto grid grid-cols-6 gap-10">
           

            <div className="col-span-1">
                <h3 className="text-lg font-semibold">Shop</h3>
                <ul className="mt-2 space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Specials</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h3 className="text-lg font-semibold">Brands</h3>
                <ul className="mt-2 space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Our Partners</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Brand Spotlight</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h3 className="text-lg font-semibold">About Us</h3>
                <ul className="mt-2 space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <ul className="mt-2 space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="mt-2">123 Main St, City, Country</p>
            </div>

            
        </div>
    </div>

        </div>
    );
};

export default Footer;