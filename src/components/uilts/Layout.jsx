import styles from "./Layout.module.css";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <div className={styles.dashboard_navbar}>
        <h1> ERP System</h1>
      </div>
      <div className={styles.inner_container}>
        <SideBar />
        <div className={styles.layout_children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
