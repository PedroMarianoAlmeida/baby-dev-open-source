import { render, screen } from "@testing-library/react";
import StackBadge from "./StackBadge";
import "@testing-library/jest-dom";

describe("atom > StackBadge", () => {
  it("renders correct name", () => {
    render(<StackBadge name="StackBadge text" />);

    const heading = screen.getByText("StackBadge text");

    expect(heading).toBeInTheDocument();
  });
});
