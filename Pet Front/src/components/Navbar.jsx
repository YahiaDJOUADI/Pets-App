import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/pet-shop.png"
            alt="Pet Store Logo"
            className="h-10 w-10"
          />
          <span className="text-yellow-200 text-3xl font-bold tracking-wide">
            Pet Store
          </span>
        </Link>
        <div className="flex space-x-8">
          <Link
            to="/"
            className="relative text-white text-lg transition duration-300 hover:text-yellow-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
          >
            Home
          </Link>
          <Link
            to="/pets"
            className="relative text-white text-lg transition duration-300 hover:text-yellow-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
          >
            Pets
          </Link>
          <Link
            to="/about-us"
            className="relative text-white text-lg transition duration-300 hover:text-yellow-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="relative text-white text-lg transition duration-300 hover:text-yellow-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
          >
            Contact
          </Link>
        </div>
        <Link
          to="/add-pet"
          className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-500 hover:text-green-800 transition duration-300"
        >
          Add Pet
        </Link>
      </div>
    </nav>
  );
};
