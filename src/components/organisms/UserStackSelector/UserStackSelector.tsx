import { useState, useEffect } from "react";

import styles from "./UserStackSelector.module.css";

import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

interface UserStackSelectorProps {
  initialSelected: string[];
  allOptions: { name: string; stack: string[] }[];
}

const UserStackSelector = ({
  initialSelected,
  allOptions,
}: UserStackSelectorProps) => {
  const [selected, setSelected] = useState(initialSelected);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setSelected(initialSelected);
  }, [initialSelected]);

  const removeSelected = (name: string) => {
    const newSelected = selected.filter((stack) => stack !== name);
    setSelected(newSelected);
  };

  const addSelected = (name: string) => {
    const newSelected = [...selected, name];
    setSelected(newSelected);
  };

  const { root } = styles;

  return (
    <div id={root}>
      <TopContainer
        selected={selected}
        removeSelected={removeSelected}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
      <BottomContainer
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        options={allOptions}
        selected={selected}
        addSelected={addSelected}
        removeSelected={removeSelected}
      />
    </div>
  );
};

export default UserStackSelector;
