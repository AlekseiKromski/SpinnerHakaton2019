
// JavaScript contact form Document
$(document).ready(function() {
	$('form#contact-form').submit(function(eve) {
	   $('form#contact-form .error').remove();

    	var hasError = false;

    	$("#contact-form input[required=required], #contact-form textarea[required=required]").each(function() {
    	   if(jQuery.trim($(this).val()) =='') {
               
               var labelText = $(this).prev('label').text();
                
                $(this).parent().prepend('<span class="error">Please fill out this field. </span>');
                $(this).addClass('inputError');
                hasError = true;

            } else if($(this).hasClass('email')) {

                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(jQuery.trim($(this).val()))) {
                        
                     var labelText = $(this).prev('label').text();
                    $(this).parent().append('<span class="error">You entered an invalid '+labelText+'</span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });

        if(!hasError) {
        $('form#contact-form input.submit').fadeOut('normal', function() {
        $(this).parent().append('');
        });

         $("#loader").show();
            $.ajax({
                url: "php/contact.php",
                type: "POST",
                data:  new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                success: function(data){
    			  $('form#contact-form').slideUp("fast", function() {
    			  $(this).before('<div class="success">Thank you. Your Email was sent successfully.</div>');
    			  $("#loader").hide();
    			  })
                }           
           });
    	   
    	   return false;
        }else{
            eve.preventDefault();
        }
     
    });
});