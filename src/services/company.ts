export interface ICompany {
  id: number;
  name: string;
  logo: string;
  webSite: string;
  linkedin: string;
}

export const addCompanyDataInJob = async (jobs) => {
  const companiesId: string[] = jobs.map((job) => job.company);
  const companiesUniqueId: string[] = [...new Set(companiesId)];
  console.log({ companiesUniqueId });
  const companiesData: ICompany[] = await getCompaniesData(companiesUniqueId);
  const jobsWithCompanyData = jobs.map((job) => ({
    ...job,
    companyData: companiesData.find((company) => company.id === job.company),
  }));
  return jobsWithCompanyData;
};

export const getCompaniesData = async (companiesId: string[]) => {
  const companiesQuery = companiesId.map(
    (companyId: string) => `id=${companyId}&`
  );
  const companiesQueryUrl = `?${companiesQuery.join("").slice(0, -1)}`; //Slice remove the  last "&'

  try {
    const res = await fetch(
      `http://localhost:4000/companies${companiesQueryUrl}`
    );

    if (res.ok) {
      const data: ICompany[] = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createCompany = async (data) => {
  try {
    const res = await fetch(`http://localhost:4000/companies`, {
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

export const isCompanyAlreadyRegistered = async (companyName: string) => {
  try {
    const res = await fetch(
      `http://localhost:4000/companies?name=${companyName}`
    );
    if (res.ok) {
      const data: ICompany[] | [] = await res.json();
      return data.length > 0;
    }
    return "Erro";
  } catch (error) {
    console.log(error);
    return "Erro";
  }
};

export const getAllCompaniesData = async (): Promise<ICompany[]> => {
  try {
    const res = await fetch(`http://localhost:4000/companies`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
