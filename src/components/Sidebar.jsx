import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import APPNav from "./APPNav";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <APPNav />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}
