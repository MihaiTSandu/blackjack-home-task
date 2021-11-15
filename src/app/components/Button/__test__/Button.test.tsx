import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import Button from "..";

afterEach(cleanup);

describe("Button component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Button label="Test"></Button>);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("displays label correctly", () => {
    const name = "Button";
    const { getByTestId } = render(<Button label={name} />);
    expect(getByTestId("button")).toHaveTextContent(name);
  });

  it("onClick prop works", () => {
    act(() => {
      const consoleInput = "Test output";
      const { getByTestId } = render(
        <Button
          label="Test"
          onClick={() => {
            console.log(consoleInput);
          }}
        />
      );
      const button = getByTestId("button");
      const consoleSpy = jest.spyOn(console, "log");
      fireEvent.click(button);
      expect(consoleSpy).toHaveBeenCalledWith(consoleInput);
    });
  });
});
