import styles from './SpeakerCard.module.css';

interface SpeakerCardProps {
  name: string;
  bio: string;
  image: string;
}

export function SpeakerCard({ name, bio, image }: SpeakerCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}
