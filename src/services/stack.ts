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

export const createStack = async (groupName: string, stackName: string) => {
  try {
    const res = await fetch(`http://localhost:4000/techStack`, {
      method: "POST",
      body: JSON.stringify({
        name: groupName,
        stack: [stackName],
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

export const updateStack = async (groupId: string, stacksUpdated: string[]) => {
  try {
    const res = await fetch(`http://localhost:4000/techStack/${groupId}`, {
      method: "PUT",
      body: JSON.stringify({
        stack: stacksUpdated,
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
