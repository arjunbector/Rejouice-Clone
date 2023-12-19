import styles from "../styles/navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h3 className={styles.head}>The Venture Agency.</h3>
        <h4 className={styles.head}>Menu</h4>
    </nav>
  );
};

export default Navbar;
