function countPossibleroute(G, start, end, stops) {
  const calculateCost = require("../util/calculateCost");
  var path = G.split(",");
  var onlyRoute = [];
  var cost = [];
  for (var j in path) {
    onlyRoute.push(path[j].slice(0, 2));
  }
  var startRoute = [];
  for (var k = 0; k < onlyRoute.length; k++) {
    if (start === onlyRoute[k][0]) {
      startRoute.push(onlyRoute[k]);
    }
  }
  var possibleRoute = generateRoute(startRoute, onlyRoute, stops - 1);
  var startToEnd = [];
  for (var p = 0; p < possibleRoute.length; p++) {
    if (end === possibleRoute[p][possibleRoute[p].length - 1]) {
      startToEnd.push(possibleRoute[p]);
    }
  }
  for (var r = 0; r < startToEnd.length; r++) {
    var result = [];
    for (var c = 0; c < startToEnd[r].length - 1; c = c + 2) {
      result.push(startToEnd[r][c] + startToEnd[r][c + 1]);
    }
    if (hasDuplicates(result) === false) {
      var tmpPath = Array.from(new Set(result.join("").split(""))).join("-");
      if (start === end) {
        tmpPath += "-" + end;
      }
      cost.push(calculateCost(G, tmpPath));
    }
  }
  return cost;
}

function generateRoute(start, route, stops) {
  let result = [];
  if (stops > 0) {
    for (var i in start) {
      for (var j in route) {
        if (start[i][start[i].length - 1] === route[j][0]) {
          result.push(start[i] + route[j]);
        }
      }
    }
    return generateRoute(result, route, stops - 1);
  } else {
    return start;
  }
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function lowestCostRoute(G, start, end, stop) {
  start = start.toUpperCase();
  end = end.toUpperCase();
  var stops;
  var result = [];
  if (!stop) {
    stops = parseInt(G.split(",").length);
  } else {
    stops = stop;
  }
  for (var i = stops; i >= 1; i--) {
    result = result.concat(countPossibleroute(G, start, end, i));
  }
  var costs = result.map(function (x) {
    return parseInt(x, 10);
  });

  var sort = costs.filter(isNumber);
  return Math.min(...sort);
}

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}
module.exports = lowestCostRoute;
