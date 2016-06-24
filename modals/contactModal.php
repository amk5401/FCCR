<div class="modal fade" id="contact-modal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Contact Us</h4>
            </div>
            <form class="form-horizontal">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name-text" class="col-md-4 control-label">Name</label>
                        <div class="col-md-6">
                            <input id="name-text" type="text" name="name" class="form-control" aria-describedby="event-field">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email-text" class="col-md-4 control-label">Email</label>
                        <div class="col-md-6">
                            <input id="email-text" type="text" name="email" class="form-control" aria-describedby="event-field">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="experience-text" class="col-md-4 control-label">Rowing Experience</label>
                        <div class="col-md-6">
                            <input id="experience-text" type="text" name="experience" class="form-control" aria-describedby="event-field">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-md-4 control-label">Message</label>
                        <div class="col-md-6">
                            <textarea id="message-text" type="text" name="message" class="form-control" aria-describedby="event-field"></textarea>
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-default" onclick="sendNewMessage(); return false">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>
