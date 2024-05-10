import styles from '@/app/guide/_styles/page.module.css';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.container}>
      <div>My area: {params.slug}</div>
    </main>
  )
}