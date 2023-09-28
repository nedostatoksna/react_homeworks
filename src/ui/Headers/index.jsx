import React from "react";
import style from "./Headers.module.css";

const Headers = ({ children }) => {
  return (
    <h1 className={style.main_title}>{children}</h1>
  )
};
export default Headers;