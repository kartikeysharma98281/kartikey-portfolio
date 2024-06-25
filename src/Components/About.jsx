

import React from "react";

import image from "../images/mosaic.svg";

const imageAltText = "purple and blue abstract background";


const description =
  "I am Full Stack + DevOps Developer.I am proficient in CI/CD pipelines, cloud services, and automation, ensuring robust deployment and seamless integration across development";


const skillsList = [
  "MERN stack",
  "DevOps",
  "Next.js",
  "AWS",
  "System Design",
  "Full Stack Development",

];


const detailOrQuote =
  "I am a passionate developer proficient in multiple programming languages including C, C++, Python, JavaScript, and TypeScript. My expertise extends to the MERN stack (MongoDB, Express.js, React, Node.js), where I build dynamic and responsive web applications. Additionally, I work with Next.js and Tailwind CSS for efficient front-end development. I have a solid understanding of both SQL and NoSQL databases, particularly PostgreSQL and Prisma, and utilize Node.js frameworks like Hono. My DevOps skills encompass CI/CD pipelines, infrastructure as code, and automation, leveraging cloud technologies like AWS and GCP to deliver scalable and reliable solutions.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
