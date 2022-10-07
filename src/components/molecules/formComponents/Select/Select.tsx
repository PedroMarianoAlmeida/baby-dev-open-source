import { forwardRef, RefObject, SelectHTMLAttributes } from "react";
import ErrorMessageForm from "@atoms/ErrorMessageForm";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { id: string; value: string }[];
  errors: {};
}

const Select = forwardRef(
  (props: SelectProps, ref: RefObject<HTMLSelectElement>) => {
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
          {options.map((option) => {
            const { value, id } = option;
            return (
              <option key={id} value={id}>
                {value}
              </option>
            );
          })}
        </select>
        <ErrorMessageForm text={errors[name]?.message} />
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
