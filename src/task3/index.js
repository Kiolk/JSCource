/**
 * Validate inputted time in 24 hours format
 * @param {number} hours houres that need validate
 * @param {number} minutes minutes that need validate
 * @returns {boolean} true, if inputted correct houres and minutes
 */
function isTimeValide(hours, minutes) {
  return (0 <= hours && hours <= 23) && (0 <= minutes && minutes <= 59);
};
/**
 * Changed time by adding some minutes.
 * @param {number} hours actual houres
 * @param {number} minutes actual minutes
 * @param {number} additionTime number of minutes that need add
 * @returns {Stirng} string representation of new time
 */
function addMinutes(hours, minutes, additionTime) {
  const newMinutes = (additionTime + minutes) % 60;
  const newHours = (((additionTime + minutes) / 60) + hours) % 24;
  return addPadding(parseInt(newHours)) + ":" + addPadding(parseInt(newMinutes));
};

/**
 * Adding zerro padding if number less than 10
 * @param {number} value expected number
 * @return {String} String representation of expected number
 */
function addPadding(value) {
  return value / 10 >= 1 ? value : '0' + value
}

/**
 * Indicate sesone of inputted monthe;
 * @param {number} month sequence number of month
 * @return {String} Name of sesone
 */
function getSesone(month) {
  var seson = '';
  if (month > 2 && month <= 5) {
    seson = 'Весна';
  } else if (month > 5 && month <= 8) {
    seson = 'Лето';
  } else if (month > 8 && month <= 11) {
    seson = 'Осен';
  } else if (month > 0 && month <= 12) {
    seson = 'Зима';
  }
  return seson;
};

/**
 * Indicate declansion of word "Day"
 * @param {number} declansion number of declansion
 * @return {String} expected declansion word "Day"
 */
function getDayDeclension(declansion) {
  var dayDeclansion = "";
  switch (declansion) {
    case 1:
    case 4:
      dayDeclansion = "День";
      break;
    case 2:
      dayDeclansion = "Дня";
      break;
    case 3:
      dayDeclansion = "Дню";
      break;
    case 5:
      dayDeclansion = "Днем";
      break;
    case 6:
      dayDeclansion = "Дне";
      break;
    default:
      dayDeclansion = "Incorrect Declansion"
      break;
  }
  return dayDeclansion;
};

/**
 *  Calculate sum of number from 1 to inputted value.
 * @param {number} value upper border for calculate range
 * @return {number} summ of all number in range
 */
function sum(value) {
  var result = 0;
  if (value > 0) {
    result = value + sum(--value);
  }
  return result;
};

/**
 * Calculate array of result multiplication inputted number on each number from 1 to 10. 
 * Implemented by recursion. Also print reslts of pultiplications
 * @param {number} value number that need multiplicate
 * @return {Array} of multiplication results
 */
function multiplication(value) {
  var multiplicationArray = [];
  var multiplyOn = arguments[1] === undefined ? 10 : arguments[1]
  if (multiplyOn > 0) {
    multiplicationArray.push((value * multiplyOn))
    multiplicationArray = multiplication(value, --multiplyOn).concat(multiplicationArray)

  }

  console.log(value + " * " + ++multiplyOn + " = " + (value * multiplyOn));

  return multiplicationArray;
};

/**
 * Analyze that point place inside or on boarder of cycle.
 * @param {number} x x coordinate of point
 * @param {number} y y coordinate of point
 * @returns {boolean} true if point present inside or on boarder.
 */
function isPointInCircle(x, y) {
  const cycleCenterX = 3;
  const cycleCenterY = 5;
  const cycleRadius = 4;
  const length = Math.sqrt(
    Math.pow(cycleCenterX - x, 2) + Math.pow(cycleCenterY - y, 2)
  );
  return length <= cycleRadius;
};

/**
 * Analyze that point place inside or on boarder of square.
 * @param {number} x x coordinate of point
 * @param {number} y y coordinate of point
 * @returns {boolean} true if point present inside or on boarder.
 */
function isPointInSquare(x, y) {
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

  const cof1 = findLinearFunction(
    line1.point1.x,
    line1.point1.y,
    line1.point2.x,
    line1.point2.y
  );
  const cof2 = findLinearFunction(
    line2.point1.x,
    line2.point1.y,
    line2.point2.x,
    line2.point2.y
  );
  const cof3 = findLinearFunction(
    line3.point1.x,
    line3.point1.y,
    line3.point2.x,
    line3.point2.y
  );
  const cof4 = findLinearFunction(
    line4.point1.x,
    line4.point1.y,
    line4.point2.x,
    line4.point2.y
  );

  const crossPoint1 = findCrossPoint(
    cof1.k,
    cof1.b,
    cof2.k,
    cof2.b
  );
  const crossPoint2 = findCrossPoint(
    cof2.k,
    cof2.b,
    cof3.k,
    cof3.b
  );
  const crossPoint3 = findCrossPoint(
    cof3.k,
    cof3.b,
    cof4.k,
    cof4.b
  );
  const crossPoint4 = findCrossPoint(
    cof4.k,
    cof4.b,
    cof1.k,
    cof1.b
  );

  return isSameSide(cof1, crossPoint2, pointf)
    && isSameSide(cof2, crossPoint3, pointf)
    && isSameSide(cof3, crossPoint4, pointf)
    && isSameSide(cof4, crossPoint1, pointf)
};

/**
 * Analyze where present expected point.
 * @param {Object} linearCooafitient object that containe coefficient k and b of linear function
 * @param {Object} otherCrossPoint coordinate crossing point that not present on line
 * @param {Object} pointf expected point
 * @return {boolean} true, if expected point in one crossing point present in same side from analyzed line
 */
function isSameSide(linearCooafitient, otherCrossPoint, pointf) {
  return (otherCrossPoint.y >= linearCooafitient.k * otherCrossPoint.x + linearCooafitient.b) === (pointf.y >= linearCooafitient.k * pointf.x + linearCooafitient.b)
}
/**
 *Calculate the coefficient of linear function y = k*x + b, for two points that present on this line.
 * @param {number} x1 x coordinate of first point
 * @param {number} y1 y coordinate of first point
 * @param {number} x2 x coordinate of second point
 * @param {number} y2 y coordinate of second point
 * @return {Object} that containe coefficient k and b of linear function
 */
function findLinearFunction(x1, y1, x2, y2) {
  const k = (y2 - y1) / (x2 - x1);
  const b = y1 - k * x1;
  return { k: k, b: b };
}

/**
 * Calculate point of crossing two lines
 * @param {number} k1 k coeffitient of linear function of first line
 * @param {number} b1 b coeffitient of linear function of first line
 * @param {number} k2 k coeffitient of linear function of second line
 * @param {number} b2 b coeffitient of linear function of second line
 * @return {Object} coordinate of crossing point of two line
 */
function findCrossPoint(k1, b1, k2, b2) {
  const x = (b2 - b1) / (k1 - k2);
  const y = k1 * x + b1;
  return { x: x, y: y };
}

module.exports.isTimeValide = isTimeValide;
module.exports.addMinutes = addMinutes;
module.exports.getSeason = getSesone;
module.exports.getDayDeclension = getDayDeclension;
module.exports.getSumm = sum;
module.exports.getMultiplicationTable = multiplication;
module.exports.isPointInCircle = isPointInCircle;
module.exports.isPointInSquare = isPointInSquare;