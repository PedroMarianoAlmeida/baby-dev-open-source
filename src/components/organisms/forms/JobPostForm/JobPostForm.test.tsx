import { render, screen, fireEvent } from "@testing-library/react";
import JobPostForm from ".";
import "@testing-library/jest-dom";

describe("organism > JobPostForm", () => {
  it("it show TopContainer", () => {
    render(<JobPostForm />);

    expect(screen.getByText("JobPostForm")).toBeInTheDocument();
  });
});
