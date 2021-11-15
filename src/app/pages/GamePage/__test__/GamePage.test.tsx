import { cleanup, render } from "@testing-library/react";
import React from "react";
import GamePage from "..";

afterEach(cleanup);

it("renders without crashing", () => {
  const { getByTestId } = render(<GamePage />);
  const page = getByTestId("gamePage");
  expect(page).toBeTruthy();
});
