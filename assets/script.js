// Displays current date
var today = moment().format("MMM Do, YYYY");
$("#currentDay").text(today);

//console.log(today);

// When the save button is clicked, it saves the content of the textarea into local storage. 
$('.saveBtn').on('click', function(){
// When clicked, it saves the content of the element with the class description
var description = $(this).siblings('.description').val();
var key = $(this).parent().attr('id');

localStorage.setItem(key,description)

});

// Each time block is color-coded to indicate whether it is in the past, present, or future
function timeColor() {

    var currentHour = moment().hour();

    //console.log(currentHour);
    
    $(".time-block").each( function() {
        var elementHour = parseInt($(this).attr("id"));

        if (elementHour === currentHour) {
            $(this).addClass("present");
        }
        else if (elementHour < currentHour) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }

    })
};

//Call function
timeColor();


// Saved items persists when page refreshes
$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))