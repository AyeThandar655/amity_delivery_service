function calculateCost(G, A) {
  var path = G.split(",");
  var route = A.split("-");
  const formattedRoute = route.map((e) => e.toUpperCase());
  var onlyRoute = [];
  var cost = [];

  for (var i in path) {
    onlyRoute.push(path[i].slice(0, 2));
    cost.push(parseInt(path[i].slice(2)));
  }

  var result = 0;
  var inputPath = [];
  for (var r = 0; r < formattedRoute.length - 1; r++) {
    inputPath.push(formattedRoute[r] + formattedRoute[r + 1]);
  }

  for (var j = 0; j < inputPath.length; j++) {
    for (var k = 0; k < onlyRoute.length; k++) {
      if (inputPath[j] === onlyRoute[k]) {
        result += cost[k];
      }
    }
  }
  for (var c = 0; c < inputPath.length; c++) {
    if (onlyRoute.indexOf(inputPath[c]) === -1) {
      result = "No Such Route";
    }
  }
  return result;
}

module.exports = calculateCost;
