import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../sanity_client";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skillImage"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good design</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app_profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');