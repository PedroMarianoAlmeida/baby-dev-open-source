import Image from "next/image";

import styles from "./TopContainer.module.css";
import StackBadge from "@atoms/StackBadge";

interface TopContainerProps {
  selected: string[];
  removeSelected(id: string): void;
  toggleShowOptions: () => void;
}

const TopContainer = ({
  selected,
  removeSelected,
  toggleShowOptions
}: TopContainerProps) => {
  const { searchContainer, selectedContainer, stackBadgeContainer } = styles;

  const handleRemoveSelected = (
    e: React.SyntheticEvent<EventTarget>,
    id: string
  ) => {
    removeSelected(id);
    e.stopPropagation();
  };

  return (
    <div id={searchContainer} onClick={toggleShowOptions}>
      <Image src={"/icons/magnifying-glass.svg"} width={22} height={22} />
      <div id={selectedContainer}>
        {selected.map((stack) => (
          <div
            onClick={(e) => handleRemoveSelected(e, stack)}
            key={stack}
            id={stackBadgeContainer}
            className="cursor-pointer"
          >
            <StackBadge name={stack}>
              <Image src={"/icons/close.svg"} width={8} height={8} />
            </StackBadge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopContainer;
