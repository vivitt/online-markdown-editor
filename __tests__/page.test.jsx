import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Page from "../app/page";

describe("Home test:", () => {
  it("renders a heading", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(<Page />);
    const link = screen.getByRole("link")[0];
    expect(link).toBeInTheDocument();
  });
});
