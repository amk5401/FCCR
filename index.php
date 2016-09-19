<?php include 'header.php' ?>

<div id="top" class="jumbotron" data-position="center center">
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-body" style="color: black">
                <div class="media">
                    <div class="media-body">
                        <h1 class="media-heading">Fall Fundraiser</h1>
                        <p>
                            We're raising money to pay for our fall season's equipment/coaching expenses. We'll be
                            racing in the Head of the Genesee Regatta on October 8th, and the top 10 donations will get
                            to add whatever message or phrase they like to the back of our racing shirts!
                            <br></br>
                            <a onclick="location.href='shirtFundraiser.php'" class="alert-link">Click here to learn more!</a>
                        </p>
                    </div>
                    <div class="media-right">
                        <img class="media-object" src="assets/images/shirt.png" style="height: 150px; margin-top: 70px;">
                    </div>
                </div>
            </div>
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
