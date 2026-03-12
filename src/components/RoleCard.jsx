import styles from "./RoleCard.module.css";

export default function RoleCard({ role, active, onClick }) {
  return (
    <button
      className={`${styles.card} ${active ? styles.active : ""}`}
      onClick={onClick}
      style={{ "--gradient": role.gradient, "--accent": role.accent, "--accent-light": role.accentLight }}
      aria-pressed={active}
    >
      <div className={styles.emoji}>{role.emoji}</div>
      <div className={styles.title}>{role.title}</div>
      <div className={styles.subtitle}>{role.subtitle}</div>
      <div className={styles.desc}>{role.shortDesc}</div>
      <div className={styles.tag}>{role.tag}</div>
    </button>
  );
}
