import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export interface ILinkButtonProps {
  children: any;
  className?: string;
  to: string;
}

export function LinkButton({ children, className, to }: ILinkButtonProps) {
  return (
    <Link className={["link-btn", className].join(" ")} to={to}>
      {children}
    </Link>
  );
}
