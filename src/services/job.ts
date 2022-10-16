export const getRecentJobs = async () => {
  try {
    const res = await fetch(
      `http://localhost:4000/jobs?_sort=modifiedAts&_order=desc&_start=0&_limit=10&status=open`
    );
    if (res.ok) {
      const data = await res.json();
      const companiesId = data.map((job) => job.company);
      const companiesData = await getCompaniesData(companiesId);
      console.log(companiesData);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

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

const getCompaniesData = async (companiesId: string[]) => {
  const companiesQuery = companiesId.map(
    (companyId: string) => `id=${companyId}&`
  );
  const companiesQueryUrl = `?${companiesQuery.slice(0, -1)}`; //Slice remove the  last "&'

  try {
    const res = await fetch(
      `http://localhost:4000/companies${companiesQueryUrl}`
    );

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
