module.exports.isTimeValide = function(a, b) {
  return false;
};

module.exports.addMinutes = function(hours, minutes, additionTime) {
  return "";
};

module.exports.isPointInCircle = function(x, y) {
  const cycleCenterX = 3;
  const cycleCenterY = 5;
  const cycleRadius = 4;
  const length = Math.sqrt(
    Math.pow(cycleCenterX - x, 2) + Math.pow(cycleCenterY - y, 2)
  );
  return length <= cycleRadius;
};

module.exports.getSeason = function(month) {
  return 0;
};
module.exports.getDayDeclension = function(declansion) {
  return "";
};

module.exports.getSumm = function(value) {
  return 3;
};

module.exports.getMultiplicationTable = function(value) {
  return "";
};

module.exports.isPointInSquare = function(x, y) {
  const pointf = { x: x, y: y };
  const line1 = {
    point1: {
      x: 0,
      y: 3
    },
    point2: {
      x: 5,
      y: 0
    }
  };

  const line2 = {
    point1: {
      x: 5,
      y: 0
    },
    point2: {
      x: 0,
      y: -2
    }
  };

  const line3 = {
    point1: {
      x: 0,
      y: -12
    },
    point2: {
      x: -8,
      y: 0
    }
  };

  const line4 = {
    point1: {
      x: -7,
      y: 0
    },
    point2: {
      x: 0,
      y: 4
    }
  };

  const cooficient1 = findLinearFunction(
    line1.point1.x,
    line1.point1.y,
    line1.point2.x,
    line1.point2.y
  );
  const cooficient2 = findLinearFunction(
    line2.point1.x,
    line2.point1.y,
    line2.point2.x,
    line2.point2.y
  );
  const cooficient3 = findLinearFunction(
    line3.point1.x,
    line3.point1.y,
    line3.point2.x,
    line3.point2.y
  );
  const cooficient4 = findLinearFunction(
    line4.point1.x,
    line4.point1.y,
    line4.point2.x,
    line4.point2.y
  );

  const crossPoint1 = findCrossPoint(
    cooficient1.k,
    cooficient1.b,
    cooficient2.k,
    cooficient2.b
  );
  const crossPoint2 = findCrossPoint(
    cooficient2.k,
    cooficient2.b,
    cooficient3.k,
    cooficient3.b
  );
  const crossPoint3 = findCrossPoint(
    cooficient3.k,
    cooficient3.b,
    cooficient4.k,
    cooficient4.b
  );
  const crossPoint4 = findCrossPoint(
    cooficient4.k,
    cooficient4.b,
    cooficient1.k,
    cooficient1.b
  );

  const ispointInFirstTriangle = isPointInTriangle(
    crossPoint1,
    crossPoint2,
    crossPoint3,
    pointf
  );
  const isPointInSecondTriangle = isPointInTriangle(
    crossPoint1,
    crossPoint4,
    crossPoint3,
    pointf
  );

  return ispointInFirstTriangle || isPointInSecondTriangle;
};

function findLinearFunction(x1, y1, x2, y2) {
  const k = (y2 - y1) / (x2 - x1);
  const b = y1 - k * x1;
  return { k: k, b: b };
}

function findCrossPoint(k1, b1, k2, b2) {
  const x = (b2 - b1) / (k1 - k2);
  const y = k1 * x + b1;
  console.log("x = " + x + "// y = " + y);

  return { x: x, y: y };
}

function isPointInTriangle(point1, point2, point3, pointf) {
  var result = isPointBetween(point1, point2, pointf);
  result += isPointBetween(point2, point3, point3);
  result += isPointBetween(point1, point3, pointf);
  console.log(result);

  return result >= 2;
}

function isPointBetween(point1, point2, pointf) {
  const isXBetween =
    (point1.x >= pointf.x && pointf.x >= point2.x) ||
    (point1.x <= pointf.x && pointf.x <= point2.x);
  const isYBetween =
    (point1.y >= pointf.y && pointf.y >= point2.y) ||
    (point1.y <= pointf.y && pointf.y <= point2.y);
  return isXBetween && isYBetween ? 1 : 0;
}

// module.exports.isPointInSquare = function (x, y) {

//   return firstLine(x, y) && secondLine(x, y) && thirdLine(x, y) && forthLine(x, y);
// };

// module.exports.isPointInSquare = function (x, y) {

//   return firstLine(x, y) && secondLine(x, y) && thirdLine(x, y) && forthLine(x, y);
// };

// function firstLine(x, y) {
//   const res = (-3 / 5) * x + 3;
//   console.log(res);
//   console.log();

//   return y <= (-3 / 5) * x + 3;
// }

// function secondLine(x, y) {
//   const res = (2 / 5) * x - 2;
//   console.log(res);
//   return y >= (2 / 5) * x - 2;
// }

// function thirdLine(x, y) {
//   const res = (-12 / 8) * x - 12;
//   console.log(res);
//   return y >= (-12 / 8) * x - 12
// }

// function forthLine(x, y) {
//   const res = (4 / 7) * x + 4;
//   console.log(res);
//   return y <= (4 / 7) * x + 4
// }
