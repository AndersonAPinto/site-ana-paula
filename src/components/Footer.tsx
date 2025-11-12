import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>Sobre a Semana</h4>
            <p>
              Celebrando o Dia do Profissional Técnico em Segurança do Trabalho com palestras
              especializadas sobre segurança, saúde e bem-estar.
            </p>
          </div>
          <div className={styles.section}>
            <h4>Parceiros</h4>
            <ul>
              <li>Técnico em Segurança do Trabalho</li>
              <li>Técnico em Recursos Humanos</li>
              <li>Técnico em Secretariado</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4>Contato</h4>
            <p>Senac EAD</p>
            <p>Web palestras - Novembro de 2025</p>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottom}>
          <p>&copy; 2025 Senac EAD. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
