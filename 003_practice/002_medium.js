/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  let str1, str2;
  if (num > 0) {
    str1 = str.slice(0, str.length - num);
    str2 = str.slice(str.length - num);
    return str2 + str1;
  } else {
    str1 = str.slice(0, -num);
    str2 = str.slice(-num);
    return str2 + str1;
  }
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  return str.replace(/a|i|u|e|o/g, "");
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let regexp = new RegExp(String.raw`${s2}`, "g");
  return s1.match(regexp).length;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  const originalText = str;
  const reverseText = str
    .split("")
    .reverse()
    .join("");
  return originalText === reverseText;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
      break;
    }
    if (i + 1 === num) {
      return true;
    }
  }
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let sumWithout4andNext = 0;
  let nextTo4Flag = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
      nextTo4Flag = true;
      continue;
    }
    if (nextTo4Flag === true) {
      nextTo4Flag = false;
      continue;
    }
    sumWithout4andNext += array[i];
  }
  return sumWithout4andNext;
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext,
};
