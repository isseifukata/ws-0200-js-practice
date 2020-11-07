/**
 *  リストの実装
 *
 *  オブジェクト指向やJavaScriptの組み込みAPIの成り立ちを理解するためにも
 *  データ構造をクラスで実装してみましょう。
 *  実際に使われるリストは要素の型の縛りはありませんが、今回のリストは要素を数値に限定します。
 *
 */

class List {
  data = [];
  /**
   * Listクラスのインスタンスを作成する。
   * @constructor
   * @this {List}
   * @param {Number} array リストのデータ
   */
  constructor(array) {
    this.data = array;
  }

  /** リストの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** 引数で渡されたデータを取得する
   *
   * @param {Number} index
   * @return {Number}
   */
  index(index) {
    return this.data[index];
  }

  /** リストの 要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  push(item) {
    this.data.push(item);
  }

  /** 与えられた引数により、リストの 要素を削除する
   *
   * @param {Number} targetIndex
   * @return {Number}
   */
  remove(targetIndex) {
    const num = this.data[targetIndex]
    this.data = this.data.filter((_, index) => index !== targetIndex);
    return num
  }

  /** リストの 末尾の要素を取得する
   *
   * @param {Number} targetIndex
   * @return {Number}
   */
  pop() {
    return this.data.pop();
  }

  /** リストの 先頭の要素を取得する
   *
   * @return {Number}
   */
  shift() {
    return this.data.shift();
  }

  /** リストの の中から引数に合致する値を取得する
   *
   * XXX: find関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number | undefined}
   */
  find(target) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item === target) {
        return item;
      }
    }
  }

  /** リストの の中から引数に合致する値のindexを取得する。見つからない場合は-1を返す
   *
   * XXX: findIndex関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number}
   */
  findIndex(target) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item === target) {
        return i;
      }
    }
    return -1
  }

  /** リストの の中から要素に合致する数を取り除く
   *
   * 実際のデータ(this.data)に変更を加えることなく、新しい配列を返す形で実装しましょう。
   *
   * XXX: filter関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number[]}
   */
  filter(target) {
    const list = new List([]);
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item !== target) {
        list.push(item);
      }
    }
    return list;
  }
}

/**
 *  スタックの実装
 *
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 */

class Stack {
  data = [];

  /** スタックの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** スタックに要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  push(item) {
    this.data.push(item);
  }

  /** スタックから要素を取得する
   *
   * @param {Number} item
   * @return {Number}
   */
  pop() {
    return this.data.pop();
  }

  /** スタックの末尾の要素を参照する
   *
   * @param {Number} item
   * @return {Number}
   */
  peek() {
    return this.data[this.length - 1];
  }
}

/**
 *  キューの実装
 *
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 */

class Queue {
  data = [];

  /** キューの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** キューに要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  push(item) {
    this.data.push(item);
  }

  /** キューから要素を取得する
   *
   * @return {Number}
   */
  pull() {
    return this.data.shift();
  }

  /** キューの要素を参照する
   *
   * @return {Number}
   */
  peek() {
    return this.data[0];
  }
}

module.exports = {
  List,
  Stack,
  Queue
};