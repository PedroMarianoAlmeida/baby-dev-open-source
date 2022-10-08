export const userLogin = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:4000/users/${id}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
