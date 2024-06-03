import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Page from "../app/editor/page";

describe("Editor view tests:", () => {
  afterEach(cleanup);

  it("renders editor view", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it("includes view heading", () => {
    render(<Page />);
    const heading = screen.getByText("Markdown Editor");
    expect(heading).toBeDefined();
  });

  it("renders a textArea", () => {
    render(<Page />);
    const textarea = screen.getByRole("textbox", { "lang": "markdown" });
    expect(textarea).toBeDefined();
  });

  it("textarea value change on change event", () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Good Day" } });
    expect(input).toHaveProperty("value", "Good Day");
  });
});
