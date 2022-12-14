import { addCompanyDataInJob } from "./company";

export interface IJob {
  title: string;
  company: number;
  description: string;
  location: string;
  requisites: string[];
  stack: string[];
  url: string;
  source: string;
  status: "open" | "closed";
  createAt: Date;
  modifiedAt: Date;
  curator: number;
  indicatedBy: number;
  blob: string;
}

export const getRecentJobs = async () => {
  try {
    const res = await fetch(
      `http://localhost:4000/jobs?_sort=modifiedAts&_order=desc&_start=0&_limit=10&status=open`
    );
    if (res.ok) {
      const data = await res.json();

      const jobsWithCompanyData = await addCompanyDataInJob(data);

      const dataSanitized = jobsWithCompanyData.map((job) => ({
        companyName: job.companyData.name,
        companyLogo: job.companyData.logo,
        jobTitle: job.title,
        jobLocation: job.location,
        jobStack: job.stack,
        createAt: job.createAt,
      }));

      return dataSanitized;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createJob = async (data: IJob) => {
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
