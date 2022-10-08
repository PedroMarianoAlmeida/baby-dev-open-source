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
  // try {
  //   const res = await fetch(`http://localhost:4000/techStack`);
  //   if (res.ok) {
  //     const data = await res.json();
  //     return data;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};
