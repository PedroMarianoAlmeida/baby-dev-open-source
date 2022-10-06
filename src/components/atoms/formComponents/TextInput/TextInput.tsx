import React from "react";

const TextInput = React.forwardRef((props, ref) => {
  const { onChange, onBlur, name } = props;

  return (
    <div>
      <input
        onChange={onChange} // assign onChange event
        onBlur={onBlur} // assign onBlur event
        name={name} // assign name prop
        ref={ref} // assig
      />
    </div>
  );
});

export default TextInput;
