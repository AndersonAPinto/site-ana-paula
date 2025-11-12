import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <img src="/senac_logo.png" alt="Senac EAD" style={{ width: '100px', height: '100px', borderRadius: '10%' }}/>
          </div>
          <div className={styles.section}>
            <h4>Sobre a Semana</h4>
            <p>
              Celebrando o Dia do Profissional de Segurança do Trabalho com palestras
              especializadas sobre segurança, saúde e bem-estar.
            </p>
          </div>
          <div className={styles.section}>
            <h4>Parceiros</h4>
            <ul>
              <li><a className={styles.link} href="https://www.ead.senac.br/cursos-tecnicos/tecnico-em-seguranca-do-trabalho/" target="_blank">Técnico em Segurança do Trabalho</a></li>
              <li><a className={styles.link} href="https://www.ead.senac.br/cursos-tecnicos/tecnico-em-recursos-humanos/" target="_blank">Técnico em Recursos Humanos</a></li>
              <li><a className={styles.link} href=" https://www.ead.senac.br/cursos-tecnicos/tecnico-em-secretariado/" target="_blank">Técnico em Secretariado</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            
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
