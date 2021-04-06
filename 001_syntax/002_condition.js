/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  if( age > 20) {
    return "成年です。"
  } else{
    return "未成年です。";
  }
}

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */
function greeding(hour) {
  if(4 <= hour && hour <12){
    return 'Good Morning'
  } else if (12 <= hour && hour <17){
    return 'Hello';
  } else if ( hour => 17){
    return 'Good Night';
  }
}

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

function getDay(day) {
  switch (day){
    case 0 :
      return 'Sunday';
      break;
    case 1 :
      return 'Monday'
      break;
    case 2 :
      return 'Tuesday'
      break;
    case 3 :
      return 'Wednesday'
      break;
    case 4 :
      return 'Thursday'
      break;
    case 5 :
      return 'Friday'
      break;
    case 6 :
      return 'Saturday'
      break;
  }
}

module.exports = {
  printMessageByAge,
  greeding,
  getDay
}
