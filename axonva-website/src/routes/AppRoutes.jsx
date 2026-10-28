import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServicesPage from "../pages/ServicesPage";
import TechStackPage from "../pages/TechStackPage";
import GrowthPage from "../pages/GrowthPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/growth" element={<GrowthPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
