// scripts.js
$(document).ready(function() {
    // Contact Us Button
    $('#contactUsButton').click(function() {
        $('#contactUsModal').modal('show');
    });

    // Submit form to getform.io
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        
        // Add your getform.io endpoint
        var endpoint = 'https://getform.io/f/your-getform-endpoint';

        var formData = {
            email: $('#email').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            terms: $('#terms').is(':checked')
        };

        $.ajax({
            url: endpoint,
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Form submitted successfully');
                $('#contactUsModal').modal('hide');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('There was an error submitting the form');
            }
        });
    });

    // Change project image on list item click
    $('.list-group-item').click(function() {
        var imageSrc = $(this).data('image');
        $('#projectImage').attr('src', imageSrc);
        //added
       
    });

    // Hover effect for "What We Do" section
    $('.carousel-item img').hover(function() {
        $(this).attr('src', 'hover-image.jpg');  // Replace with your hover image
    }, function() {
        // Code to revert back to original image
        var originalSrc = $(this).parent().find('img').data('original');
        $(this).attr('src', originalSrc);
    });
});
