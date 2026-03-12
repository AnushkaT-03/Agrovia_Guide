import Step from "./Step";
import styles from "./RoleContent.module.css";
import { ROLES, CONTENT } from "../data/content";

function Callout({ callout }) {
  const isKey = callout.type === "key";
  return (
    <div className={`${styles.callout} ${isKey ? styles.calloutKey : styles.calloutInfo}`}>
      <span className={styles.calloutIcon}>{callout.icon}</span>
      <span dangerouslySetInnerHTML={{
        __html: callout.text.replace(
          /PB2806/g,
          `<strong class="passkey-highlight">PB2806</strong>`
        )
      }} />
    </div>
  );
}

export default function RoleContent({ roleId }) {
  const role = ROLES.find((r) => r.id === roleId);
  const data = CONTENT[roleId];
  if (!role || !data) return null;

  return (
    <div
      className={styles.wrapper}
      style={{ "--accent": role.accent, "--accent-light": role.accentLight, "--gradient": role.gradient }}
    >
      {/* Hero banner */}
      <div className={styles.heroBanner}>
        <div className={styles.heroBg} style={{ background: role.gradient }} />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Role Guide</div>
          <div className={styles.heroTitle}>{role.emoji} {role.title}</div>
          <div className={styles.heroSubtitle}>{role.subtitle}</div>
          <p className={styles.heroIntro}>{data.intro}</p>
        </div>
        <div className={styles.heroBgEmoji}>{role.emoji}</div>
      </div>

      {/* Callout */}
      <Callout callout={data.callout} />

      {/* Sections */}
      {data.sections.map((section, si) => (
        <div key={si} className={styles.section}>
          <div className={styles.sectionLabel}>
            <div className={styles.sectionBar} />
            {section.label}
          </div>
          {section.steps.map((step) => (
            <Step key={step.num} step={step} accent={role.accent} />
          ))}
        </div>
      ))}

      {/* Logout reminder */}
      <div className={styles.logoutNote}>
        <span>🔒</span>
        <span>Always <strong>log out</strong> via the profile icon (top-right) when done on shared or public devices.</span>
      </div>
    </div>
  );
}
