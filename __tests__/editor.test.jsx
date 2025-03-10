import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Page from "../app/page";

const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
const user = userEvent.setup();

describe("Editor view tests:", () => {
  afterEach(cleanup);
  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  it("renders editor view", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it("renders a 'save' button on editor view", () => {
    render(<Page></Page>);
    expect(screen.getAllByRole("button", { name: "Save" })).toHaveLength(1);
  });

  it("renders a 'new' button on editor view", () => {
    render(<Page></Page>);
    expect(screen.getAllByRole("button", { name: "New" })).toHaveLength(1);
  });

  it("renders a 'readme' button on editor view", () => {
    render(<Page></Page>);
    expect(
      screen.getAllByRole("button", { name: "Create a README file" })
    ).toHaveLength(1);
  });
});

describe("Edit panel tests:", () => {
  const user = userEvent.setup();
  afterEach(cleanup);
  localStorage.clear();

  it("renders edit panel", () => {
    render(<Page />);
    const editSection = screen.getByText("Edit");
    expect(editSection).toBeDefined();
  });

  it("renders a text area", () => {
    render(<Page />);
    const textarea = screen.getAllByRole("textbox", { lang: "markdown" });
    expect(textarea).toHaveLength(1);
  });

  it("textarea value change when user type", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("Good day");
    expect(input).toHaveProperty("value", "Good day");
  });

  it("renders the first line number", async () => {
    render(<Page />);
    expect(screen.getAllByText("1")).toHaveLength(1);
  });

  it("adds line numbers", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("hola");
    await user.keyboard("[Enter]");
    expect(screen.queryAllByText("2")).toHaveLength(1);
    expect(screen.queryAllByText("3")).toHaveLength(0);
  });

  it("saves input value to localstorage on changes", () => {
    // TODO
  });

  it("retrieves value from localstorage on first mount", () => {
    // TODO
  });
});

describe("Preview panel tests:", () => {
  afterEach(cleanup);
  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });
  it("renders preview panel", () => {
    render(<Page />);
    const previewSection = screen.getByText("Preview");
    expect(previewSection).toBeDefined();
  });

  it("retrieves value from localstorage on first mount", () => {
    // TODO
  });

  it("preview area displays edit area value", async () => {
    render(<Page />);
    const input = screen.getAllByRole("textbox")[0];
    input.focus();
    await user.keyboard("Good day");
    const preview = screen.getByRole("paragraph");
    expect(preview).toHaveProperty("innerHTML", "Good day");
  });

  it("renders <p> elements", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("hola");
    expect(screen.getAllByRole("paragraph")).toHaveLength(1);
  });

  it("renders <h1> elements", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("# hola");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders <h2> elements", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("## hola");
    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(3);
  });

  it("renders <h3> elements", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("### hola");
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });

  it("renders <h4> elements", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("#### hola");
    expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(1);
  });

  it("renders <ul> elements", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("- hola");
    await user.keyboard("[Enter]");
    await user.keyboard("- chau");
    expect(screen.getAllByRole("list")).toHaveLength(1);
  });

  it("renders <a> elements", async () => {
    render(<Page />);
    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("[[viviyanez.dev]](https://www.viviyanez.dev)");
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });
});
