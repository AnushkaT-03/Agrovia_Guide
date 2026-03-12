import { qrLifecycle } from '../data/guideData.js';
import styles from './Traceability.module.css';

export default function Traceability() {
  return (
    <section id="traceability" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>End-to-End Tracking</span>
          <h2 className={styles.h2}>How QR Traceability Works</h2>
          <p className={styles.desc}>
            Every crate that enters Agrovia gets a unique QR-coded Batch ID.
            Here's the full lifecycle — from field to your phone.
          </p>
        </div>

        <div className={styles.timeline}>
          {qrLifecycle.map((item, i) => (
            <div key={item.title} className={styles.item}>
              {/* Connector line */}
              <div className={styles.connector}>
                <div className={styles.dot}>{item.icon}</div>
                {i < qrLifecycle.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.step}>Step {i + 1}</div>
                <div className={styles.title}>{item.title}</div>
                <p className={styles.desc2}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callout}>
          <span>📱</span>
          <span>
            <strong>No app download required.</strong> Any smartphone camera pointing at an Agrovia QR code
            opens the trace page directly in the browser.
          </span>
        </div>
      </div>
    </section>
  );
}
