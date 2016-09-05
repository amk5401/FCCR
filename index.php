<?php include 'header.php' ?>

<div id="top" class="jumbotron" data-position="center center">
    <div class="container">
        <div class="alert alert-success" role="alert">
            <strong>Guess what?</strong>
            We have a new fundraiser going on. Click
            <a onclick="location.href='shirtFundraiser.php'" class="alert-link">here</a>
            to learn more.
        </div>
        <h1>Flower City Collegiate Rowing</h1>
        <p>For the love of rowing</p>
        <div class="button-container">
            <div onclick="location.href='aboutUs.php'" class="button-custom">Our Story</div>
            <div data-toggle="modal" data-target="#contact-modal" class="button-custom">Contact Us</div>
        </div>
    </div>
    <div class="overlay"></div>
</div>

<?php include 'footer.php' ?>

<?php require 'modals/contactModal.php' ?>