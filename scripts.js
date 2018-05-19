$(document).ready(function() {
    $('.dislike').click(function() {
        $(this).closest('.col-md-3').remove()
    });
});
