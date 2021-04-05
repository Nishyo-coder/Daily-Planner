var today = moment();
console.log(today.format("dddd MMM Mo YYYY"));

var now = document.getElementById('currentDay');
now.innerHTML = today;

//variables for the planner
var plannerformel = $('#planner-form');
var taskOneEl = $('input[name="Task-One"]');
var taskTwoEl = $('input[name="Task-Two"]');
var taskThreeEl = $('input[name="Task-Three"]');
var taskFourEl  = $('input[name="Task-Four"]');
var taskFiveEl = $('input[name="Task-Five"]');
var taskSixEl = $('input[name="Task-Six"]');
var taskSevenEl = $('input[name="Task-Seven"]');
var taskEightEl = $('input[name="Task-Eight"]');
var taskNineEl  = $('input[name="Task-Nine"]');
var taskTenEl = $('input[name="Task-Ten"]');
var timeBlock = $('.form-input');
var formbuttonEl = $('#formbutton')

function handleFormSubmit(event) {
  event.preventDefault();

  var selected = [];

  $.each(function () {
    selected.push($(this).val());
  });
  console.log('Input: ', selected.join(', '));

  localStorage.setItem('input', selected);
  
  // clear the form input element
  $('input[type="text"]').val('');
}
  plannerformel.on('submit', handleFormSubmit);
  var saveButton = localStorage.getItem('input');


  //if the timeblock is equal to the current time then the timeblock when clicked is red

  //if the timeblock is less than the current time then the timeblock when clicked is grey

  //if the timeblock is greater than the current time then timeblock when clicked is green

  timeBlock.addeventlistener("click", function() {
    if (hour > 8 && hour < 23) {
      $('time-block').addClass('present');
      timeBlock.setAttribute("present");
    
    }
  });

