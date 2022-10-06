import { forwardRef, InputHTMLAttributes, RefObject } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors: {};
}

const TextInput = forwardRef(
  (props: TextInputProps, ref: RefObject<HTMLInputElement>) => {
    const { onChange, onBlur, name, errors, placeholder = name } = props;

    return (
      <div>
        <input
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        <p>{errors[name]?.message}</p>
      </div>
    );
  }
);

export default TextInput;
