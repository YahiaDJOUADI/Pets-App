const Pet = require("../models/Pet");

// Fetch all pets
exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pets", details: error.message });
  }
};

// Fetch a single pet by ID
exports.getPet = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({ error: "Pet ID is required." });
      }
  
      const pet = await Pet.findById(id);
      if (!pet) {
        return res.status(404).json({ error: "Pet not found." });
      }
  
      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch pet", details: error.message });
    }
  }
// Add a new pet
exports.addPet = async (req, res) => {
  try {
    const { name, type, birthdate, gender, image, descreption } = req.body;

    if (!name || !type || !birthdate || !gender || !image || !descreption) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newPet = new Pet({
      name,
      type,
      birthdate,
      gender,
      descreption,
      image,
    });

    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: "Failed to add pet", details: error.message });
  }
};

// Delete a pet by ID
exports.deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Pet ID is required." });
    }

    const deletedPet = await Pet.findByIdAndDelete(id);
    if (!deletedPet) {
      return res.status(404).json({ error: "Pet not found." });
    }

    res.status(200).json({ message: "Pet deleted successfully", deletedPet });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete pet", details: error.message });
  }
};

// Update a pet by ID
exports.updatePet = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Pet ID is required." });
    }

    const { name, type, birthdate, gender,descreption, image } = req.body;

    if (!name || !type || !birthdate || !gender || !descreption || !image) {
      return res.status(400).json({ error: "All fields are required for update." });
    }

    const updatedPet = await Pet.findByIdAndUpdate(
      id,
      { name, type, birthdate, gender, descreption, image },
      { new: true, runValidators: true }
    );

    if (!updatedPet) {
      return res.status(404).json({ error: "Pet not found." });
    }

    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ error: "Failed to update pet", details: error.message });
  }
};
