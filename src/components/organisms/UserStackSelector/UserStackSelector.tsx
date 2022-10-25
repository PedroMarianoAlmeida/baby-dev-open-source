import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

import styles from "./UserStackSelector.module.css";

import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

const UserStackSelector = ({ control, initialSelected, allOptions }) => (
  <Controller
    control={control}
    name="stack"
    render={({
      field: { onChange, onBlur, value, ref },
      fieldState: { error },
    }) => (
      <UserStackSelectorStructure
        onChange={onChange} // send value to hook form
        //onBlur={onBlur} // notify when input is touched/blur
        //selected={value}
        allOptions={allOptions}
        initialSelected={initialSelected}
        errorMsg={error?.message}
      />
    )}
  />
);

interface UserStackSelectorProps {
  initialSelected: string[];
  allOptions: { name: string; stack: string[] }[];
  onChange(selected: string[]): void;
  errorMsg: string;
}

export const UserStackSelectorStructure = ({
  initialSelected,
  allOptions,
  onChange,
  errorMsg,
}: UserStackSelectorProps) => {
  const [selected, setSelected] = useState(initialSelected);
  const [showOptions, setShowOptions] = useState(false);

  const toggleShowOptions = () => setShowOptions(!showOptions);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

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
      <p>{errorMsg}</p>
      <TopContainer
        selected={selected}
        removeSelected={removeSelected}
        toggleShowOptions={toggleShowOptions}
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
