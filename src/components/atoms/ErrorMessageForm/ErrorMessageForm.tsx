import styles from "./ErrorMessageForm.module.css"

const ErrorMessageForm = ({ text }) => {
  return <p className={styles.errorMessage}>{text}</p>;
};

export default ErrorMessageForm;
