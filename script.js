
//moment script

var m = moment();

//date and time
$("#currentDay").text(moment().format(`LLLL`));

$(document).ready(function() {
    colorChange();
    renderText();
});

function colorChange(){
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);

//past present or future blocks
$('.input').each(function () {
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);
    if(currentTime > scheduledTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (currentTime <scheduledTime) {
        $(this).removeClass("present");
        $(this).removeClass("past")
        $(this).addClass("future");
    }
    else {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    }
})

}
// button functionality
var eventText;
var eventTime;

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime,JSON.stringify(eventText));


colorChange();
renderText();

});

$(".deletebtn").click(function() {
    eventText = $(this).siblings(".input").val("");
    eventText = $(this).siblings(".input").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange();
    renderText();
});
