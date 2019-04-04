const HomeTask3 = require("../../src/task3");

describe("Test", () => {
  it("first", () => {
    expect(3).toEqual(3);
  });

//   it("isTimeValid", () => {
//     expect(HomeTask3.isTimeValide(12, 12)).toBeTruthy();
//     expect(HomeTask3.isTimeValide(13, 12)).not.toBeTruthy();
//   });

//   it("addMinutes", () => {
//     expect(HomeTask3.addMinutes(12, 25, 30)).toEqual("12:55");
//     expect(HomeTask3.addMinutes(23, 40, 83)).toEqual("01:03");
//   });

  it("isPointInCircle", () => {
    expect(HomeTask3.isPointInCircle(3, 5)).toBeTruthy();
    expect(HomeTask3.isPointInCircle(3, 1)).toBeTruthy();
    expect(HomeTask3.isPointInCircle(0, 0)).not.toBeTruthy();
  });

  it("isPointInSquare", () => {
      expect(HomeTask3.isPointInSquare(-8, 0)).not.toBeTruthy();
      expect(HomeTask3.isPointInSquare(1, 1)).toBeTruthy();
  });
});
