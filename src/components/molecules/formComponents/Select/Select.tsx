import { forwardRef, RefObject, SelectHTMLAttributes } from "react";
import ErrorMessageForm from "@atoms/ErrorMessageForm";

interface TextInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { id: string; value: string }[];
  errors: {};
}

const TextInput = forwardRef(
  (props: TextInputProps, ref: RefObject<HTMLSelectElement>) => {
    const { onChange, onBlur, name, errors, options } = props;

    return (
      <div>
        <select
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
          {...props}
        >
          <option value="">Selecionar</option>
          {options.map((option) => (
            <option value={option.id}>{option.value}</option>
          ))}
        </select>
        <ErrorMessageForm text={errors[name]?.message} />
      </div>
    );
  }
);

export default TextInput;
