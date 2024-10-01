import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Home", () => {
  afterEach(cleanup);
  test("renders Page title", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Comfortably edit and preview markdown content.",
      })
    ).toBeDefined();
  });

  test("renders editor's link", () => {
    render(<Page />);
    expect(
      screen.getByRole("link", { name: "edit and preview" })
    ).toBeDefined();
  });
});
