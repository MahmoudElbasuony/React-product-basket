import React from "react";
import './style.css';

interface ICloseButtonProps {
  onClick: () => void;
  className?: string;
  title?:string;
  children?: any;
}
export default function CloseButton({
  className = "",
  title = "Close",
  onClick = () => {},
  children = <i className="fa fa-close"></i>,
}: ICloseButtonProps) {
  return (
    <button 
      title={title}
      className={["close-btn", className].join(" ")}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
