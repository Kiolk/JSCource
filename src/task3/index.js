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

module.exports.isPointInSquare = function(x, y) {

  return firstLine(x, y) && !secondLine(x, y) && thirdLine(x,y) && !forthLine(x, y);
};

function firstLine(x, y) {
    const res = (-3 / 5) * x + 3;
    console.log(res);
console.log();

  return y > (-3 / 5) * x + 3;
}

function secondLine(x, y) {
    const res = (2 / 5) * x - 2;
    console.log(res);
  return y > (2 / 5) * x - 2;
}

function thirdLine(x, y) {
    const res = (-12/8) * x - 12;
    console.log(res);
    return y > (-12/8) * x - 12
}

function forthLine(x, y) {
    const res = (4 / 7) * x + 4;
    console.log(res);
    return y > (4 / 7) * x + 4
}