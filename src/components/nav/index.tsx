import React from "react";
import LinkItem from "./Link";
import "./style.css";
import { motion } from "framer-motion";
import CurveSvg from "./Curve";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: "DASHBOARDS",
    href: "/",
  },
  {
    title: "USUARIOS",
    href: "/users",
  },
  {
    title: "SAIBA MAIS",
    href: "/#",
  },
  {
    title: "OUTROS",
    href: "/#",
  },
  {
    title: "CONTATOS",
    href: "/#",
  },
];

const isDisabled = (title: string) => {
  return title !== "DASHBOARDS" && title !== "USUARIOS";
};

const menuSlide = {
  initial: {
    x: "calc(-100% + -100px)",
  },
  enter: {
    x: "0%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(-100% + -100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Nav: React.FC = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      initial="initial"
      exit="exit"
      className="menu"
    >
      <div className="body">
        <div className="nav">
          <div>
            <p className="headerLink">Navigation</p>
            {navItems.map((item, index) => {
              return (
                <LinkItem
                  key={index}
                  data={{ ...item, index }}
                  className={isDisabled(item.title) ? "disabled" : ""}
                />
              );
            })}
          </div>
        </div>
        <div className="footer">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Email</a>
          <a href="#">Whatsapp</a>
        </div>
      </div>
      <CurveSvg />
    </motion.div>
  );
};

export default Nav;
