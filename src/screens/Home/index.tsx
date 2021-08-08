import React from "react";
import DarkModeToggler from "../../Shared/ThemeToggler/Index";
import { LinkButton } from "../../components/Buttons/LinkButton";
import "./style.css";

export default function Home() {
  return (
    <div className="home-container">
      <DarkModeToggler />
      <LinkButton to="/products">Start</LinkButton>
    </div>
  );
}
