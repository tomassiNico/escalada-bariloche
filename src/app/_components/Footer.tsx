import styles from "@/app/_styles/_components/Footer.module.css";
import t from "@/app/_lib/t";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['container']}>
        <p className={styles['title']}>{t('footer.contact')}</p>
        <p>{t('san_carlos_de_bariloche')}</p>
        <p>info@escaladabariloche.com</p>
        <Link href="http://instagram.com/escaladabariloche">Instagram</Link>
      </div>
      <div className={styles['container']}>
        <p className={styles['title']}>{t('footer.links')}</p>
        <p><Link href="/">{t('navbar.home')}</Link></p>
        <p><Link href="/guide">{t('navbar.guide')}</Link></p>
        <p><Link href="#">{t('navbar.project')}</Link></p>
        <p><Link href="#">{t('navbar.contact')}</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
