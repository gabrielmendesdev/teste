import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const slide = {
  initial: {
    x: "-80px",
  },
  enter: (i: number) => ({
    x: "0px",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.06 * i,
    },
  }),
  exit: (i: number) => ({
    x: "-80px",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};

interface LinkItemProps {
  data: {
    index: number;
    title: string;
    href: string;
  };
  className: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ data, className }: any) => {
  const isDisabled = data.title !== "DASHBOARDS" && data.title !== "USUARIOS";

  return (
    <>
      <motion.div
        custom={data.index}
        variants={slide}
        animate="enter"
        exit="exit"
        initial="initial"
      >
        {isDisabled ? (
          <span className={`links disabled ${className}`}>{data.title}</span>
        ) : (
          <a href={data.href} className={`links ${className}`}>
            {data.title}
          </a>
        )}
      </motion.div>
    </>
  );
};

export default LinkItem;
