import { useState } from 'react';
import StepCard from './StepCard.jsx';
import styles from './RoleGuide.module.css';

function PasskeyBox({ passkey }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(passkey).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className={styles.passkeyBox}>
      <div>
        <div className={styles.passkeyLabel}>Pass-Key</div>
        <div className={styles.passkeyValue}>{passkey}</div>
      </div>
      <button className={styles.passkeyBtn} onClick={copy}>
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  );
}

const ROLE_COLORS = {
  farmer:   { bg: '#e8f5ed', accent: 'var(--green)' },
  ops:      { bg: '#fff8ee', accent: 'var(--amber)' },
  retailer: { bg: '#f0f7ff', accent: '#4a90c4' },
  consumer: { bg: '#f5f0ff', accent: '#7c5cbf' },
};

export default function RoleGuide({ role }) {
  const colors = ROLE_COLORS[role.id] || ROLE_COLORS.farmer;

  return (
    <section id={role.id} className={styles.section}>
      <div className={styles.inner}>
        {/* Role Header */}
        <div className={styles.roleHeader} style={{ background: colors.bg }}>
          <div className={styles.roleEmoji}>{role.emoji}</div>
          <div className={styles.roleHeaderText}>
            <div className={styles.roleLabel}>Role Guide</div>
            <h2 className={styles.roleTitle}>{role.title}</h2>
            <p className={styles.roleDesc}>{role.description}</p>
          </div>
        </div>

        {/* Login / Passkey */}
        {role.passkey && (
          <div className={styles.loginBox}>
            <div className={styles.loginText}>
              <span className={styles.loginIcon}>🔑</span>
              <span>
                Go to <a href={role.loginUrl} target="_blank" rel="noreferrer" className={styles.loginLink}>agroviaa.vercel.app</a>
                {' '}→ Select <strong>{role.title}</strong> → Enter your pass-key
              </span>
            </div>
            <PasskeyBox passkey={role.passkey} />
          </div>
        )}

        {/* Sections */}
        {role.sections.map((section) => (
          <div key={section.title} className={styles.sectionBlock}>
            <div className={styles.sectionTitle}>
              <span className={styles.sectionLine} style={{ background: colors.accent }} />
              {section.title}
            </div>
            <div className={styles.steps}>
              {section.steps.map(step => (
                <StepCard key={step.num} step={step} />
              ))}
            </div>
          </div>
        ))}

        {/* Logout reminder */}
        <div className={styles.logoutNote}>
          <span>🔒</span>
          <span>Always log out from shared devices — click the profile avatar (top-right) → Logout to protect account data.</span>
        </div>
      </div>
    </section>
  );
}
