import * as React from "react";
import { motion } from "framer-motion";

const rows = [0, 1];
const cols = [0, 1];
const size = 20;
const padding = 3;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export function Example() {
  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridGap: padding
      }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {rows.map(rowIndex => {
        return cols.map(colIndex => {
          return (
            <motion.div
              style={{
                width: size,
                height: size,
                backgroundColor: "#fff"
              }}
              key={`${rowIndex} : ${colIndex}`}
              variants={item}
            />
          );
        });
      })}
    </motion.div>
  );
}
