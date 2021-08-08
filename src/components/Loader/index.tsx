import React from "react";
import './style.css';

export function Loader() {
  return (
    <div className='loader' data-testid="loader">
      <i className="fa fa-spinner fa-spin"></i>
    </div>
  );
}
