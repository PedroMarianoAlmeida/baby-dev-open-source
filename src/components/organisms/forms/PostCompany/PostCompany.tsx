import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextInput from "@molecules/formComponents/TextInput";
interface IFormInputs {
  name: string;
  logo: string;
  website: string;
  linkedin: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    logo: yup.string().required(),
    website: yup.string().required(),
    linkedin: yup.string().required(),
  })
  .required();

const PostCompany = ({ createCompany }) => {
  const [formError, setFormError] = useState("");
  const [backendMessage, setBackendMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    setBackendMessage("Cadastrando...");
    const message = await createCompany(data);
    setBackendMessage(message);
    if (message === "Cadastrado com sucesso") {
      setFormError("");
      //reset form fields
    }

    console.log(data);
  };

  const {
    onChange: onChangeName,
    onBlur: onBlurName,
    name: nameName,
    ref: refName,
  } = register("name");

  const {
    onChange: onChangeLogo,
    onBlur: onBlurLogo,
    name: nameLogo,
    ref: refLogo,
  } = register("logo");

  const {
    onChange: onChangeWebsite,
    onBlur: onBlurWebsite,
    name: nameWebsite,
    ref: refWebsite,
  } = register("website");

  const {
    onChange: onChangeLikedInProfile,
    onBlur: onBlurLikedInProfile,
    name: nameLikedInProfile,
    ref: refLikedInProfile,
  } = register("linkedin");

  return (
    <>
      <p>Cadastrar Empresa</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          onChange={onChangeName}
          onBlur={onBlurName}
          name={nameName}
          ref={refName}
          errors={errors}
          placeholder="Nome empresa"
        />

        <TextInput
          onChange={onChangeLogo}
          onBlur={onBlurLogo}
          name={nameLogo}
          ref={refLogo}
          errors={errors}
          placeholder="Logo url"
        />

        <TextInput
          onChange={onChangeWebsite}
          onBlur={onBlurWebsite}
          name={nameWebsite}
          ref={refWebsite}
          errors={errors}
          placeholder="Site oficial"
        />

        <TextInput
          onChange={onChangeLikedInProfile}
          onBlur={onBlurLikedInProfile}
          name={nameLikedInProfile}
          ref={refLikedInProfile}
          errors={errors}
          placeholder="Perfil LinkedIn"
        />

        <input type="submit" />

        <p>{formError}</p>
        <p>{backendMessage}</p>
      </form>
    </>
  );
};

export default PostCompany;
