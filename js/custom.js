$(document).ready(function () {
    //getData();
    applyHeader();
});

/* HEADER FUNCTION */

function applyHeader() {
    $('.jumbotron').css({ height: ($(window).height()) + 'px' });
}