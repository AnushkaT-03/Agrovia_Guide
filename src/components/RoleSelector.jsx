import styles from './RoleSelector.module.css';

const badgeColors = {
  green: styles.badgeGreen,
  amber: styles.badgeAmber,
};

export default function RoleSelector({ roles, onSelect }) {
  return (
    <section id="roles" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Step 1</span>
          <h2 className={styles.h2}>Who are you on Agrovia?</h2>
          <p className={styles.desc}>Select your role to jump to your personalised step-by-step guide.</p>
        </div>

        <div className={styles.grid}>
          {roles.map((role, i) => (
            <button
              key={role.id}
              className={styles.card}
              onClick={() => onSelect(role.id)}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{role.emoji}</span>
                <span className={`${styles.badge} ${badgeColors[role.badgeColor]}`}>
                  {role.badge}
                </span>
              </div>
              <div className={styles.cardTitle}>{role.title}</div>
              <div className={styles.cardSub}>{role.subtitle}</div>
              <p className={styles.cardTagline}>{role.tagline}</p>
              <div className={styles.cardCta}>View Guide →</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
