import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import BottomContainer from "./BottomContainer";

import "@testing-library/jest-dom";

describe("organism > UserStackSelector > BottomContainer", () => {
  it("show stack group and options when showOptions is true", () => {
    render(
      <BottomContainer
        showOptions
        setShowOptions={() => {}}
        selected={[]}
        addSelected={() => {}}
        removeSelected={() => {}}
        options={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
      />
    );

    expect(screen.getByText("Stack Group")).toBeInTheDocument();
    expect(screen.getByText("stack1")).toBeInTheDocument();
    expect(screen.getByText("stack2")).toBeInTheDocument();
  });

  it("isSelected property is assign correctly", () => {
    const addSelected = jest.fn();
    render(
      <BottomContainer
        showOptions
        setShowOptions={() => {}}
        selected={["stack1"]}
        addSelected={addSelected}
        removeSelected={() => {}}
        options={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
      />
    );
    
    // check class selected after of declare in selected
    expect(screen.queryByRole("heading", { name: "stack1" })).toHaveClass(
      "selected"
    );
  });

  it("don't show stack group and options when showOptions is false", () => {
    render(
      <BottomContainer
        showOptions={false}
        setShowOptions={() => {}}
        selected={[]}
        addSelected={() => {}}
        removeSelected={() => {}}
        options={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
      />
    );

    expect(screen.queryByText("Stack Group")).not.toBeInTheDocument();
  });

  it("it trigger addSelected after click in a not selected option", () => {
    const addSelected = jest.fn();
    render(
      <BottomContainer
        showOptions
        setShowOptions={() => {}}
        selected={[]}
        addSelected={addSelected}
        removeSelected={() => {}}
        options={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
      />
    );

    fireEvent.click(screen.getByText("stack1"));
    expect(addSelected).toBeCalledWith("stack1");
  });

  it("it trigger removeSelected after click in a selected option", () => {
    const removeSelected = jest.fn();
    render(
      <BottomContainer
        showOptions
        setShowOptions={() => {}}
        selected={["stack1"]}
        addSelected={() => {}}
        removeSelected={removeSelected}
        options={[{ name: "Stack Group", stack: ["stack1", "stack2"] }]}
      />
    );

    fireEvent.click(screen.getByText("stack1"));
    expect(removeSelected).toBeCalledWith("stack1");
  });
});
