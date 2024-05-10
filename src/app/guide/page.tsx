import styles from '@/app/guide/_styles/page.module.css';
import t from '../_lib/t';

export default function Guide() {
  return (
    <main className={styles.container}>
      <h1>{t('guide.available_areas')}</h1>
    </main>
  )
}