/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("", () => {
  test("init button", () => {
    render(<Button mode="default" txt="sample" />);
    const btn = screen.getByRole("button", { name: "sample" });
    expect(btn).toBeDefined();
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveRole("button");
  });
  test("onclic button", () => {
    const click = jest.fn();
    render(<Button mode="default" txt="sample" onclick={click} />);
    const btn = screen.getByText("sample");
    fireEvent.click(btn);
    expect(click).toHaveBeenCalledTimes(1);
  });
});
