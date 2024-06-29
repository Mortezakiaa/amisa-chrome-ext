import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("", () => {
  test("init", () => {
    render(
      <Input onchange={() => {}} placeholder="test placeholder" value="123" />
    );
    expect(screen.getByDisplayValue("123")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  test("check onchange", () => {
    const mockFn = jest.fn()
    render(
      <Input onchange={mockFn} placeholder="test placeholder" value="123" />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input , {target:{value:12333}})
    expect(mockFn).toHaveBeenCalledTimes(1)
  });
});
