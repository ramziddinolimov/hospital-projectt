import React, { useTransition } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { Wrapper } from "./styled-index";
import { useTranslation } from "react-i18next";

export default function Buttons() {
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isHover1, toggleHover1] = React.useState(false);
  const toggleHoverMenu1 = () => {
    toggleHover1(!isHover1);
  };
  const [isHover2, toggleHover2] = React.useState(false);
  const toggleHoverMenu2 = () => {
    toggleHover2(!isHover2);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  const {t , i18n} = useTranslation()
  return (
    <Wrapper>
      <ul>
        <li>
          <div className="flex-item">
            <motion.div
              className="menu-item"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              <a href="#">
                {t("Header.3")} <i className="bx bxs-chevron-down"></i>
              </a>
              <motion.div
                className="sub-menu"
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="sub-menu-background" />
                <div className="sub-menu-container">
                  <div className="sub-menu-item">Submenu Item 1</div>
                  <div className="sub-menu-item">Submenu Item 2</div>
                  <div className="sub-menu-item">Submenu Item 3</div>
                  <div className="sub-menu-item">Submenu Item 4</div>
                  <div className="sub-menu-item">Submenu Item 5</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </li>
        <li>
          <a href="#">    {t("Header.4")} </a>
        </li>
        <li>
          <div className="flex-item">
            <motion.div
              className="menu-item"
              onHoverStart={toggleHoverMenu1}
              onHoverEnd={toggleHoverMenu1}
            >
              <a href="#">
              {t("Header.5")}  <i className="bx bxs-chevron-down"></i>
              </a>
              <motion.div
                className="sub-menu"
                initial="exit"
                animate={isHover1 ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="sub-menu-background" />
                <div className="sub-menu-container">
                  <div className="sub-menu-item">Submenu Item 1</div>
                  <div className="sub-menu-item">Submenu Item 2</div>
                  <div className="sub-menu-item">Submenu Item 3</div>
                  <div className="sub-menu-item">Submenu Item 4</div>
                  <div className="sub-menu-item">Submenu Item 5</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </li>
        <li>
          <a href="#">    {t("Header.6")} </a>
        </li>
        <li>
          <div className="flex-item">
            <motion.div
              className="menu-item"
              onHoverStart={toggleHoverMenu2}
              onHoverEnd={toggleHoverMenu2}
            >
              <a href="#">
              {t("Header.7")}  <i className="bx bxs-chevron-down"></i>
              </a>
              <motion.div
                className="sub-menu"
                initial="exit"
                animate={isHover2 ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="sub-menu-background" />
                <div className="sub-menu-container">
                  <div className="sub-menu-item">Submenu Item 1</div>
                  <div className="sub-menu-item">Submenu Item 2</div>
                  <div className="sub-menu-item">Submenu Item 3</div>
                  <div className="sub-menu-item">Submenu Item 4</div>
                  <div className="sub-menu-item">Submenu Item 5</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </li>
        <li>
          <a href="#">    {t("Header.8")} </a>
        </li>
      </ul>
    </Wrapper>
  );
}
