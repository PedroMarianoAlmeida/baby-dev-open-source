import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextInput from "@molecules/formComponents/TextInput";

import { createStack, updateStack } from "@services/stack";
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
    console.log(data);
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
