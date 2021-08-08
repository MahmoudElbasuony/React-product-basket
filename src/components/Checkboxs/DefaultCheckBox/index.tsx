import React from "react";
import "./style.css";

export interface IDefaultCheckBoxProps {
  checked: boolean;
  className?: string;
  onCheck?: (checked: boolean) => void;
  children?: any;
}

export default function DefaultCheckBox({
  checked = false,
  onCheck = (checked: boolean) => {},
  className = "",
  children = null,
}: IDefaultCheckBoxProps) {
  return (
    <label className={["default-checkbox-container", className].join(" ")}>
      <input
        type="checkbox"
        className="default-checkbox-container__input"
        checked={checked}
        onChange={(evt) => onCheck(evt.target.checked)}
      />
      {children}
    </label>
  );
}
