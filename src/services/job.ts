// export const getRequisitesOptions = async () => {
//   try {
//     const res = await fetch(`http://localhost:4000/requisites`);
//     if (res.ok) {
//       const data = await res.json();
//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createJob = async (data) => {
  try {
    const res = await fetch(`http://localhost:4000/jobs`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });

    if (res.ok) {
      return "Cadastrado com sucesso";
    }
    return "Erro";
  } catch (error) {
    console.log(error);
    return "Erro";
  }
};
