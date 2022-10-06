import React from "react";

const TextInput = React.forwardRef((props, ref) => {
  const { onChange, onBlur, name, errors, placeholder = name } = props;
  console.log(name);
  return (
    <div>
      <input
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        placeholder={placeholder}
      />
      <p>{errors[name]?.message}</p>
    </div>
  );
});

export default TextInput;
