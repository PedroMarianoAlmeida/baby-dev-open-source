export const getRequisitesOptions = async () => {
  try {
    const res = await fetch(`http://localhost:4000/requisites`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createRequisite = async (requisiteName: string) => {
  try {
    const res = await fetch(`http://localhost:4000/requisites`, {
      method: "POST",
      body: JSON.stringify({
        value: requisiteName,
      }),
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
