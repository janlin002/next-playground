import { render } from "@testing-library/react";
import Page from "../src/components/myTest";

it("renders homepage unchanged", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
