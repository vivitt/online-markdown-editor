import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import Page from "../app/editor/page";

describe("Editor view tests:", () => {
  const user = userEvent.setup();
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

  it("renders two text areas", () => {
    render(<Page />);
    const textarea = screen.getAllByRole("textbox", { lang: "markdown" });
    expect(textarea).toHaveLength(2);
  });

  it("one text area has hidden class", () => {
    // TODO
  });

  it("textarea value change when user type", async () => {
    render(<Page />);
    const input = screen.getAllByRole("textbox")[0];
    input.focus();
    await user.keyboard("Good day");
    expect(input).toHaveProperty("value", "Good day");
  });

  it("saves input value to localstorage on changes", () => {
    // TODO
  });

  it("retrieves value from localstorage on first mount", () => {
    // TODO
  });

  it("preview area displays edit area value", async () => {
    render(<Page />);
    const preview = screen.getAllByTestId("preview-panel");
    const holas = screen.getAllByText("Good day");
    expect(holas).toHaveLength(3);
  });

  it("there is a 1 line number when input is empty", async () => {
    render(<Page />);
    expect(screen.queryAllByText("1")).toHaveLength(2);
  });

  it("adds a line number when user type", async () => {
    render(<Page />);
    const input = screen.getAllByRole("textbox")[0];
    input.focus();
    await user.keyboard("hola");
    expect(screen.queryAllByText("1")).toHaveLength(2);
  });

  it("add a number if enter key is pressed in the texarea", async () => {
    render(<Page />);
    const input = screen.getAllByRole("textbox")[0];
    input.focus();
    await user.keyboard("[Enter]");
    expect(screen.queryAllByText("2")).toHaveLength(1);
    expect(screen.queryAllByText("3")).toHaveLength(0);
  });

  it("input text is rendered in preview area as <p> element", async () => {
    render(<Page />);
    const input = screen.getAllByRole("textbox")[0];
    input.focus();
    await user.keyboard("hola");
    expect(screen.getAllByRole("paragraph")).toHaveLength(1);
  });
});
