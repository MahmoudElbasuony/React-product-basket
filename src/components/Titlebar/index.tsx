import React, { ReactNode } from "react";
import "./style.css";

interface ITitleBarProps {
  className?: string;
  children?: any;
  title: string;
  closeBtn?: ReactNode;
}

export function TitleBar({ title, className = "", closeBtn, children }: ITitleBarProps) {
  return (
    <div className={["title-bar", className].join(" ")}>
      <i className="fa fa-play"></i>
      <span className="title-bar__title">{title}</span>
      {children}
      {closeBtn && <div className="title-bar__close">{closeBtn}</div>}
    </div>
  );
}
