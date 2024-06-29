import { render, screen, act } from "@testing-library/react";
import Clock from "./Clock";

jest.useFakeTimers();
describe("", () => {
  test("init", () => {
    render(<Clock />);
    const clock = screen.getByRole("paragraph");
    expect(clock).toBeInTheDocument();
  });
  test("test for rendered every secound", () => {
    render(<Clock />);
    act(() => {
      jest.advanceTimersByTime(10000);
    });
  });
});
afterEach(() => {
  jest.clearAllTimers();
});
