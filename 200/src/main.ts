class Term {
  startTime: Date;
  endTime: Date;
  constructor(targetDate as Date, ampmType as AMPMType) {
    this.startTime = new Date();
    this.endTime = new Date();
  }

  const AMPMType = {
    AM: 'AM',
    PM: 'PM'
  } as const;
  type AMPMType = typeof AMPMType[keyof typeof AMPMType];
}

function main() {
  // 参加者のカレンダーを取得する

  // 取得したい時間のリストを用意する
  // 1週間分(土日除く)と午前、午後の2つ(お昼休憩を除いて検索したい)

  // N分枠が開いているかどうかをチェックしに行く。


  let calendar = CalendarApp.getCalendarById(Properties.MY_MAIL);
  
  const today = new Date();
  let startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0, 0);
  let endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0);

  // let endDate = startDate.getDate() + 7
  
  //開始日～終了日に存在するGoogleカレンダーのイベントを取得する
  let eventList = calendar.getEvents(startDate, endDate);
  //forループの処理で取得したイベントの件名をログ出力する
  for (const event of eventList) {
    console.log(event);
  }
  // TODO: 参加者全員の空き時間を見つけてサジェスチョンしたい
}