$(document).ready(function () {
    //getData();
    applyHeader();
});

/* HEADER FUNCTION */

function applyHeader() {
    $('.jumbotron').css({ height: ($(window).height()) + 'px' });
    $('.parallax-image.team-image > .parallaxContainer').css({ height: ($(window).width()/3.84) + 'px' });
}

function sendNewMessage() {
    var link = "mailto:amk5401@rit.edu"
         + "?subject=" + escape(document.getElementById('name-text').value + " is interested in FCCR")
         + "&body=" + escape("Name: " + document.getElementById('name-text').value
            + "\nEmail: " + document.getElementById('email-text').value
            + "\nExperience: " + document.getElementById('experience-text').value
            + "\nMessage: " + document.getElementById('message-text').value)
    ;
    window.location.href = link;
    $('.modal').modal('hide');
}

//Cause I dont like the look of the normal controls
function playPause() {
    var rowingClip = document.getElementById("rowingClip");
    var arrow = document.getElementById("playArrow");
    if (rowingClip.paused) {
        rowingClip.play();
        arrow.style.visibility = 'hidden';
    }
    else {
        rowingClip.pause();
        arrow.style.visibility = 'visible';
    }
}

var countDownDate = new Date("Nov 5, 2016 00:00:00").getTime();
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("clockdiv").innerHTML = 'Countdown until we have a team mascot:<br>' +
                                                        'Days: ' + days + '<br>' +
                                                        'Hours: ' + hours + '<br>' +
                                                        'Minutes: ' + minutes + '<br>' +
                                                        'Seconds: ' + seconds;

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);