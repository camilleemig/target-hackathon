$(document).ready(function() {
    $('.dislike').click(function() {
        $(this).closest('.col-md-4').remove()
    });
});

$(document).ready(function() {
    $('.like').click(function() {
        $(this).closest('.col-md-4').remove()
    });
});
