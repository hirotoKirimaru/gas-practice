function main() {
  //アクセス可能なカレンダーのIDを指定して、Googleカレンダーを取得する
  let myCalendar = CalendarApp.getCalendarById(Properties.MY_MAIL);
  //Googleカレンダーから取得するイベントの開始日(今日)を設定する
  let startDate = new Date();
  //Googleカレンダーから取得するイベントの終了日(1週間後)を設定する
  let endDate = new Date();
  endDate.setDate(startDate.getDate() + 7);
  //開始日～終了日に存在するGoogleカレンダーのイベントを取得する
  let myEvent = myCalendar.getEvents(startDate, endDate);
  //forループの処理で取得したイベントの件名をログ出力する
  for (let i = 0; i < myEvent.length; i++) {
    console.log(myEvent[i].getTitle());
  }
}