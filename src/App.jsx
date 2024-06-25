

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Kartikey Sharma",
  title: "DevOps + Full Stack Developer",
  email: "kartikeysharma.sharma@gmail.com",
  gitHub: "kartikeysharma98281",
  instagram: "kartikeysharma694/",
  linkedIn: "kartikey-sharma-879747220/",
  medium: "kartikeysharma-sharma",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
