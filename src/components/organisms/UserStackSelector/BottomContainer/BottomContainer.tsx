import { useEffect, useState } from "react";

import useDebounce from "src/hooks/useDebounce";
import styles from "./BottomContainer.module.css";
import StackBadge from "@atoms/StackBadge";

interface BottomContainerProps {
  showOptions: boolean;
  setShowOptions(option: boolean): void;
  options: { name: string; stack: string[] }[];
  selected: string[];
  addSelected(name: string): void;
  removeSelected(id: string): void;
}

const BottomContainer = ({
  showOptions,
  setShowOptions,
  options,
  selected,
  addSelected,
  removeSelected,
}: BottomContainerProps): JSX.Element | null => {
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);
  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

  useEffect(() => {
    if (debouncedIsMouseLeavesMenu) {
      setShowOptions(false);
      setIsMouseLeavesMenu(false);
    }
  }, [debouncedIsMouseLeavesMenu]);

  const { stackContainer } = styles;

  if (!showOptions) return null;

  return (
    <div
      id={stackContainer}
      onMouseLeave={() => setIsMouseLeavesMenu(true)}
      onMouseEnter={() => setIsMouseLeavesMenu(false)}
    >
      {options.map((optionGroup) => (
        <OptionGroup
          key={optionGroup.name}
          optionGroup={optionGroup}
          selected={selected}
          addSelected={addSelected}
          removeSelected={removeSelected}
        />
      ))}
    </div>
  );
};

interface OptionGroupProps {
  optionGroup: { name: string; stack: string[] };
  selected: string[];
  addSelected(name: string): void;
  removeSelected(id: string): void;
}

const OptionGroup = ({
  optionGroup,
  selected,
  addSelected,
  removeSelected,
}: OptionGroupProps) => {
  const { name, stack } = optionGroup;

  const handleClick = (name: string) => {
    const isSelected = selected.includes(name);
    isSelected ? removeSelected(name) : addSelected(name);
  };

  const { stackGroupTitle, stacksGroupContainer } = styles;
  return (
    <>
      <h3 className={stackGroupTitle}>{name}</h3>
      <div className={stacksGroupContainer}>
        {stack.map((option) => (
          <div
            key={`${name}-${option}`}
            onClick={() => handleClick(option)}
            className="cursor-pointer"
          >
            <StackBadge name={option} isSelected={selected.includes(option)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BottomContainer;
