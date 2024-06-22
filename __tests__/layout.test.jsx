import { afterEach, describe, expect, test } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Layout from "../app/layout";
import Page from "../app/page";
import Editor from "../app/editor/page";

describe("Layout", () => {
  afterEach(cleanup);
  test.only("renders a nav bar", () => {
    render(
      <Layout>
        <Page />
      </Layout>
    );
    expect(screen.getAllByRole("navigation")).toHaveLength(1);
  });

  test("renders a 'save' button on editor view", () => {
    render(
      <Layout>
        <Editor />
      </Layout>
    );
    expect(screen.getByRole("button", { name: "Save" })).toHaveLength(1);
  });

  test("renders a 'new' button on editor view", () => {
    render(
      <Layout>
        <Editor />
      </Layout>
    );
    expect(screen.getByRole("button", { name: "New" })).toHaveLength(1);
  });

  test("renders a 'readme' button on editor view", () => {
    render(
      <Layout>
        <Editor />
      </Layout>
    );
    expect(
      screen.getByRole("button", { name: "Create a README file" })
    ).toHaveLength(1);
  });
});
