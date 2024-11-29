import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AddPet from "./components/addPet";
import PetsList from "./components/PetsList";
import PetDetails from "./components/PetDetails";
import EditPet from "./components/EditPet";  
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-pet" element={<AddPet />} />
          <Route path="pets" element={<PetsList />} />
          <Route path="pets/:id" element={<PetDetails />} />
          <Route path="edit-pet/:id" element={<EditPet />} /> 
          <Route path="about-us" element={<AboutUs/>}/> 
          <Route path="contact" element={<Contact/>}/> 

        </Route>
      </Routes>
    </Router>
  );
}
