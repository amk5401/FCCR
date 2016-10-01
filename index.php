<?php include 'header.php' ?>

<div id="top" class="jumbotron" data-position="center center">
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-body" style="color: black">
                <div class="media">
                    <div class="media-body">
                        <h1 class="media-heading">Fall Fundraiser</h1>
                        <p>
                            This fundraiser is now over. Thank you to everyone who donated! The top 10 donations are as follows:
                            <br /><br /> 
                            Athletic Outlet, The Massari Family, The Fishers, Julian Kowalczyk, KMB Yoga, Kailey Rae, 
                            "Legs Feed the Wolf", Red Bird Market, Ohashi, Rodger
                            <br /><br />
                            These names and messages will be displayed on our backs as we race in the Head of the Genesee Regatta 
                            on October 8th. Be sure to come watch and support us!
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
