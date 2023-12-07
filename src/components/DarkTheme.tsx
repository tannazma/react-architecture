import { useState } from "react";

interface NavbarProps {
  variant: "dark" | "light";
}

const DarkTheme = ({ variant }: NavbarProps) => {
  const [theme, setTheme] = useState("light");
  const handleDarkTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      setTheme("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  };

  return (
    <button className={`navbar ${variant}`} onClick={handleDarkTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};
export default DarkTheme;
