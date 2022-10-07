import { forwardRef, InputHTMLAttributes, RefObject } from "react";
import ErrorMessageForm from "@atoms/ErrorMessageForm";

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

        <ErrorMessageForm text={errors[name]?.message} />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
