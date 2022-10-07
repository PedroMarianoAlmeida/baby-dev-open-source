import { forwardRef, RefObject, TextareaHTMLAttributes } from "react";
import ErrorMessageForm from "@atoms/ErrorMessageForm";
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
       <ErrorMessageForm text={errors[name]?.message} />
      </div>
    );
  }
);

export default TextInput;
