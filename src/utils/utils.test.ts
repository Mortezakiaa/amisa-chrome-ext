import { e2p, getCurrentTime, GuidGenerator, p2e } from "./utils";

describe("utils tests", () => {
  test("guidgenerator", () => {
    const guid = GuidGenerator();
    expect(guid).toBeDefined();
    expect(typeof guid).toBe("string");
  });
  test("e2p", () => {
    const en = e2p("234");
    expect(en).toBeDefined();
    expect(en).toBe("۲۳۴");
  });
  test("p2e", () => {
    const pe = p2e("۲۳۴");
    expect(pe).toBe("234");
  });
  test("currenttime", () => {
    const time = getCurrentTime();
    const sp = time.split(":");
    expect(typeof time).toBe("string");
    expect(sp.length).toBe(2);
  });
});
