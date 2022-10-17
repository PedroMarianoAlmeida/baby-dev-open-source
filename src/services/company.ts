export const addCompanyDataInJob = async (jobs) => {
  const companiesId = jobs.map((job) => job.company);
  const companiesData = await getCompaniesData(companiesId);
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
  console.log(companiesQueryUrl);
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
