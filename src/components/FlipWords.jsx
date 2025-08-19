import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const FlipWords = ({ words, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      3000 // change every 3s
    );
    return () => clearInterval(interval);
  }, [words.length]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.2, y: -20 },
  };

  return (
    <motion.span
      key={index}
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {words[index]}
    </motion.span>
  );
};
