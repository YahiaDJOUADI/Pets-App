import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://c02.purpledshub.com/uploads/sites/41/2024/03/Dogs-improve-concentration-creativity.jpg?w=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Find Your Perfect Pet Today
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Explore a variety of pets and accessories to match your needs and
            lifestyle.
          </p>
          <Link
            to="/add-pet"
            className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-500 hover:text-green-800 transition duration-300"
          >
            Add Pet
          </Link>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            Our Mission
          </h2>
          <p className="text-center text-lg text-gray-700 mb-16">
            We aim to connect people with their perfect pets while promoting
            responsible pet adoption. Discover a wide variety of pets and give
            them the loving home they deserve.
          </p>

          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            Featured Pets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cbx-prod.b-cdn.net/COLOURBOX19416904.jpg?width=800&height=800&quality=70"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">
                  German Shepherd
                </h3>
                <p className="text-gray-600 mt-2">
                  A loyal and intelligent companion perfect for families and
                  active lifestyles.
                </p>
                <Link
                  to="/pets/6749e66c53b315921db85cac"
                  className="inline-block mt-4 text-green-700 font-bold hover:text-yellow-500"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://image10.photobiz.com/8495/28_20220226150052_6422823_xlarge.jpg"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">
                  Golden Retriever
                </h3>
                <p className="text-gray-600 mt-2">
                  A loyal companion looking for a forever home.
                </p>
                <Link
                  to="/pets/6749e5e553b315921db85ca6"
                  className="inline-block mt-4 text-green-700 font-bold hover:text-yellow-500"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.shopify.com/s/files/1/0435/0466/4732/files/blue_persian_cat_2_600x600.jpg?v=1656017892"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">
                  Persian Cat
                </h3>
                <p className="text-gray-600 mt-2">
                  A calm and elegant cat looking for a loving owner.
                </p>
                <Link
                  to="/pets/6749e59a53b315921db85c9d"
                  className="inline-block mt-4 text-green-700 font-bold hover:text-yellow-500"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <h2 className="text-4xl font-bold text-center text-green-700 mt-16 mb-12">
            Hear From Our Users
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Adopting a pet from this platform changed my life. My dog, Max,
                is my best friend."
              </p>
              <p className="mt-4 text-right text-green-700 font-bold">
                - Sarah K.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "The process was simple, and I found the perfect cat for my
                family. Highly recommend!"
              </p>
              <p className="mt-4 text-right text-green-700 font-bold">
                - David L.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
