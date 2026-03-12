import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const sections = [
  { id: 'hero',        label: '🌿 Agrovia' },
  { id: 'roles',       label: 'Roles' },
  { id: 'farmer',      label: '🌾 Farmer' },
  { id: 'ops',         label: '🏭 Ops' },
  { id: 'retailer',    label: '🏪 Retailer' },
  { id: 'consumer',    label: '🛒 Consumer' },
  { id: 'traceability',label: 'QR Trace' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // highlight active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => goto('hero')}>🌿 Agrovia</button>

        {/* Desktop links */}
        <div className={styles.links}>
          {sections.slice(1).map(s => (
            <button
              key={s.id}
              className={`${styles.link} ${active === s.id ? styles.active : ''}`}
              onClick={() => goto(s.id)}
            >{s.label}</button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.drawer}>
          {sections.slice(1).map(s => (
            <button key={s.id} className={styles.drawerLink} onClick={() => goto(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
