import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/pets").then((response) => {
      setPets(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-green-600 mb-8">Our Pets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={pet.image}
                alt={pet.name}
                className="h-48 w-full object-cover rounded"
              />
              <h2 className="text-xl font-semibold text-green-700 mt-4">
                {pet.name}
              </h2>
              <div className="flex gap-2 mt-2">
                <span className="inline-block text-xs font-medium text-white bg-green-600 px-2 py-1 rounded-full">
                  {pet.type}
                </span>
                <span className="inline-block text-xs font-medium text-white bg-yellow-500 px-2 py-1 rounded-full">
                  {pet.gender}
                </span>
              </div>
              <Link
                to={`/pets/${pet._id}`}
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
              >
                See More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetsList;
