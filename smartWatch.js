function startTime() {
  const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthArray = ["January", "February", "March",   "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var date = today.getDate();
  var day = today.getDay();
  var month = today.getMonth();
  var year = today.getFullYear();
  m = checkTime(m);
  document.getElementById('displayTime').innerHTML = h + ":" + m;
  document.getElementById('displayDate').innerHTML = dayArray[day] + "," + " " + date + " " + monthArray[month] + " " + year;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
