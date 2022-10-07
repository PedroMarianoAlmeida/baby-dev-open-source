import { forwardRef, RefObject, TextareaHTMLAttributes } from "react";
import ErrorMessageForm from "@atoms/ErrorMessageForm";
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errors: {};
}

const TextArea = forwardRef(
  (props: TextAreaProps, ref: RefObject<HTMLTextAreaElement>) => {
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

TextArea.displayName = "TextArea";
export default TextArea;
