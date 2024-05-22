import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Page from "../app/editor/page";

describe("Editor view test:", () => {
  afterEach(cleanup);

  it("renders view", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it("includes view heading", () => {
    render(<Page />);
    const heading = screen.getByText("Markdown Editor");
    expect(heading).toBeTruthy();
  });

  it("includes a textArea", () => {
    render(<Page />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeTruthy();
  });

  it("textarea value change on interaction", () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Good Day" } });
    expect(input).toHaveProperty("value", "Good Day");
  });
});
