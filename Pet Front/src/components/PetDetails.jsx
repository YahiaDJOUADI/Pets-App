import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // To navigate to other routes (e.g., edit page)
  
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/pets/${id}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch pet details:", error);
      });
  }, [id]);

  const handleDelete = () => {
    // Confirmation before deletion
    if (window.confirm(`Are you sure you want to delete ${pet?.name}?`)) {
      axios
        .delete(`http://localhost:3000/pets/${id}`)
        .then(() => {
          alert(`${pet?.name} has been deleted.`);
          navigate("/pets"); // Redirect to the pet list after deletion
        })
        .catch((error) => {
          console.error("Failed to delete pet:", error);
        });
    }
  };

  const handleEdit = () => {
    // Redirect to the edit page for this pet
    navigate(`/edit-pet/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row">
        {/* Pet Image Section */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
          <img
            src={pet?.image}
            alt={pet?.name}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Pet Details Section */}
        <div className="mt-8 md:mt-0 md:ml-12 flex flex-col justify-between">
          <h1 className="text-4xl font-extrabold text-green-700">{pet?.name}</h1>

          {/* Improved Pet Type Section */}
          <div className="mt-2 flex items-center">
            <span className="inline-block bg-yellow-500 text-white text-lg font-semibold py-1 px-4 rounded-full shadow-lg">
              {pet?.type}
            </span>
          </div>

          <div className="mt-6 text-lg text-gray-700 space-y-3">
            <p>
              <span className="font-semibold text-yellow-500">Birthdate:</span> {pet?.birthdate}
            </p>
            <p>
              <span className="font-semibold text-yellow-500">Gender:</span> {pet?.gender}
            </p>

            {/* Description Section */}
            <div className="mt-4 text-base text-gray-600">
              <span className="font-semibold text-yellow-500">Description:</span>
              <p className="mt-2">{pet?.descreption}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-green-800 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 hover:bg-green-600 hover:text-white"
            >
              Edit {pet?.name}
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 hover:bg-red-700"
            >
              Delete {pet?.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
