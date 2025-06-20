import React from "react";
import styles from "./Header.module.css";
import littlelemonLogo from "../images/logolittlelemon.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    return (
    <header className={styles.headerLayout}>
        <nav className={styles.navbar}>
            <Link
                to="/about"
            >
              About
            </Link>
            <Link
                to="/menus"
            >
              Menus
            </Link>
            <Link
                to="/reservations"
            >
              Reservations
            </Link>
        </nav>
        <img src={littlelemonLogo} alt="Restaurant Logo" />
        <button>Order Online</button>
        <button>Login</button>
    </header>
    )
};
