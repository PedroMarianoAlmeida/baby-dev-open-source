import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./JobPostForm.module.css";

interface IFormInputs {
  company: string;
  description: string;
  location: string;
  requisites: string[];
  stack: string[];
  title: string;
  url: string;
  source: string;
  firstName: string;
  age: number;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const JobPostForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => {
    //add extra data here: closed, createdAt, modifiedAt, curator, who indicates, blob
    console.log(data);
  };

  return (
    <div id={styles.root}>
      <p>JobPostForm</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <p>{errors.firstName?.message}</p>

        <input {...register("age")} />
        <p>{errors.age?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default JobPostForm;
