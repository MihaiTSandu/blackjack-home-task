import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import BetAmountInput from "..";

describe("BetAmountInput Component", () => {
  afterEach(cleanup);

  it("rendered input", () => {
    const { getByTestId } = render(
      <BetAmountInput
        value={undefined}
        onAmountChange={() => {}}
        onClick={() => {}}
      />
    );
    const input = getByTestId("betInput");
    expect(input).toBeTruthy();
  });

  it("rendered button", () => {
    const { getByTestId } = render(
      <BetAmountInput
        value={undefined}
        onAmountChange={() => {}}
        onClick={() => {}}
      />
    );
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("onClick props works", () => {
    act(() => {
      const consoleInput = "Test output";
      const { getByTestId } = render(
        <BetAmountInput
          value={undefined}
          onAmountChange={() => {}}
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
