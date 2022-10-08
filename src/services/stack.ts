export const getAllStackOptions = async () => {
  try {
    const res = await fetch(`http://localhost:4000/techStack`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createStack = async (data) => {
  console.log("service->", data);
  const { existentGroup, newGroup, name } = data;
  if (newGroup) {
    const body = {
      name: newGroup,
      stack: [name],
    };
    try {
      const res = await fetch(`http://localhost:4000/techStack`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      });
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        return "Cadastrado com sucesso";
      }
      return "Erro";
    } catch (error) {
      console.log(error);
      return "Erro";
    }
  }
};
