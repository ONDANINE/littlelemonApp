import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Offer from "../components/Offer";


function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Offer />
      <Feedback />
    </>
  );
}

export default Home;

