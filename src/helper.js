// 쿠키 생성
export function setCookie(cName, cValue, cHour) {
  var expire = new Date();
  expire.setHours(expire.getHours() + cHour);
  var cookies = cName + '=' + escape(cValue) + '; path=/ ';
  if (typeof cHour != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
  document.cookie = cookies;
}

// 쿠키 가져오기
export function getCookie(cName) {
  cName = cName + '=';
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = '';
  if (start != -1) {
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}
