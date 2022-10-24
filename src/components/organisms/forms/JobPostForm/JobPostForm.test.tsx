import { render, screen } from "@testing-library/react";
import JobPostForm from ".";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";

const setup = (tsx: ReactElement) => ({
  user: userEvent.setup(),
  ...render(tsx),
});

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

  it.only("create new job", async () => {
    const { user, container } = setup(
      <JobPostForm
        stackAllOptions={stackAllOptions}
        requisitesOptions={requisitesOptions}
        curatorData={curatorData}
        refreshStackAllOptions={() => {}}
        refreshRequisitesOptions={() => {}}
        refreshCompanyAutoComplete={() => {}}
        createJob={jest.fn(async () => "Cadastrado com sucesso")}
        companiesAllOptions={companiesAllOptions}
      />
    );

    // type title of job
    const titleInput = screen.getByPlaceholderText("Título");
    await user.clear(titleInput);
    await user.type(titleInput, "Vaga Front-end");

    // select company
    const selectCompany: HTMLSelectElement = screen.getByRole("combobox");
    await user.selectOptions(selectCompany, ["1"]);
    expect(selectCompany.selectedIndex).toBe(1);

    // type description
    const description = screen.getByPlaceholderText("Descrição");
    await user.clear(description);
    await user.type(description, "Descrição da Vaga");

    // type localization
    const localization = screen.getByPlaceholderText("Localização");
    await user.clear(localization);
    await user.type(localization, "Algum Lugar");

    // select requirements
    const selectRequirements: HTMLSelectElement = screen.getByRole("listbox");
    await user.selectOptions(selectRequirements, ["1"]);
    expect(selectRequirements.selectedIndex).toBe(1);

    // select stacks
    const searchInput = container.querySelector("#searchContainer");
    await user.click(searchInput);
    expect(container.querySelector("#stackContainer")).toBeInTheDocument();
    const stack = container.querySelector(".cursor-pointer");
    await user.click(stack);

    // check if stack has selected
    const stackReact = screen.getAllByRole("heading", { name: "react" });
    expect(stackReact[1]).toHaveClass("selected");

    // link
    const link = screen.getByPlaceholderText("Link");
    await user.clear(link);
    await user.type(link, "www.minhavaga.com.br");

    // source
    const source = screen.getByPlaceholderText("Fonte");
    await user.clear(source);
    await user.type(source, "Fonte da Juventude");

    // submit
    const buttonSubmit = screen.getByRole("button", { name: "Submit" });
    await user.click(buttonSubmit);

    // check message of success
    expect(
      await screen.findByText("Cadastrado com sucesso")
    ).toBeInTheDocument();
  });
});
