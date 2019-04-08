const HomeTask3 = require("../../src/task3");

describe("Test", function() {
  it("first", function() {
    expect(3).toEqual(3);
  });

  it("isTimeValid", function() {
    expect(HomeTask3.isTimeValide(12, 12)).toBeTruthy();
    expect(HomeTask3.isTimeValide(13, 12)).toBeTruthy();
    expect(HomeTask3.isTimeValide(32, 43)).not.toBeTruthy();
    expect(HomeTask3.isTimeValide(-1, 0)).not.toBeTruthy();
    expect(HomeTask3.isTimeValide(0, 0)).toBeTruthy();
  });

  it("addMinutes", function() {
    expect(HomeTask3.addMinutes(12, 25, 30)).toEqual("12:55");
    expect(HomeTask3.addMinutes(23, 40, 83)).toEqual("01:03");
  });

  it("getSeason", function() {
    expect(HomeTask3.getSeason(1)).toEqual("Зима");
    expect(HomeTask3.getSeason(4)).toEqual("Весна");
    expect(HomeTask3.getSeason(8)).toEqual("Лето");
    expect(HomeTask3.getSeason(12)).toEqual("Зима");
  });

  it("getDayDeclension", function() {
    expect(HomeTask3.getDayDeclension(0)).toEqual("Дней");
    expect(HomeTask3.getDayDeclension(1)).toEqual("День");
    expect(HomeTask3.getDayDeclension(6)).toEqual("Дне");
    expect(HomeTask3.getDayDeclension(7)).toEqual("Дней");
  });

  it("getSumm", function() {
    expect(HomeTask3.getSumm(6)).toEqual(21);
    expect(HomeTask3.getSumm(3)).toEqual(6);
  });

  it("getMultiplicationTable", function() {
    expect(HomeTask3.getMultiplicationTable(1)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
    expect(HomeTask3.getMultiplicationTable(178)).toEqual([
      178,
      356,
      534,
      712,
      890,
      1068,
      1246,
      1424,
      1602,
      1780
    ]);
  });

  it("isPointInCircle", function() {
    expect(HomeTask3.isPointInCircle(3, 5)).toBeTruthy();
    expect(HomeTask3.isPointInCircle(3, 1)).toBeTruthy();
    expect(HomeTask3.isPointInCircle(0, 0)).not.toBeTruthy();
  });

  it("isPointInSquare", function() {
    expect(HomeTask3.isPointInSquare(-8, 0)).not.toBeTruthy();
    expect(HomeTask3.isPointInSquare(1, 1)).toBeTruthy();
    expect(HomeTask3.isPointInSquare(10, 10)).not.toBeTruthy();
    expect(HomeTask3.isPointInSquare(0, 0)).toBeTruthy();
    expect(HomeTask3.isPointInSquare(3, 3)).not.toBeTruthy();
    expect(HomeTask3.isPointInSquare(-1, 0)).toBeTruthy();
    expect(HomeTask3.isPointInSquare(5, 5)).not.toBeTruthy();
    expect(HomeTask3.isPointInSquare(5, 0)).toBeTruthy();
  });
});
