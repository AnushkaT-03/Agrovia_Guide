import { useState } from "react";
import Hero from "./components/Hero";
import RoleCard from "./components/RoleCard";
import RoleContent from "./components/RoleContent";
import { ROLES, QR_LIFECYCLE, TIPS } from "./data/content";
import styles from "./App.module.css";

function SectionTitle({ children, sub }) {
  return (
    <div className={styles.sectionTitle}>
      <h2>{children}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export default function App() {
  const [activeRole, setActiveRole] = useState(null);

  function handleRoleClick(id) {
    setActiveRole((prev) => (prev === id ? null : id));
    if (activeRole !== id) {
      setTimeout(() => {
        document.getElementById("role-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }

  return (
    <div className={styles.app}>
      {/* Hero */}
      <Hero />

      {/* Live platform banner */}
      <div className={styles.liveBanner}>
        <span className={styles.liveDot} />
        <span>Live platform: <strong>agroviaa.vercel.app</strong></span>
        <a href="https://agroviaa.vercel.app" target="_blank" rel="noreferrer" className={styles.liveBtn}>
          Open Platform ↗
        </a>
      </div>

      <main className={styles.main}>

        {/* Role picker */}
        <section className={styles.section}>
          <SectionTitle sub="Choose your role and we'll show you exactly what to do — step by step.">
            Who are you on Agrovia?
          </SectionTitle>
          <div className={styles.roleGrid}>
            {ROLES.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                active={activeRole === role.id}
                onClick={() => handleRoleClick(role.id)}
              />
            ))}
          </div>
        </section>

        {/* Role content */}
        <div id="role-content">
          {activeRole ? (
            <section className={styles.section} key={activeRole}>
              <RoleContent roleId={activeRole} />
            </section>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>👆</div>
              <div className={styles.emptyText}>Select a role above to see your step-by-step guide</div>
            </div>
          )}
        </div>

        <div className={styles.divider} />

        {/* QR Traceability */}
        <section className={styles.section}>
          <SectionTitle sub="Every crate gets a unique QR-coded Batch ID. Here's the full journey — field to phone.">
            🔍 How QR Traceability Works
          </SectionTitle>
          <div className={styles.lifecycle}>
            <div className={styles.lifecycleLine} />
            {QR_LIFECYCLE.map((item, i) => (
              <div key={i} className={styles.lcStep}>
                <div className={styles.lcDot}>{item.emoji}</div>
                <div className={styles.lcContent}>
                  <div className={styles.lcTitle}>{item.title}</div>
                  <div className={styles.lcDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.calloutGreen}>
            <span>📱</span>
            <span><strong>No app download required.</strong> Any smartphone camera pointing at an Agrovia QR opens the trace page instantly in-browser.</span>
          </div>
        </section>

        <div className={styles.divider} />

        {/* Tips */}
        <section className={styles.section}>
          <SectionTitle sub="Quick reference for getting the most out of the platform.">
            Helpful Tips
          </SectionTitle>
          <div className={styles.tipsGrid}>
            {TIPS.map((tip, i) => (
              <div key={i} className={styles.tipCard}>
                <div className={styles.tipIcon}>{tip.icon}</div>
                <div className={styles.tipTitle}>
                  {tip.title}
                  {tip.soon && <span className={styles.soon}>Soon</span>}
                </div>
                <div className={styles.tipText}>{tip.text}</div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>🌿 Agrovia</div>
        <div>A transparent, quality-driven agricultural supply chain platform.</div>
        <div>Connecting Farmers · Warehouses · Retailers · Consumers</div>
        <div className={styles.footerSub}>Team Koestler · Sustainability & Environment · Software (Supply Chain)</div>
      </footer>
    </div>
  );
}
