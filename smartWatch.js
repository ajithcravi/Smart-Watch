//Date and Time display code//

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
  document.getElementById('displaySeeTime').innerHTML = h + ":" + m;
  document.getElementById('displayTimeMsg').innerHTML = h + ":" + m;
  document.getElementById('displayTimeMsc').innerHTML = h + ":" + m;
  document.getElementById('displayTimeTme').innerHTML = h + ":" + m;
  document.getElementById('displayTimeTmeSW').innerHTML = h + ":" + m;
  document.getElementById('displayDate').innerHTML = dayArray[day] + "," + " " + date + " " + monthArray[month] + " " + year;
  document.getElementById('displaySeeDate').innerHTML = dayArray[day] + "," + " " + date + " " + monthArray[month] + " " + year;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//Screen Change Code//

function screenChange(flag){
  homeScreen = document.getElementById("homeScreen");
  message = document.getElementById("message");
  music = document.getElementById("music");
  time = document.getElementById("time");
  seeTime = document.getElementById("seeTime");
  stopWatch = document.getElementById("stopWatch");
  homeScreen.style.display = "none";
  message.style.display = "none";
  music.style.display = "none";
  time.style.display = "none";
  seeTime.style.display = "none";
  stopWatch.style.display = "none";

  if(flag==="0"){
    homeScreen.style.display = "block";
  }
  else if(flag==="1"){
    message.style.display = "block";
  }
  else if(flag==="2"){
    music.style.display = "block";
  }
  else if(flag==="3"){
    time.style.display = "block";
  }
  else if(flag==="4"){
    seeTime.style.display = "block";
  }
  else if(flag==="5"){
    stopWatch.style.display = "block";
  }
}

//Timer Code//

var start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    lap = document.getElementById('lap'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    document.getElementById('inputTime').innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

var click = 0;
/*lap button*/
lap.onclick = function() {
    x = document.getElementById('inputTime').innerHTML;
    click++;
    document.getElementById('displayLap').innerHTML = "Lap " + click + " : " + x;
    console.log(x);    
}

/* Clear button */
clear.onclick = function() {
    click = 0;
    document.getElementById('inputTime').innerHTML = "00:00:00";
    document.getElementById('displayLap').innerHTML = null;
    seconds = 0; minutes = 0; hours = 0;
}