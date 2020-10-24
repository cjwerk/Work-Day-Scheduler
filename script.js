var workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};

$(document).ready(function () {
    if (!localStorage.getItem('workDay')) {
        updateCalendarTasks(workDay);
    } else {
        updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
    }
})

$('#currentDay p').text(moment().format('dddd') + "," + moment().format('MMMM Do YYYY, h:mm:ss a'));

var counter = 1,

for(var property in workDay) {
    var textEntry = "#text-entry" + counter;
    $(textEntry).text(workDay[property]);
    var timeId = "#time" + counter;
    var presentHour = moment().hour();
    var timeString = $(timeId).text();
    var timeNumber = hourNumberFromHourString(timeString);
    if (timeNumber < presentHour) {
        $(textEntry).addClass("past")
    } else if (timeNumber > presentHour) {
        $(textEntry).addClass("future")
    } else {
        $(textEntry).addClass("present")
    }
    counter++;
}