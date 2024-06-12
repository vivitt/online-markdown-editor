import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Page from "../app/editor/page";

describe("Editor view tests:", () => {
  afterEach(cleanup);

  it("renders editor view", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it("renders edit panel", () => {
    render(<Page />);
    const editSection = screen.getByText("Edit");
    expect(editSection).toBeDefined();
  });

  it("renders preview panel", () => {
    render(<Page />);

    const previewSection = screen.getByText("Preview");
    expect(previewSection).toBeDefined();
  });

  it("renders a textArea", () => {
    render(<Page />);
    const textarea = screen.getByRole("textbox", { lang: "markdown" });
    expect(textarea).toBeDefined();
  });

  it("textarea value change on change event", () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Good Day" } });
    expect(input).toHaveProperty("value", "Good Day");
  });

  it("add a number for each line", () => {
    render(<Page />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Good \n Day" } });
    const one = screen.getByText("1");
    const two = screen.getByText("2");

    expect(one).toBeDefined();
    expect(two).toBeDefined();
  });
});
