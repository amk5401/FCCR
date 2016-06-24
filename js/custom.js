$(document).ready(function () {
    //getData();
    applyHeader();
});

/* HEADER FUNCTION */

function applyHeader() {
    $('.jumbotron').css({ height: ($(window).height()) + 'px' });
    $('.aboutUsContainer').css({ height: ($(window).height()) + 'px' });
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