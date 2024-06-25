

import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

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
    title: "Medium Blogging",
    description: "Pioneered the development of a scalable Medium Blogging platform featuring comprehensive user authentication and sleek UI; utilized Tailwind CSS, Vite, and React.js, boosting user engagement by 40%.",
    url: "https://medium-blogging-pi.vercel.app/",
  },
  {
    title: "Spotify Clone",
    description: "Implemented a faithful Spotify Clone project, meticulously designed to mirror the original platform’s interface. The layout and color scheme were optimized to closely resemble Spotify’s design elements, providing users with a familiar and intuitive experience.",
    url: "https://github.com/kartikeysharma98281/Spotify-clone",
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
