import Link from "next/link";
import styles from "./Menu.module.css";

const Logo = () => (
  <Link href="./">
    <div className="cursor-pointer">
      <span id={styles.logoSpan}>👶</span>
      💻
    </div>
  </Link>
);
export default Logo;
