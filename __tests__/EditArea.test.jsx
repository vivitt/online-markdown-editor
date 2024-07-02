import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect, spyOn, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import EditArea from "../app/ui/EditArea";

const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
const user = userEvent.setup();
const LOCAL_STORAGE_KEY = "markdown-content";

describe("editor buttons", () => {
  afterEach(cleanup);
  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  it.skip("image button adds ![add alt text](paste image link)", () => {
    const { container } = render(<EditArea />);
    const imgButton = screen.getAllByRole("button", { name: "image" });
  });
});
