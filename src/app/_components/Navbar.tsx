import styles from "@/app/_styles/_components/Navbar.module.css";
import t from "@/app/_lib/t";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/escaladabariloche.png"
            alt="Escalada Bariloche Logo"
            width={250}
            height={100}
            priority
          />
        </div>
        <input
          type="checkbox"
          id="nav-toggle"
          className={styles["nav-toggle"]}
        />
        <ul className={styles["nav-links"]}>
          <li>
            <Link href="/">{t("navbar.home")}</Link>
          </li>
          <li>
            <Link href="/guide">{t("navbar.guide")}</Link>
          </li>
          <li>
            <Link href="#">{t("navbar.project")}</Link>
          </li>
          <li>
            <Link href="#">{t("navbar.contact")}</Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className={styles["nav-toggle-label"]}>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
