import { useState } from "react";
import styles from "./Step.module.css";

const GRADES = [
  { grade: "A", label: "Premium Quality", payout: "Highest payout rate", bg: "#d8f3dc", color: "#1b4332" },
  { grade: "B", label: "Standard Market", payout: "Standard rate", bg: "#fff3cd", color: "#664d03" },
  { grade: "C", label: "Below Standard", payout: "Lower rate", bg: "#fde8e8", color: "#7b2c2c" },
];

function GradeTable() {
  return (
    <div className={styles.gradeTable}>
      <div className={styles.gradeTableHeader}>Quality Grade → Payout Rate</div>
      {GRADES.map((g) => (
        <div key={g.grade} className={styles.gradeRow}>
          <div className={styles.gradePill} style={{ background: g.bg, color: g.color }}>{g.grade}</div>
          <div className={styles.gradeLabel}>{g.label}</div>
          <div className={styles.gradePayout}>{g.payout}</div>
        </div>
      ))}
    </div>
  );
}

export default function Step({ step, accent }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.step} ${open ? styles.open : ""}`}
      style={{ "--accent": accent }}
      onClick={() => setOpen((o) => !o)}
    >
      <div className={styles.header}>
        <div className={`${styles.num} ${open ? styles.numActive : ""}`}>{step.num}</div>
        <div className={styles.titleGroup}>
          <div className={styles.title}>
            <span className={styles.icon}>{step.icon}</span>
            {step.title}
          </div>
          <div className={styles.short}>{step.short}</div>
        </div>
        <div className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {open && (
        <div className={styles.detail} onClick={(e) => e.stopPropagation()}>
          <p>{step.detail}</p>
          {step.gradeTable && <GradeTable />}
          {step.tip && (
            <div className={styles.tip}>
              {step.tip}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
