import styles from "./StackBadge.module.css";

interface StackBadgeProps {
  name: string;
  isSelected?: boolean;
  children?: JSX.Element;
}

const StackBadge = ({ name, isSelected, children }: StackBadgeProps) => {
  const { root, selected, complement } = styles;

  return (
    <h6 id={root} className={isSelected ? selected : ""}>
      {name}
      {children ? <span id={complement}>{children}</span> : null}
    </h6>
  );
};
export default StackBadge;
