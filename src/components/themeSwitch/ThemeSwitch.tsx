import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const [mode, setMode] = useState<string>(
    localStorage.getItem("mode") || "light"
  );

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", mode);
  }, [mode, toggleMode]);

  return (
    <div className="clickable theme-switch" onClick={toggleMode}>
      {mode === "dark" ? (
        <BsSun style={{ fontSize: "18px", color: "inharit" }} />
      ) : (
        <BsMoon style={{ fontSize: "18px", color: "inharit" }} />
      )}
    </div>
  );
};

export default ThemeSwitch;
