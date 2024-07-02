import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Layout from "../app/layout";
import Page from "../app/page";

describe("Layout", () => {
  afterEach(cleanup);

  test("renders a nav bar", () => {
    render(
      <Layout>
        <Page />
      </Layout>
    );
    expect(screen.getAllByRole("navigation")).toHaveLength(1);
  });
});
