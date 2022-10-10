import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextInput from "@molecules/formComponents/TextInput";

import { createRequisite } from "@services/requisites";
import { UserContext } from "@contexts/UserContext";
import { getRequisitesOptions } from "@services/requisites";

interface IFormInputs {
  newRequisite: string;
}

const schema = yup
  .object({
    newRequisite: yup.string(),
  })
  .required();

const PostJobPage = ({ requisitesOptions }) => {
  const { currentUser } = useContext(UserContext);
  const { roles } = currentUser;

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

  if (!roles.includes("curator")) return <p>Página exclusiva de Curadores</p>;

  const onSubmit = async (data: IFormInputs) => {
    const { newRequisite } = data;

    const requisitesNames = requisitesOptions.map(
      (requisite) => requisite.value
    );
    if (requisitesNames.includes(newRequisite)) {
      setFormError("Requisito já cadastrado anteriormente");
      return;
    }
    
    setBackendMessage("Cadastrando...");
    const message = await createRequisite(newRequisite);
    setBackendMessage(message);
    if (message === "Cadastrado com sucesso") {
      setFormError("");
      //reset form fields
    }
  };

  const {
    onChange: onChangeNewRequisite,
    onBlur: onBlurNewRequisite,
    name: nameNewRequisite,
    ref: refNewRequisite,
  } = register("newRequisite");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          onChange={onChangeNewRequisite}
          onBlur={onBlurNewRequisite}
          name={nameNewRequisite}
          ref={refNewRequisite}
          errors={errors}
          placeholder="Novo requisito"
        />

        <input type="submit" />
        <p>{formError}</p>
        <p>{backendMessage}</p>
      </form>
    </>
  );
};

export async function getServerSideProps(context) {
  const requisitesOptions = await getRequisitesOptions();
  return {
    props: {
      requisitesOptions,
    },
  };
}

export default PostJobPage;
