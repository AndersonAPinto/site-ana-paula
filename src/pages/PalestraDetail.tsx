import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ArrowLeft, ExternalLink, Video } from 'lucide-react';
import { palestras } from '../data/palestra';
import { SpeakerCard } from '../components/SpeakerCard';
import styles from './PalestraDetail.module.css';

export function PalestraDetail() {
  const { id } = useParams();
  const palestra = palestras.find((p) => p.id === parseInt(id || '0'));

  if (!palestra) {
    return (
      <div className={styles.notFound}>
        <h1>Palestra não encontrada</h1>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          Voltar para início
        </Link>
      </div>
    );
  }

  const getPalestraStatus = () => {
    const hoje = new Date();
    
    // Para testes, descomente uma das linhas abaixo:
    // const hoje = new Date('2025-11-24T12:00:00'); // Simula dia 24
    // const hoje = new Date('2025-11-25T12:00:00'); // Simula dia 25
    // const hoje = new Date('2025-11-26T12:00:00'); // Simula dia 26
    // const hoje = new Date('2025-11-27T12:00:00'); // Simula dia 27
    
    // Normaliza a data de hoje (apenas ano, mês, dia)
    const hojeData = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    
    // Cria a data da palestra a partir da string (formato: '2025-11-24')
    const [ano, mes, dia] = palestra.date.split('-').map(Number);
    const palestraData = new Date(ano, mes - 1, dia);
    
    if (hojeData.getTime() < palestraData.getTime()) {
      return 'before'; // Antes da palestra
    } else if (hojeData.getTime() === palestraData.getTime()) {
      return 'today'; // No dia da palestra
    } else {
      return 'after'; // Depois da palestra
    }
  };

  const statusPalestra = getPalestraStatus();

  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <Link to="/" className={styles.backButton}>
          <ArrowLeft size={20} />
          Voltar
        </Link>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.dateBox}>
            <span className={styles.day}>{palestra.day}</span>
            <span className={styles.month}>Novembro</span>
          </div>
          <div className={styles.content}>
            <h1>{palestra.theme}</h1>
            <p className={styles.description}>{palestra.description}</p>

            <div className={styles.infos}>
              <div className={styles.infoItem}>
                <Clock size={20} />
                <div>
                  <strong>Horário</strong>
                  <p>{palestra.time}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Video size={20} />
                <div>
                  <strong>Plataforma</strong>
                  <p>Collab</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Users size={20} />
                <div>
                  <strong>Especialistas</strong>
                  <p>3 profissionais renomados</p>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              {statusPalestra === 'today' && (
              <a
                href={palestra.collabLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnInscription}
              >
                Acessar a palestra
                <ExternalLink size={18} /> 
              </a>
              )}
              {statusPalestra === 'after' && (
              <a
                href={palestra.inscriptionLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnCollab}
              >
                Assista a Gravação
                <Video size={18} />
              </a>
              )}
              {statusPalestra === 'before' && (
                <div className={styles.waitingMessage}>
                  <p>A palestra será disponibilizada no dia {palestra.dateFormatted}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.speakers}>
        <div className={styles.container}>
          <h2>Especialistas que vão conduzir esta palestra</h2>
          <div className={styles.speakersGrid}>
            {palestra.speakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                name={speaker.name}
                bio={speaker.bio}
                image={speaker.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.moreInfo}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Sobre esta palestra</h3>
            <p>{palestra.description}</p>

            <h4>O que você vai aprender:</h4>
            <ul>
              <li>Conceitos fundamentais relacionados ao tema</li>
              <li>Práticas recomendadas pela indústria</li>
              <li>Cases de sucesso e experiências práticas</li>
              <li>Estratégias aplicáveis ao seu contexto profissional</li>
            </ul>

            <h4>Informações importantes:</h4>
            <ul>
              <li>Certificado de participação será emitido após a palestra</li>
              <li>A sessão será gravada e disponibilizada posteriormente</li>
              <li>Aberto para perguntas ao final da apresentação</li>
              <li>Recomenda-se conexão estável à internet</li>
            </ul>
          </div>

          <div className={styles.otherPalestras}>
            <h3>Confira as outras palestras da semana</h3>
            <div className={styles.otherPalestrasGrid}>
              {palestras
                .filter((p) => p.id !== palestra.id)
                .map((p) => (
                  <Link key={p.id} to={`/palestra/${p.id}`} className={styles.otherCard}>
                    <span className={styles.otherDate}>{p.day} Nov</span>
                    <span className={styles.otherTheme}>{p.theme}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
