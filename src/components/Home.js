import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Layout from "./Layout";
import Menu from "./Menu";
import Offer from "./Offer";


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

