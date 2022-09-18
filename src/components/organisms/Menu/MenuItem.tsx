import Link from "next/link";
import styles from "./Menu.module.css";

interface MenuItemProps {
  href: string;
  text: string;
}

const MenuItem = ({ href, text }: MenuItemProps) => {
  const { menuItem, menuItemLink } = styles;

  return (
    <li className={menuItem}>
      <Link href={href}>
        <a className={menuItemLink}>{text}</a>
      </Link>
    </li>
  );
};

export default MenuItem;
