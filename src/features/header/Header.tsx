import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/">Converter</NavLink>
      <NavLink to="/currency-list">Currency list</NavLink>
    </div>
  );
};

export default Header;
