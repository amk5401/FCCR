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

initializeClock('clockdiv', '2016-11-05');

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function () {
        var t = getTimeRemaining(endtime);
        clock.innerHTML = 'Countdown until we have a team mascot:<br>' +
                          'Days: ' + t.days + '<br>' +
                          'Hours: ' + t.hours + '<br>' +
                          'Minutes: ' + t.minutes + '<br>' +
                          'Seconds: ' + t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}