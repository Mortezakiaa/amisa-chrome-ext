import { DateObject } from "react-multi-date-picker";
import Tooltip from "./Tooltip";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

describe("", () => {
  test("inti tooltip", () => {
    const date = new DateObject();
    const tooltip = new Tooltip(date);
    const mouseTarget = {} as React.MouseEvent<HTMLDivElement>;
    const list = [{ name: "simple", day: 7, month: 4 }];

    expect(tooltip).toBeDefined();
    expect(tooltip.props).toBeDefined();
    expect(tooltip.addEvent()).toBeUndefined();
    expect(tooltip.removeTooltip()).toBeUndefined();
    expect(() => tooltip.createTooltipAndShow(mouseTarget)).toThrow(
      Error("method not correctly implemented!!!")
    );
    expect(tooltip.setClosedDays(list)).toBeUndefined();
  });
  test("en props", () => {
    const date = new DateObject();
    const tooltip = new Tooltip(date);

    expect(tooltip.props.arDate).toBeUndefined();
    expect(tooltip.props.className).toBeUndefined();
    expect(tooltip.props.dataClosed).toBeUndefined();
    expect(tooltip.props.enDate).toBeUndefined();
    expect(tooltip.props.onClick).toBeUndefined();
    expect(tooltip.props.onMouseEnter).toBeUndefined();
    expect(tooltip.props.onMouseLeave).toBeUndefined();
  });
  test("fa props", () => {
    const date = new DateObject({
      calendar: persian,
      locale: persian_fa,
      format: "YYYY/MM/DD",
    });
    const tooltip = new Tooltip(date);

    expect(tooltip.props.arDate).toBeUndefined();
  });
});
