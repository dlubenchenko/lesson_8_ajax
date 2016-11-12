// JavaScript File

$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/d.lubenchenko@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('form').html('Thanck you!');
        })
        .fail(function() {
            $('form').html('Thanck you!');
        });
    });
});
