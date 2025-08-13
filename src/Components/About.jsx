/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Self - taught full stack developer and an aspiring Cybersecurity analyst, passionate about building web applications and securing them. I enjoy learning new technologies and applying them to solve real-world problems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Network Technician",
  "Cybersecurity Analyst",
  "HTML & CSS",
  "JavaScript",
  "Python",
  "SQL",
  "Django",
  "React",
  "Data-Structures",
  "Git & GitHub",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "My ultimate goal is to eventually dive into the world of Cybersecurity focusing more on ethical hacking and penetration testing. with a strong foundation in full stack development, I aim to create secure applications from the ground up. I believe that understanding the full stack allows me to build robust and secure systems that can withstand potential threats. I am committed to continuous learning and staying updated with the latest trends in both web development and cybersecurity to ensure that I can contribute effectively to any team or project I am part of.";

const About = () => {
  return (
    <section className="padding" id="about">
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
