import { Link } from 'react-router-dom';
import { Calendar, Users, Shield, ArrowRight } from 'lucide-react';
import { palestras } from '../data/palestra';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.badge}>Novembro de 2025</div>
            <h1>Semana de Palestras</h1>
            <p className={styles.subtitle}>
              Celebrando o Dia do Profissional de Segurança do Trabalho
            </p>
            <p className={styles.description}>
              Uma jornada de 4 dias com especialistas discutindo temas essenciais para
              a segurança, saúde e bem-estar no ambiente corporativo.
            </p>
            <div className={styles.cta}>
              <a href="#palestras" className={styles.btnPrimary}>
                Conheça as Palestras
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className={styles.illustration}>
            <img src="/images/templates/profissionais-seguranca-trabalho.jpeg" alt="Seguranca" style={{ width: '480px', height: '480px', borderRadius: '50%' }} />
          </div>
        </div>
      </section>

      <section className={styles.highlights}>
        <div className={styles.container}>
          <h2>Por que participar?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Users size={40} />
              </div>
              <h3>Experts Renomados</h3>
              <p>Palestras conduzidas por profissionais especializados.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Calendar size={40} />
              </div>
              <h3>Flexibilidade de Horários</h3>
              <p>Todas as palestras às 20h às 21h, facilitando sua participação.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
               <Shield size={40} />
              </div>
              <h3>Conteúdo Relevante</h3>
              <p>Tópicos atuais e práticos para sua evolução profissional.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="palestras" className={styles.palestras}>
        <div className={styles.container}>
          <h2>Palestras da Semana</h2>
          <div className={styles.palestrasGrid}>
            {palestras.map((palestra) => (
              <Link
                key={palestra.id}
                to={`/palestra/${palestra.id}`}
                className={styles.palestraCard}
              >
                <div className={styles.date}>
                  <span className={styles.day}>{palestra.day}</span>
                  <span className={styles.month}>Nov</span>
                </div>
                <div className={styles.info}>
                  <h3>{palestra.theme}</h3>
                  <p className={styles.time}>{palestra.time}</p>
                  <p className={styles.speakers}>3 especialistas</p>
                </div>
                {/*<ArrowRight size={20} className={styles.arrow} />*/}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.infoCard}>
            <h3>Informações Importantes</h3>
            <ul>
              <li>
                <strong>Formato:</strong> Web palestras ao vivo via Collab
              </li>
              <li>
                <strong>Data:</strong> 24 a 27 de novembro de 2025
              </li>
              <li>
                <strong>Horário:</strong> 20h às 21h (todos os dias)
              </li>
              <li>
                <strong>Público:</strong> Aberto para alunos e profissionais da área
              </li>
              <li>
                <strong>Certificado:</strong> Será emitido certificado de participação
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}