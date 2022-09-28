const TextInput = ({ register, placeholder, formName, errors }) => {
  console.log(register, placeholder, formName, errors);
  return (
    <div>
      <input {...register[formName]} placeholder={placeholder} />
      <p>{errors[formName]?.message}</p>
    </div>
  );
};

export default TextInput;
