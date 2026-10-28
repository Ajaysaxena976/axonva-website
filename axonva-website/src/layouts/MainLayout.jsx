import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import BackgroundMesh from "../components/effects/BackgroundMesh";
import { ModalProvider } from "../context/ModalContext";
import StrategyCallModal from "../components/modals/StrategyCallModal";

function MainLayout() {
  const { pathname } = useLocation();

  // Scroll to top automatically when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col bg-[#060517] text-slate-100 relative selection:bg-[#ff5722] selection:text-white">
        {/* 3D Radiant Ambient Background Mesh */}
        <BackgroundMesh />

        {/* Main Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 relative z-10 pt-20">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Strategy Call Modal */}
        <StrategyCallModal />
      </div>
    </ModalProvider>
  );
}

export default MainLayout;
