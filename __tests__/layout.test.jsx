import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../app/layout";

describe("Layout", () => {
  it("renders a nav element", () => {
    render(
      <Layout>
        <div>Dummy</div>
      </Layout>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("renders homepage unchanged", () => {
    const { container } = render(
      <Layout>
        <div>Dummy</div>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
