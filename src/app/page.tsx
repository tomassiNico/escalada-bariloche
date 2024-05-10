import areas from "@/data/areas";
import styles from "@/app/_styles/page.module.css";
import t from "./_lib/t";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles["title-container"]}>
        <h1>
          {t("home.climbing_guide")} <br /> {t("san_carlos_de_bariloche")}
        </h1>
        <p className={styles.explain}>{t("home.climbing_guide_explain")}</p>
      </div>

      <div className={styles["help-container"]}>
        <div className={styles["help-item"]}>
          <div className={styles.suggestionIcon}>
            <Image
              src="/icons/warning.png"
              width={100}
              height={100}
              alt="warning"
            />
          </div>
          <h3>{t("home.suggestions")}</h3>
          <p>{t("home.suggestions_explain")}</p>
        </div>
        <div className={styles["help-list"]}>
          <div className={styles["help-item"]}>
            <div className={styles.suggestionIcon}>
              <Image
                src="/icons/helmet.png"
                width={100}
                height={100}
                alt="warning"
              />
            </div>
            <p>{t("home.helmet_explain")}</p>
          </div>
          <div className={styles["help-item"]}>
            <div className={styles.suggestionIcon}>
              <Image
                src="/icons/no-fire.png"
                width={100}
                height={100}
                alt="no-fire"
              />
            </div>
            <p>{t("home.no_fire_explain")}</p>
          </div>
          <div className={styles["help-item"]}>
            <div className={styles.suggestionIcon}>
              <Image
                src="/icons/speedometer.png"
                width={100}
                height={100}
                alt="speedometer"
              />
            </div>
            <p>{t("home.grade_explain")}</p>
          </div>
        </div>
      </div>

      <div className={styles["guide-container"]}>
        <h2>{t("home.guides")}</h2>
        <p>{t("home.some_guides")}</p>
        <div className={styles["areas-container"]}>
          {areas.map((area) => {
            return (
              <Link href={`/guide/${area.slug}`} key={area.name} className={styles["area-item"]}>
                <Image src={area.cover} fill alt="cover" />
                <p className={styles["area-name"]}>{area.name}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles["button-container"]}>
          <Link href="/guide" className={styles.button}>
            {t("home.go_to_areas")}
          </Link>
        </div>
      </div>
    </main>
  );
}
