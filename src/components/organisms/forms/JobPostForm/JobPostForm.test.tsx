import { render, screen, fireEvent } from "@testing-library/react";
import JobPostForm from ".";
import "@testing-library/jest-dom";

const stackAllOptions = [{ id: 1, name: "stackName", stack: ["react"] }];
const requisitesOptions = [{ id: 1, value: "RequisiteValue" }];
const curatorData = { id: 1, name: "CuratorName" };
const companiesAllOptions = [
  {
    id: 1,
    name: "CompanyName",
    logo: "CompanyLogo",
    webSite: "CompanyWebSite",
    linkedin: "CompanyLinkedIn",
  },
];

describe("organism > JobPostForm", () => {
  it("it show TopContainer", () => {
    render(
      <JobPostForm
        stackAllOptions={stackAllOptions}
        requisitesOptions={requisitesOptions}
        curatorData={curatorData}
        refreshStackAllOptions={() => {}}
        refreshRequisitesOptions={() => {}}
        refreshCompanyAutoComplete={() => {}}
        createJob={Promise.resolve}
        companiesAllOptions={companiesAllOptions}
      />
    );

    expect(screen.getByText("Cadastrar Vaga")).toBeInTheDocument();
  });
});
