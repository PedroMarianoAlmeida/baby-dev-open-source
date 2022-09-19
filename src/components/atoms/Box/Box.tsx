import styles from "./Box.module.css";

const Box = ({ children }) => <div id={styles.root}>{children} </div>;

export default Box;
