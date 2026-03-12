import { useState } from 'react';
import styles from './StepCard.module.css';

export default function StepCard({ step }) {
  const [open, setOpen] = useState(false);
  const hasMore = step.detail || step.list || step.table || step.tip;

  return (
    <div className={`${styles.card} ${open ? styles.open : ''}`}>
      <button
        className={styles.header}
        onClick={() => hasMore && setOpen(o => !o)}
        aria-expanded={open}
        style={{ cursor: hasMore ? 'pointer' : 'default' }}
      >
        <div className={styles.left}>
          <div className={styles.num}>{step.num}</div>
          <div className={styles.icon}>{step.icon}</div>
          <div className={styles.text}>
            {step.when && <span className={styles.when}>{step.when}</span>}
            <div className={styles.title}>{step.title}</div>
            <div className={styles.short}>{step.short}</div>
          </div>
        </div>
        {hasMore && (
          <div className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
            ▾
          </div>
        )}
      </button>

      {open && (
        <div className={styles.body}>
          {step.detail && <p className={styles.detail}>{step.detail}</p>}

          {step.list && (
            <ul className={styles.list}>
              {step.list.map((item, i) => (
                <li key={i} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          )}

          {step.table && (
            <table className={styles.table}>
              <thead>
                <tr>{step.table.headers.map(h => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {step.table.rows.map(row => (
                  <tr key={row.grade}>
                    <td><span className={`${styles.gradePill} ${styles['grade_' + row.gradeColor]}`}>{row.grade}</span></td>
                    <td>{row.quality}</td>
                    <td>{row.payout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {step.tip && (
            <div className={styles.tip}>
              <span className={styles.tipIcon}>💡</span>
              <span>{step.tip}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
