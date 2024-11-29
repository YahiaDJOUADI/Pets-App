export default () => {
    return (
      <div className="bg-gray-100 min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-green-700">
              Contact <span className="text-yellow-300">Us</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Have questions or want to reach out? We'd love to hear from you!
            </p>
          </div>
  
          <div className="mt-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transform transition duration-300 hover:bg-yellow-500 hover:text-green-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
  
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-green-700 text-center">Our Contact Details</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-2xl">
                  📞
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Phone</h3>
                <p className="mt-2 text-gray-600 text-lg font-medium">+213 0782421592</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-2xl">
                  ✉️
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Email</h3>
                <p className="mt-2 text-gray-600 text-lg font-medium">yahiadjouadi7@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-2xl">
                  📍
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Address</h3>
                <p className="mt-2 text-gray-600 text-lg font-medium">
                  123 Baba Hassen
                  <br />
                  Algiers, Algeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  