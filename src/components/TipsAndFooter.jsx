import { useState } from 'react';
import { tips } from '../data/guideData.js';
import styles from './TipsAndFooter.module.css';

export default function TipsAndFooter() {
  const [copied, setCopied] = useState(null);

  const copy = (key, val) => {
    navigator.clipboard.writeText(val).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <section id="tips" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Quick Reference</span>
            <h2 className={styles.h2}>Helpful Tips for All Users</h2>
          </div>

          <div className={styles.grid}>
            {tips.map(tip => (
              <div key={tip.title} className={styles.card}>
                <div className={styles.cardIcon}>{tip.icon}</div>
                <div className={styles.cardTitle}>
                  {tip.title}
                  {tip.soon && <span className={styles.soon}>Coming Soon</span>}
                </div>
                <p className={styles.cardText}>{tip.text}</p>

                {tip.link && (
                  <a href={tip.link} target="_blank" rel="noreferrer" className={styles.cardLink}>
                    {tip.linkText} ↗
                  </a>
                )}
                {tip.passkey && (
                  <button
                    className={styles.cardLink}
                    onClick={() => copy('pk', tip.passkey)}
                    style={{ cursor: 'pointer', border: 'none', background: 'none', font: 'inherit' }}
                  >
                    {copied === 'pk' ? '✓ Copied!' : `Copy Pass-Key: ${tip.passkey}`}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>🌿 Agrovia</div>
          <p className={styles.footerTagline}>
            A transparent, quality-driven agricultural supply chain platform.<br />
            Connecting Farmers · Warehouses · Retailers · Consumers
          </p>
          <p className={styles.footerCredit}>
            Team Koestler · Sustainability &amp; Environment · Software (Supply Chain)
          </p>
        </div>
      </footer>
    </>
  );
}
