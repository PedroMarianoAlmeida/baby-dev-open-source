import { forwardRef, RefObject, TextareaHTMLAttributes } from "react";

interface TextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errors: {};
}

const TextInput = forwardRef(
  (props: TextInputProps, ref: RefObject<HTMLTextAreaElement>) => {
    const { onChange, onBlur, name, errors, placeholder = name } = props;

    return (
      <div>
        <textarea
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
