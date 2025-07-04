import React from "react";
import styles from "./Header.module.css";
import littlelemonLogo from "../images/logolittlelemon.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdSupervisorAccount } from "react-icons/md";



export default function Header() {
    return (
    <header className={styles.headerLayout}>
        <nav className={styles.leftNavbar}>
            <Link
                className={styles.linkNavBTN}
                to="/about"
            >
              About
            </Link>
            <Link
                className={styles.linkNavBTN}
                to="/menus"
            >
              Menus
            </Link>
            <Link
                className={styles.linkNavBTN}
                to="/reservations"
            >
              Reservations
            </Link>
        </nav>
        <img src={littlelemonLogo} alt="Restaurant Logo" />
        <nav className={styles.rightNavbar}>
            <button className={styles.orderBtn}>Order Online</button>
            <button className={styles.accountBtn}>
                <MdSupervisorAccount className={styles.accountIcon} />
            </button>
        </nav>
    </header>
    )
};
