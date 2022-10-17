import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./JobPostForm.module.css";

import { ICompany } from "@services/company";

import TextInput from "@molecules/formComponents/TextInput";
import TextArea from "@molecules/formComponents/TextArea";
import Select from "@molecules/formComponents/Select";
import UserStackSelector from "@organisms/UserStackSelector";
import PostJobNewData from "@molecules/formComponents/PostJobNewData";

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

interface IPostJobData extends IFormInputs {
  status: string;
  createAt: Date;
  modifiedAt: Date;
  curator: string;
  indicatedBy: string;
  blob: string;
}

const schema = yup
  .object({
    title: yup.string().required(),
    company: yup.string().required(),
    description: yup.string().required(),
    location: yup.string().required(),
    requisites: yup.array().required(),
    stack: yup.array().required(),
    url: yup.string().required(),
    source: yup.string().required(),
  })
  .required();

interface JobPostFormProps {
  stackAllOptions: { id: string; name: string; stack: string[] }[];
  requisitesOptions: { id: string; value: string }[];
  curatorData: { id: string; name: string };
  refreshStackAllOptions(): void;
  refreshRequisitesOptions(): void;
  refreshCompanyAutoComplete(): void;
  createJob(data: IPostJobData): Promise<string>;
  companiesAllOptions: ICompany[];
}

const JobPostForm = ({
  stackAllOptions,
  curatorData,
  refreshStackAllOptions,
  requisitesOptions,
  refreshRequisitesOptions,
  createJob,
  companiesAllOptions,
  refreshCompanyAutoComplete,
}: JobPostFormProps) => {
  const [formError, setFormError] = useState("");
  const [backendMessage, setBackendMessage] = useState("");

  console.log(companiesAllOptions);
  const companiesToSelect = companiesAllOptions.map((company) => ({
    id: company.id,
    value: company.name,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    const {
      title,
      company,
      description,
      location,
      requisites,
      stack,
      url,
      source,
    } = data;

    if (stack.length > 5) {
      setFormError("No máximo  5 tecnologias");
      return;
    }

    const indicatedBy = ""; //This come from outside the form - and it is optional
    const now = new Date();

    const jobPost = {
      title,
      company,
      description,
      location,
      requisites,
      stack,
      url,
      source,
      status: "open",
      createAt: now,
      modifiedAt: now,
      curator: curatorData.id,
      indicatedBy,
      blob: `${title} ${company} ${
        curatorData.name
      } ${now.getFullYear()} ${now.getMonth()} ${now.getDay()}`,
    };

    setBackendMessage("Cadastrando...");
    const message = await createJob(jobPost);
    setBackendMessage(message);
    if (message === "Cadastrado com sucesso") {
      setFormError("");
      //reset form fields
    }
  };

  const {
    onChange: onChangeTitle,
    onBlur: onBlurTitle,
    name: nameTitle,
    ref: refTitle,
  } = register("title");

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

  const {
    onChange: onChangeRequisites,
    onBlur: onBlurRequisites,
    name: nameRequisites,
    ref: refRequisites,
  } = register("requisites");

  const {
    onChange: onChangeUrl,
    onBlur: onBlurUrl,
    name: nameUrl,
    ref: refUrl,
  } = register("url");

  const {
    onChange: onChangeSource,
    onBlur: onBlurSource,
    name: nameSource,
    ref: refSource,
  } = register("source");

  return (
    <div id={styles.root}>
      <p>Cadastrar Vaga</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          onChange={onChangeTitle}
          onBlur={onBlurTitle}
          name={nameTitle}
          ref={refTitle}
          errors={errors}
          placeholder="Título"
        />
        <PostJobNewData
          href="/novaEmpresa"
          notFoundText="Não encontrou a empresa? Cadastre-a aqui"
          updateField={refreshCompanyAutoComplete}
          updateText="Após cadastrar, atualize o auto complete"
        />

        <label>Empresa (temporário, será um input com autocomplete)</label>
        <Select
          onChange={onChangeCompany}
          onBlur={onBlurCompany}
          name={nameCompany}
          ref={refCompany}
          errors={errors}
          options={companiesToSelect}
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
        <PostJobNewData
          href="/novoRequisito"
          notFoundText="Não encontrou o Requisito? Cadastre um novo"
          updateField={refreshRequisitesOptions}
          updateText="Após cadastrar, atualize o Select"
        />
        <Select
          onChange={onChangeRequisites}
          onBlur={onBlurRequisites}
          name={nameRequisites}
          ref={refRequisites}
          errors={errors}
          options={requisitesOptions}
          multiple
        />

        <PostJobNewData
          href="/novaStack"
          notFoundText="Não encontrou a Tecnologia? Cadastre uma nova"
          updateField={refreshStackAllOptions}
          updateText="Após cadastrar, atualize o Select"
        />

        <UserStackSelector
          allOptions={stackAllOptions}
          initialSelected={[]}
          control={control} //stack form name is inside this component
        />

        <TextInput
          onChange={onChangeUrl}
          onBlur={onBlurUrl}
          name={nameUrl}
          ref={refUrl}
          errors={errors}
          placeholder="Link"
        />

        <TextInput
          onChange={onChangeSource}
          onBlur={onBlurSource}
          name={nameSource}
          ref={refSource}
          errors={errors}
          placeholder="Fonte"
        />

        <input type="submit" />
        <p>{formError}</p>
        <p>{backendMessage}</p>
      </form>
    </div>
  );
};

export default JobPostForm;
