import { render, screen, fireEvent } from "@testing-library/react";
import TopContainer from "./TopContainer";
import "@testing-library/jest-dom";

describe("organism > UserStackSelector > TopContainer", () => {
  it("it show search icon", () => {
    render(
      <TopContainer
        selected={[]}
        removeSelected={() => {}}
        showOptions={true}
        setShowOptions={() => {}}
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("it show selected stack", () => {
    render(
      <TopContainer
        selected={["stack1"]}
        removeSelected={() => {}}
        showOptions={true}
        setShowOptions={() => {}}
      />
    );

    expect(screen.getByText("stack1")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2); //One of search icon and another of x icon
  });

  it("it trigger setShowOptions after click on component", () => {
    const setShowOptions = jest.fn();
    render(
      <TopContainer
        selected={[]}
        removeSelected={() => {}}
        showOptions={true}
        setShowOptions={setShowOptions}
      />
    );

    fireEvent.click(screen.getByRole("img")); //Clicking in search icon
    expect(setShowOptions).toBeCalled();
  });

  it("it trigger removeSelected after click in a selected item", () => {
    const removeSelected = jest.fn();

    render(
      <TopContainer
        selected={["stack1"]}
        removeSelected={removeSelected}
        showOptions={true}
        setShowOptions={() => {}}
      />
    );

    fireEvent.click(screen.getByText("stack1"));
    expect(removeSelected).toBeCalledWith("stack1");
  });
});
