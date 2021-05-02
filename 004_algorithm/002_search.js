/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch(array, target) {
  let index = -1;
  for(let i = 0; i < array.length; i++){
    if(array[i] === target){
      index = i;
      break;
    }
  }
  return index;;
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch(array, target) {
  let index = -1;
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let middleIndex;

  while (firstIndex <= lastIndex) {
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (array[middleIndex] === target) {
      index = middleIndex;
      break;
    } else if (array[middleIndex] < target) {
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
  return index;
}

module.exports = {
  linearSearch,
  binarySearch
}