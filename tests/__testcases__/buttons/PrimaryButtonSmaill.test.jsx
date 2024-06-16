import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import PrimaryButtonSmaill from "../../../src/components/buttons/PrimaryButtonSmall/PrimaryButtonSmaill";

describe("Primary Button Smail", () => {
  test("Should render correctly", () => {
    const buttonText = "Hello";
    render(<PrimaryButtonSmaill text={buttonText} />);

    // see state of the component in virtual dom generated by jsdom
    // screen.debug();

    // assertion by role is more robust
    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toBeInTheDocument();
  }),
    test("Should renders text correctly", () => {
      render(<PrimaryButtonSmaill text="hello" />);
      expect(screen.getByText(/hello/i)).toBeInTheDocument();
    }),
    test("Button should not be disabled", () => {
      render(<PrimaryButtonSmaill text="hello" />);
      const button = screen.getByRole("button");
      expect(button).not.toBeDisabled();
    });
});