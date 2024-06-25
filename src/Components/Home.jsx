

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";


const imageAltText = "bg image";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="dark">
      <img className="background" src="https://image.slidesdocs.com/responsive-images/background/simple-clean-creal-modern-portfolio-purple-powerpoint-background_40057f696b__960_540.jpg" alt="" />
      <div style={{ position: "absolute", top: "30%", left: "2rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "8rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
