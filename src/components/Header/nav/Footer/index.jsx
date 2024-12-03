import styles from './styles.module.scss';
import { navLinks } from '@/constants';

export default function Index() {
  return (
    <div className={styles.footerContainer}>
      
      <div className={styles.header}>
        <p>Socials</p>
      </div>

      <div className={styles.footer}>
        <a href={navLinks.Linkedin}>Linkedin</a>
        <a href={navLinks.Github}>Github</a>
        <a href={navLinks.Twitter}>Twitter</a>
        <a href={navLinks.Threads}>Threads</a>
      </div>
      
    </div>
  )
}
