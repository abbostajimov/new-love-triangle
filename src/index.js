/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var firstLover = preferences[i];
    var secondLover = preferences[firstLover - 1];
    var thirdLover = preferences[secondLover - 1];
    if (i === thirdLover - 1) {
      count++;
    }
  }
  return Math.floor(count / 3);
};
