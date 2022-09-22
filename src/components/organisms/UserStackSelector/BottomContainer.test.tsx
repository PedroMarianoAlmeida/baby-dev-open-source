import { render, screen } from "@testing-library/react";
import BottomContainer from "./BottomContainer";
import "@testing-library/jest-dom";

describe("organism > UserStackSelector > BottomContainer", () => {
  it("show stack group and options when showOptions is true - not working yet (and breaking everything)", () => {
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
    // expect(screen.getByText("stack1")).toBeInTheDocument();
    // expect(screen.getByText("stack2")).toBeInTheDocument();
  });

  it("don't show stack group and options when showOptions is false - not working yet", () => {
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
});
