import "./style.css";
import { motion } from "framer-motion";

const CurveSvg: React.FC = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q200 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q0 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1.2, ease: [0.76, 0, 0.25, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.25, 1] },
    },
  };

  return (
    <svg className="svgCurve">
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default CurveSvg;
