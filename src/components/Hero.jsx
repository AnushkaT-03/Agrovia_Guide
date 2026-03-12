import { useState, useEffect } from "react";
import { FLOW_STEPS } from "../data/content";
import styles from "./Hero.module.css";

export default function Hero() {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setLit((l) => (l + 1) % FLOW_STEPS.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.grain} />
      <div className={styles.inner}>
        <div className={styles.badge}>📖 Platform User Guide</div>
        <h1 className={styles.headline}>
          Farm to <span className={styles.accent}>Table,</span><br />
          Fully Transparent.
        </h1>
        <p className={styles.sub}>
          Your complete guide to Agrovia — connecting farmers, warehouses,
          retailers, and consumers in one trusted supply chain.
        </p>
        <div className={styles.flow}>
          {FLOW_STEPS.map((step, i) => (
            <div key={i} className={styles.flowItem}>
              <div className={`${styles.flowDot} ${i <= lit ? styles.flowDotLit : ""}`}>
                {step.emoji}
              </div>
              <div className={styles.flowLabel}>
                {step.label.split("\n").map((l, j) => <span key={j}>{l}</span>)}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <div className={`${styles.flowArrow} ${i < lit ? styles.flowArrowLit : ""}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
