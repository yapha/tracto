import styles from "./TestimonialManager.module.css";
import TestimonialItem from "./item/item";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    author: "Julie - Product Designer",
    text: "A bit like building a house, from floor plans to final coat of paint. Our process is very flexible",
  },
  {
    id: 2,
    author: "Julie - Product Designer",
    text: "A bit like building a house, from floor plans to final coat of paint. Our process is very flexible",
  },
  {
    id: 3,
    author: "Julie - Product Designer",
    text: "A bit like building a house, from floor plans to final coat of paint. Our process is very flexible",
  },
];
export default function TestimonialManager() {
  // const [primary, setPrimary] = useState(Math.floor(testimonials.length / 2));
  const [primary, setPrimary] = useState(1);

  function changeRange(e) {
    setPrimary(e.target.value);
  }

  let classStyles;
  if (primary === 0) {
    classStyles = "left";
  } else if (primary === 1) {
    classStyles = "center";
  } else if (primary === 2) {
    classStyles = "right";
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.slides} ${styles[classStyles]}`}>
        {testimonials.map((t, index) => (
          <div className={styles.slide} key={t.id}>
            <TestimonialItem
              text={t.text}
              author={t.author}
              isPrimary={index === primary}
              setPrimary={() => setPrimary(index)}
            />
          </div>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="2"
        className={styles.range}
        value={primary}
        onChange={changeRange}
      />
    </div>
  );
}
