import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AboutPage, ContactPage, HomePage, ProjectsPage, ServicePage } from "./pages";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
