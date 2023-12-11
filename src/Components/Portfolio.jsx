/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Least Time Travel Path Finder",
    description:
      "This website helps you to buy search for different motor vehicle and give you all the details with price of the product.",
    url: "https://least-time-path.netlify.app/",
  },
  {
    title: "Market Place",
    description:
      "Innovated a Marketplace web application where sellers can sell their products a broad set of buyers. And with this website the buyers can bid on the products which the seller has to sell.",
    url: " github.com/kartikeysharma98281/Marketplace",
  },
  {
    title: "CBS Flivver",
    description: "Created a website to felicitate users to search for different motor vehicles and return them with the complete details and price of the vehicle",
    url: "kartikeysharma98281.github.io/project1.github.io/",
  },
  
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
          
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
