import React from "react";
import styles from "./Header.module.css";
import littlelemonLogo from "../images/logolittlelemon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    return (
    <header className={styles.headerLayout}>
        <nav>
            <ul>
                <li>About</li>
                <li>Menus</li>
                <li>Reservations</li>
            </ul>
        </nav>
        <img src={littlelemonLogo} alt="Restaurant Logo" />
        <button>Order Online</button>
        <button>Login</button>
    </header>
    )
};
