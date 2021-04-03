var today = moment();
console.log(today.format("dddd MMM Mo YYYY"));

var now = document.getElementById('currentDay');
now.innerHTML = today;

//variables for the planner
var formel = $('#planner-form');
var task = $('input[name=""]')
var todolistEL = $('#ToDo-list')

function handleFormSubmit(event) {
  event.preventDefault();

  console.log('input:', task.val());
}
  formel.on('submit', handleFormSubmit);