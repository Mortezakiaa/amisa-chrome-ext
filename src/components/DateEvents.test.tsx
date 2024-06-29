import { render, screen } from "@testing-library/react";
import DateEvents from "./DateEvents";

describe("", () => {
  test("init", () => {
    render(<DateEvents />);
    expect(screen.getByText("رویداد ها")).toBeInTheDocument();
  });
});
 