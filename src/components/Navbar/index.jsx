import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Navbar.scss";
import { images } from "../../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {[
          t("navbar.homeKey"),
          t("navbar.aboutKey"),
          t("navbar.workKey"),
          t("navbar.skillsKey"),
          t("navbar.contactKey"),
        ].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />

        {toggle && (
          <motion.div
            animate={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hiddenMenu"
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul>
              {[
                t("navbar.home"),
                t("navbar.about"),
                t("navbar.work"),
                t("navbar.skills"),
                t("navbar.contact"),
              ].map((item) => (
                <li key={item} onClick={() => setToggle(false)}>
                  <div />
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
