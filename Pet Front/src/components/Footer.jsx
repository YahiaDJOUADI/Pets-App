import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 hover:text-yellow-300 transition">About Us</h3>
            <p className="text-sm hover:text-yellow-300 transition">
              Pet Store is your go-to place for everything related to pets. We provide a wide variety of pets and pet products.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 hover:text-yellow-300 transition">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-yellow-300 transition">Home</Link>
              </li>
              <li>
                <Link to="/pets" className="text-sm hover:text-yellow-300 transition">Pets</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-yellow-300 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-yellow-300 transition">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 hover:text-yellow-300 transition">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm hover:text-yellow-300 transition">FAQ</Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-sm hover:text-yellow-300 transition">Return Policy</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-yellow-300 transition">Shipping</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm hover:text-yellow-300 transition">
          <p>&copy; 2024 Pet Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
