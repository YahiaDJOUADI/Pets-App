import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPet = () => {
  const { id } = useParams(); // Get the pet ID from the URL
  const navigate = useNavigate(); // For redirecting after the edit

  const [pet, setPet] = useState({
    name: "",
    type: "",
    birthdate: "",
    gender: "",
    descreption: "",
    image: "",
  });

  // Fetch pet data for the given ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/pets/${id}`)
      .then((response) => {
        setPet(response.data); // Set the pet data to the state
      })
      .catch((error) => {
        console.error("Failed to fetch pet details:", error);
      });
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  // Handle form submission to update pet
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated pet data to the backend
    axios
      .put(`http://localhost:3000/pets/${id}`, pet)
      .then(() => {
        alert("Pet details updated successfully!");
        navigate(`/pets/${id}`); // Redirect to the pet details page after successful update
      })
      .catch((error) => {
        console.error("Error updating pet:", error);
        alert("Failed to update pet details. Please try again.");
      });
  };

  return (
    <div className="bg-gradient-to-b from-green-200 via-green-100 to-green-50 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-green-800 mb-6">
        <span className="text-yellow-500">Edit</span> Pet Details
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Update Your Pet 🐾
        </h2>

        {/* Pet Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Pet Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter pet's name"
            value={pet.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          />
        </div>

        {/* Pet Type */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Type
          </label>
          <input
            type="text"
            name="type"
            placeholder="e.g., Dog, Cat, Bird"
            value={pet.type}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          />
        </div>

        {/* Birthdate */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Birthdate
          </label>
          <input
            type="date"
            name="birthdate"
            value={pet.birthdate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Gender
          </label>
          <select
            name="gender"
            value={pet.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Description
          </label>
          <textarea
            name="descreption"
            placeholder="Describe your pet (e.g., playful, friendly)"
            value={pet.descreption}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={pet.image}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-500 hover:text-green-800 transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPet;
