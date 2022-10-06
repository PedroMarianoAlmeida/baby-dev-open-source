import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./JobPostForm.module.css";

import TextInput from "@atoms/formComponents/TextInput";

interface IFormInputs {
  company: string;
  description: string;
  location: string;
  requisites: string[];
  stack: string[];
  title: string;
  url: string;
  source: string;
}

const schema = yup
  .object({
    company: yup.string().required(),
    //description: yup.number().positive().integer().required(),
    location: yup.string().required(),
  })
  .required();

const JobPostForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    //add extra data here: closed, createdAt, modifiedAt, curator, who indicates, blob
    console.log("submit->", data);
  };

  const { onChange, onBlur, name, ref } = register("location");
  //console.log(watch("location"));
  return (
    <div id={styles.root}>
      <p>JobPostForm</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("company")} placeholder="Empresa" />
        <p>{errors.company?.message}</p>

        <TextInput
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
          errors={errors}
          placeholder="Localização"
        />

        {/* <input {...register("description")} placeholder="Descrição da vaga" />
        <p>{errors.description?.message}</p> */}

        <input type="submit" />
      </form>
    </div>
  );
};

export default JobPostForm;
