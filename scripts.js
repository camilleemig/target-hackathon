$(document).ready(function() {
    $('.dislike').click(function() {
        $(this).closest('.col-md-4').remove()
    });
});
