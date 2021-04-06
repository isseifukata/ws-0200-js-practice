/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  const arrLength = array.length;
  for (let i = 0; i < arrLength; i++) {
    console.log(array[i]);
  }
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days;
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  const arrLength = array.length;
  let numFlg = false;
  for (let i = 0; i < arrLength; i++) {
    if (array[i] == num) {
      numFlg = true;
    }
  }
  return numFlg;
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  const arrLength = array.length;
  let duplicateFlg = false;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i != j && array[i] == array[j]) {
        duplicateFlg = true;
      }
    }
  }
  return duplicateFlg;
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate,
};
