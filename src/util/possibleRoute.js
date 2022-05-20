function countPossibleroute(G, start, end, stops) {
  var path = G.split(",");
  var onlyRoute = [];
  var cost = [];
  for (var j in path) {
    onlyRoute.push(path[j].slice(0, 2));
    cost.push(parseInt(path[j].slice(2)));
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
  var count = 0;
  for (var r = 0; r < startToEnd.length; r++) {
    var result = [];
    for (var c = 0; c < startToEnd[r].length - 1; c = c + 2) {
      result.push(startToEnd[r][c] + startToEnd[r][c + 1]);
    }
    if (hasDuplicates(result) === false) {
      count++;
    }
  }
  return count;
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

function possibleRoute(G, start, end, stop) {
  start = start.toUpperCase();
  end = end.toUpperCase();
  var result = 0;
  var stops;
  if (!stop) {
    stops = parseInt(G.split(",").length);
  } else {
    stops = stop;
  }
  for (var i = stops; i >= 1; i--) {
    result = result + countPossibleroute(G, start, end, i);
  }
  return result;
}

module.exports = possibleRoute;
