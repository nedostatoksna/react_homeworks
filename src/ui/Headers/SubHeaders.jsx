import React from "react";
import style from "./Headers.module.css";

const SubHeaders = ({ children }) => {
  return (
    <h1 className={style.sub_title}>{children}</h1>
  )
};
export default SubHeaders;