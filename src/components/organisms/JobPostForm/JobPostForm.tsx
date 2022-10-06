import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./JobPostForm.module.css";

import TextInput from "@molecules/formComponents/TextInput";
import TextArea from "@molecules/formComponents/TextArea";

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
    description: yup.string().required(),
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

  const {
    onChange: onChangeCompany,
    onBlur: onBlurCompany,
    name: nameCompany,
    ref: refCompany,
  } = register("company");

  const {
    onChange: onChangeDescription,
    onBlur: onBlurDescription,
    name: nameDescription,
    ref: refDescription,
  } = register("description");

  const {
    onChange: onChangeLocation,
    onBlur: onBlurLocation,
    name: nameLocation,
    ref: refLocation,
  } = register("location");

  //console.log(watch("location"));
  return (
    <div id={styles.root}>
      <p>Cadastrar Vaga</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          onChange={onChangeCompany}
          onBlur={onBlurCompany}
          name={nameCompany}
          ref={refCompany}
          errors={errors}
          placeholder="Empresa"
        />

        <TextArea
          onChange={onChangeDescription}
          onBlur={onBlurDescription}
          name={nameDescription}
          ref={refDescription}
          errors={errors}
          placeholder="Descrição"
          rows={5}
          cols={33}
        />

        <TextInput
          onChange={onChangeLocation}
          onBlur={onBlurLocation}
          name={nameLocation}
          ref={refLocation}
          errors={errors}
          placeholder="Localização"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default JobPostForm;
