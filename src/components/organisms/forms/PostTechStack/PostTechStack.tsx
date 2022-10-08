import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextInput from "@molecules/formComponents/TextInput";
import Select from "@molecules/formComponents/Select";

interface IFormInputs {
  existentGroup: string;
  newGroup: string;
  name: string;
}

const schema = yup
  .object({
    existentGroup: yup.string(),
    newGroup: yup.string(),
    name: yup.string().required(),
  })
  .required();

const PostTechStack = ({ stackAllOptions, createStack, updateStack }) => {
  const [formError, setFormError] = useState("");
  const [backendMessage, setBackendMessage] = useState("");

  const stackGroupsToSelect = stackAllOptions.map((group) => ({
    value: group.name,
    id: group.id,
  }));
  const stackGroupsNames = stackGroupsToSelect.map((group) => group.value);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    const { existentGroup, newGroup, name } = data;
    if (existentGroup !== "" && newGroup !== "") {
      setFormError("Marcar apenas um dos campos de Grupo");
      return;
    }
    if (stackGroupsNames.includes(newGroup)) {
      setFormError("Grupo ja existente, buscar no Select");
      return;
    }
    let message = "";
    setBackendMessage("Cadastrando...");
    if (newGroup) {
      message = await createStack(newGroup, name);
    } else {
      const groupToChange = stackAllOptions.find(
        (group) => Number(existentGroup) === group.id
      );
      if (groupToChange.stack.includes(name)) {
        setFormError("Tecnologia já cadastrada anteriormente");
        setBackendMessage("");
        return;
      }
      const newStackArray = [...groupToChange.stack, name];
      message = await updateStack(existentGroup, newStackArray);
    }

    setBackendMessage(message);
    if (message === "Cadastrado com sucesso") {
      setFormError("");
      //reset form fields
    }
  };

  const {
    onChange: onChangeExistentGroup,
    onBlur: onBlurExistentGroup,
    name: nameExistentGroup,
    ref: refExistentGroup,
  } = register("existentGroup");

  const {
    onChange: onChangeNewGroup,
    onBlur: onBlurNewGroup,
    name: nameNewGroup,
    ref: refNewGroup,
  } = register("newGroup");

  const {
    onChange: onChangeName,
    onBlur: onBlurName,
    name: nameName,
    ref: refName,
  } = register("name");

  return (
    <>
      <p>Cadastrar Tecnologia</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Selecionar grupo existente</label>
        <Select
          onChange={onChangeExistentGroup}
          onBlur={onBlurExistentGroup}
          name={nameExistentGroup}
          ref={refExistentGroup}
          errors={errors}
          options={stackGroupsToSelect}
        />

        <label>Caso não seja de nenhum, escrever nome do novo grupo</label>
        <TextInput
          onChange={onChangeNewGroup}
          onBlur={onBlurNewGroup}
          name={nameNewGroup}
          ref={refNewGroup}
          errors={errors}
          placeholder="Grupo"
        />

        <label>Nome da tecnologia</label>
        <TextInput
          onChange={onChangeName}
          onBlur={onBlurName}
          name={nameName}
          ref={refName}
          errors={errors}
          placeholder="Nome tecnologia"
        />

        <input type="submit" />

        <p>{formError}</p>
        <p>{backendMessage}</p>
      </form>
    </>
  );
};

export default PostTechStack;
