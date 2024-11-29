import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-700">About Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            Learn more about our mission, vision, and the team behind this
            project.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              We aim to connect people with loving pets and ensure they find
              their perfect companion. Our platform helps promote responsible
              pet adoption while making the process simple and accessible.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              To build a world where every pet finds a caring home and every
              person experiences the joy of pet companionship.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-700 text-center">
            Meet the Team
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/IMG_3750.jpeg"
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Yahia Djouadi
              </h3>
              <p className="text-gray-600">Developer & Project Lead</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/yahia.jpeg"
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Yahia Djouadi
              </h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/IMG_3750.jpeg"
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Yahia Djouadi
              </h3>
              <p className="text-gray-600">Backend Developer</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-green-700">Join Us</h2>
          <p className="mt-4 text-gray-600">
            Want to make a difference in the lives of pets and their future
            families? Get in touch with us today!
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold transform transition-all duration-300 hover:bg-yellow-500 hover:text-green-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
