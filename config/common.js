'use strict';
import moment from 'moment-timezone';

function resSend(res, data) {
  if (data.error) { timeLog('    error=' + JSON.stringify(data.error)) }
  res.send(data)
  timeLog('    ==> res=' + JSON.stringify(data))
}

function consoleBar() {
// 콘솔에 구분선 출력
  console.log('-------------------------------------------------------------------');
}

function timeLog(log) {
// 실행 시간을 KST로 출력
  const time_current = moment().tz('Asia/Seoul').format('YYYY-MM-DD H:mm:ss');
  console.log('[KST: ' + time_current + '] ' + log);
}

export { resSend, consoleBar, timeLog };
// (패키지처럼) 밖에서 사용할 수 있게 해주는 역할