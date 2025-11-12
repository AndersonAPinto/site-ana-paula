import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/senac_logo.png" alt="Senac EAD" />
          <span>Senac EAD</span>
        </Link>

        <button
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Início
          </Link>
          <Link to="/palestra/1" onClick={() => setIsOpen(false)}>
            24 de novembro
          </Link>
          <Link to="/palestra/2" onClick={() => setIsOpen(false)}>
            25 de novembro
          </Link>
          <Link to="/palestra/3" onClick={() => setIsOpen(false)}>
            26 de novembro
          </Link>
          <Link to="/palestra/4" onClick={() => setIsOpen(false)}>
            27 de novembro
          </Link>
        </nav>
      </div>
    </header>
  );
}
