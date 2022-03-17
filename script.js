var createTask = function(taskText, taskDate, taskList) {
    // create elements that make up a task item
    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>")
      .addClass("badge badge-primary badge-pill")
      .text(taskDate);
    var taskP = $("<p>")
      .addClass("m-1")
      .text(taskText);
}  

//moment script

var m = moment();

//date and time
$("#currentDay").text(moment().format("LLLL"));

$(document).ready(function() {
    colorChange();
    WebGL2RenderingContext();
});