import { createRoot } from "react-dom/client";
import { useState } from "react";
import MenuEleccionApp from "./screens/menu-eleccion/app/App.jsx";
import PantallaPrincipalApp from "./screens/pantalla-principal/app/App.jsx";
import "./styles/index.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("menu");

  return (
    <>
      {currentScreen === "menu" && (
        <MenuEleccionApp />
      )}
      {currentScreen === "principal" && (
        <PantallaPrincipalApp />
      )}
      {/* Button to switch screens - you can remove this later */}
      <button
        onClick={() => setCurrentScreen(currentScreen === "menu" ? "principal" : "menu")}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999,
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px"
        }}
      >
        Switch: {currentScreen === "menu" ? "Principal" : "Menú"}
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
