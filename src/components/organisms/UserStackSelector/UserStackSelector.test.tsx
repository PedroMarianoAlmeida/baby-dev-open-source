import { render, screen, fireEvent } from "@testing-library/react";
import { UserStackSelectorStructure } from "./UserStackSelector";
import "@testing-library/jest-dom";

describe("organism > UserStackSelector", () => {
  it("it show TopContainer", () => {
    render(
      <UserStackSelectorStructure
        initialSelected={[]}
        allOptions={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("it show BottomContainer after click in TopContainer", () => {
    render(
      <UserStackSelectorStructure
        initialSelected={[]}
        allOptions={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText("Stack Group")).not.toBeInTheDocument();
    expect(screen.queryByText("stack1")).not.toBeInTheDocument();
    expect(screen.queryByText("stack2")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("img")); //Clicking in search icon

    expect(screen.getByText("Stack Group")).toBeInTheDocument();
    expect(screen.getByText("stack1")).toBeInTheDocument();
    expect(screen.getByText("stack2")).toBeInTheDocument();
  });

  it("it add stack on click in it on BottomContainer", () => {
    render(
      <UserStackSelectorStructure
        initialSelected={[]}
        allOptions={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
        onChange={() => {}}
      />
    );

    fireEvent.click(screen.getByRole("img"));
    fireEvent.click(screen.getByText("stack1"));

    expect(screen.getAllByText("stack1")).toHaveLength(2); //One in Top and another in BottomContainer
  });

  it("ir remove stack on click in it on TopContainer", () => {
    render(
      <UserStackSelectorStructure
        initialSelected={["stack1"]}
        allOptions={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
        onChange={() => {}}
      />
    );

    expect(screen.getByText("stack1")).toBeInTheDocument();
    fireEvent.click(screen.getByText("stack1"));
    expect(screen.queryByText("stack1")).not.toBeInTheDocument();
  });
});
