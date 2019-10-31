
$(".panel-content").click(function() {
    $(".panel-body").html('');
    $(".content").html("Loading...");
    let id = $(this).attr('id');// get id from all .content
    getName(id);
});


// AJAX call
function getName(id) {

    $(".panel-body").addClass("img-spinning"); // add spinning gif
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'jsonp',
        success: function(data) {
            $('.content').fadeIn('slow')
            for (i = 0; i < data.length; i++) {
                $(".content").html(data[id].name) // set string at .content
            }
            $(".panel-body").removeClass('img-spinning');// remove spinning gif 
        }
    });
};




$(document).ready(function() {

    $('#commentForm').validate({ // validate plugin
        rules: { // set rules
            name: {
                required: true,
                minlength: 2,
            },
            surname: {
                required: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true,
            },
            number: {
                required: true,
                minlength: 5,
            },
            comment: {
                required: true,
                minlength: 5,
            },
        },
        submitHandler: function(form) { 
            alert('valid form submitted'); 
            $('#commentForm').find('input:email').val('');//clear form val('')
            $('#commentForm').find('input:number').val('');
            $('#commentForm').find('input:text').val('');
        }
    });
});


