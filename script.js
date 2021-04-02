var saveBtn = $('.save-icon');
var currentDay = $('#currentDay')
var row = $('.row');
var container = $('.container');
var nine = $('#nine');
// sets current hour to variable
currentHour = moment().format('kk');
var currentDay = null,
        date = null;

// will update the variable to current date
var updateTime = function  () {
    date = moment(new Date())
    currentDay.html(date.format('dddd, MMMM Do YYYY'));
};

// updates rows' color based off their hour value compared to the current hour
function updateRowColors() {
    row.each(function() {
        if ($(this).data('hour') > currentHour) {
            $(this).children('textarea').css('background-color', '#33cc33')
        } else if ($(this).data('hour') < currentHour) {
            $(this).children('textarea').css('background-color', 'lightgrey')
        } else {
            $(this).children('textarea').css('background-color', '#ff3333')
        }
    })
};

// this sets each rows' text box content to the corresponding local storage value
function setTextToRow() {
    row.each(function() {
        var rowText = $(this).children('textarea');
        var rowHour = $(this).data('hour');
        rowText.text(localStorage.getItem(rowHour));
    })
};
      
// when save is clicked, the corresponding textbox content is saved to local storage in own variable.
saveBtn.on('click', $(this).prev(), function() {
    var rowHour = $(this).parent().data('hour');
    var savedText = $(this).prev().val();
    localStorage.setItem(rowHour, savedText);
})
            
// when document loads, the current day is set, and each rows' color and content is updated on an interval.           
$(document).ready(function(){
    currentDay = $('#currentDay')
    updateTime();
    updateRowColors();
    setInterval(updateTime, 1000);
    setInterval(updateRowColors, 1000);
    setTextToRow();
});