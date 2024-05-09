import areas from "@/data/areas";
import styles from "@/app/_styles/page.module.css";
import t from "./_lib/t";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles['title-container']}>
        <h1>
          {t("home.climbing_guide")} <br /> {t("san_carlos_de_bariloche")}
        </h1>
        <p className={styles.explain}>{t("home.climbing_guide_explain")}</p>
      </div>

      <div className={styles['help-container']}>
        <div className={styles['help-item']}>
          <div className={styles.suggestionIcon}>WARNING ICON</div>
          <h3>{t('home.suggestions')}</h3>
          <p>{t('home.suggestions_explain')}</p>
        </div>
        <div className={styles['help-list']}>
          <div className={styles['help-item']}>
            <div className={styles.suggestionIcon}>HELMET ICON</div>
            <p>{t('home.helmet_explain')}</p>
          </div>
          <div className={styles['help-item']}>
            <div className={styles.suggestionIcon}>NO_FIRE ICON</div>
            <p>{t('home.no_fire_explain')}</p>
          </div>
          <div className={styles['help-item']}>
            <div className={styles.suggestionIcon}>GRADE ICON</div>
            <p>{t('home.grade_explain')}</p>
          </div>
        </div>
      </div>

      <div className={styles['guide-container']}>
        <h2>{t('home.guides')}</h2>
        <p>{t('home.some_guides')}</p>
        <div className={styles['areas-container']}>
          {areas.map((area) => {
            return (
              <div key={area.name} className={styles['area-item']}>
                <p className={styles['area-name']}>{area.name}</p>
              </div>
            )
          })}
        </div>
        <div className={styles['button-container']}>
          <Link href="#" className={styles.button}>
            {t('home.go_to_areas')}
          </Link>
        </div>
      </div>
    </main>
  );
}
