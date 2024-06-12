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

  it("renders a textArea", () => {
    render(<Page />);
    const textarea = screen.getByRole("textbox", { lang: "markdown" });
    expect(textarea).toBeDefined();
  });

  it("textarea value change when user type", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus()
    await user.keyboard("Good day");
    expect(input).toHaveProperty("value", "Good day");
  });

  it("preview area value match edit area value", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus()
    await user.keyboard("hola");
    const preview = screen.getByText("hola");
    expect(preview).toBeDefined();
  });

  it("doesn't add numbers when input is empty", async () => {
    render(<Page />);
    
    expect(screen.queryAllByText("1")).toHaveLength(0)
  });

  it("adds a line number when user type", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus()
    await user.keyboard("hola");
    expect(screen.queryAllByText("1")).toHaveLength(1)
  });

  it("add a number if enter key is pressed in the texarea", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus()
    await user.keyboard('[Enter]');
    expect(screen.getAllByText("1")).toHaveLength(1)
    expect(screen.queryAllByText("2")).toHaveLength(0)
  });
});
