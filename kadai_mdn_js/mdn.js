const today = new Date();
const [month, day, year] = [
  today.getMonth() +1,
  today.getDate() ,
  today.getFullYear(),
];

console.log(year + '年' + month + '月' + day + '日');


// ーーーメモーーー
// JavaScriptで今日の日付を取得して、コンソールに出力するコードを記述してください。
// 年、月、日をそれぞれDateクラスの関数を使って取得して、文字列としてconsole.logで出力します。

// Date.parse() および Date() コンストラクターは、どちらも日時文字列形式の文字列を入力として受け入れます。さらに、入力がこの形式に一致しない場合、実装が他の日付形式にも対応することが許されています。
// Date()
// コンストラクターとして呼び出された場合、新しい Date オブジェクトを返します。関数として呼び出された場合、現在の日付と時刻の文字列表現を返します。
// 日付のみの形式: YYYY, YYYY-MM, YYYY-MM-DD
// const today = new Date();
// const moonLanding = new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getFullYear());


// 過程
// -------①-------
// const today = new Date();
// const [month, day, year] = [
//   today.getMonth(),
//   today.getDate(),
//   today.getFullYear(),
// ];
// console.log(today);
// ↓コンソール表示はこうなった
// Thu Jan 02 2025 19:07:03 GMT+0900 (日本標準時)

// ↓修正
// -------②-------
// const today = new Date();
// const [month, day, year] = [
//   today.getMonth(),
//   today.getDate(),
//   today.getFullYear(),
// ];
// console.log(year + '年' + month + '月' + day + '日');
// ↓コンソール表示はこうなった
// 2025年0月2日

// 月: 0 （1 月） 〜 11 （12 月）
// ※getMunthは11を返す
// getMonth() メソッドは、地方時に基づき、指定された日付の「月」を表す 0 を基点とした値（すなわち 0 が年の最初の月を示す）を返します。　つまり0は1月

// console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(today));
// →コンソールにR7/1/2と表示された。

// ↓修正
// -------③-------
// 提出物




