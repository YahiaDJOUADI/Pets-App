import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// Importing Flaticon SVGs
import DogIcon from "../assets/dog.png";
import CatIcon from "../assets/cat.png";
import BirdIcon from "../assets/bird.png";
import HorseIcon from "../assets/horse.png";
import LionIcon from "../assets/lion.png";

const AddPet = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [descreption, setDescreption] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const petData = {
      name,
      type,
      birthdate,
      gender,
      descreption,
      image,
    };

    axios
      .post("http://localhost:3000/pets", petData)
      .then(() => {
        
        setName("");
        setType("");
        setBirthdate("");
        setGender("");
        setDescreption("");
        setImage("");

       
        navigate("/pets");
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-green-200 via-green-100 to-green-50 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-green-800 mb-6">
        <span className="text-yellow-500">Add</span> Your Pet
      </h1>

      <div className="flex justify-center space-x-6 mb-8">
        {[DogIcon, CatIcon, BirdIcon, HorseIcon, LionIcon].map((icon, index) => (
          <div
            key={index}
            className="p-4 rounded-full bg-yellow-200 shadow-lg hover:shadow-xl hover:bg-yellow-300 transition duration-300"
          >
            <img src={icon} alt="Pet Icon" className="h-16 w-16" />
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Fill in Pet Details 🐾
        </h2>

        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Pet Name
          </label>
          <input
            type="text"
            placeholder="Enter pet's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Type
          </label>
          <input
            type="text"
            placeholder="e.g., Dog, Cat, Bird"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
          />
        </div>

        {/* Birthdate */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Birthdate
          </label>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Description
          </label>
          <textarea
            placeholder="Describe your pet (e.g., playful, friendly)"
            value={descreption}
            onChange={(e) => setDescreption(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Image URL
          </label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-500 hover:text-green-800 transition duration-300"
        >
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddPet;
