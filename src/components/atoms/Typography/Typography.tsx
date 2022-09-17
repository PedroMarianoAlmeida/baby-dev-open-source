import styles from "./Typography.module.css";

export type TypographyProps = {
  children: React.ReactNode;
  variant: "h1" | "h2";
};

export function Typography({ children, variant }) {
  const Component = variant;

  return (
    <Component className={styles[variant]}>
      {children}
    </Component>
  );
}
