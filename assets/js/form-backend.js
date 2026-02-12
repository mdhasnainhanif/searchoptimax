jQuery("#innerpagebannerform").on("submit", function (event) {
    event.preventDefault();
    const form = jQuery(this);
    getfields = jQuery(this).serialize();
    console.log('getfields:', getfields);
    jQuery.ajax({
        type: "POST",
        url: ajaxurl, // Replace with the actual path to your PHP script
        data: getfields + '&action=innerpagebannerform',
        success: function (response) {
             form[0].reset();
            /*form.find('.alert-success').fadeIn();*/
             window.location.href = window.common.routes.thankyou;
        },
        error: function () {
            form.find('.alert-danger').fadeIn();
        }
    });
});

jQuery("#innerpagebannerform2").on("submit", function (event) {
    event.preventDefault();
    const form = jQuery(this);
    getfields = jQuery(this).serialize();
     console.log('getfields:', getfields);
    jQuery.ajax({
        type: "POST",
        url: ajaxurl, // Replace with the actual path to your PHP script
        data: getfields + '&action=innerpagebannerform',
        success: function (response) {
             form[0].reset();
            /*form.find('.alert-success').fadeIn();*/
             window.location.href = window.common.routes.thankyou;
        },
        error: function () {
            form.find('.alert-danger').fadeIn();
        }
    });
});



jQuery("#contact_form").on("submit", function (event) {
    event.preventDefault();
    const form = jQuery(this);
    getfields = jQuery(this).serialize();
    jQuery.ajax({
        type: "POST",
        url: ajaxurl, // Replace with the actual path to your PHP script
        data: getfields + '&action=contact_form',
        success: function (response) {
            form[0].reset();
            
            window.location.href = window.common.routes.thankyou;
        },
        error: function () {
            form.find('.alert-danger').fadeIn();
        }
    });
});

jQuery("#newsletter_form").on("submit", function (event) {
    event.preventDefault();
    const form = jQuery(this);
    getfields = jQuery(this).serialize();
    
    jQuery.ajax({
        type: "POST",
        url: ajaxurl, // Replace with the actual path to your PHP script
        data: getfields + '&action=newsletter_form',
        success: function (response) {
            form[0].reset();
            
            window.location.href = window.common.routes.thankyou;
        },
        error: function () {
            form.find('.alert-danger').fadeIn();
        }
    });
});

jQuery("#salesinquiry_form").on("submit", function (event) {
    event.preventDefault();
    const form = jQuery(this);
    getfields = jQuery(this).serialize();
    jQuery.ajax({
        type: "POST",
        url: ajaxurl, // Replace with the actual path to your PHP script
        data: getfields + '&action=salesinquiry_form',
        success: function (response) {
            form[0].reset();
            
            window.location.href = window.common.routes.thankyou;
        },
        error: function () {
            form.find('.alert-danger').fadeIn();
        }
    });
});

jQuery("#salesinquiry_form_inner_pages").on("submit", function (event) {
    event.preventDefault();
    const form = jQuery(this);
    getfields = jQuery(this).serialize();
    // console.log("fields:",getfields )
    jQuery.ajax({
        type: "POST",
        url: ajaxurl, // Replace with the actual path to your PHP script
        data: getfields + '&action=salesinquiry_form',
        success: function (response) {
            form[0].reset();
            
            window.location.href = window.common.routes.thankyou;
        },
        error: function () {
            form.find('.alert-danger').fadeIn();
        }
    });
});


               
                    /*jQuery("#contact_form_blog_single").on("submit", function (event) {
                        event.preventDefault();
                        getfields = $(this).serialize();
                        $.ajax({
                            type: "POST",
                            url: ajaxurl, // Replace with the actual path to your PHP script
                            data: getfields + '&action=contact_form_blog',
                            success: function (response) {
                                jQuery('#contact_form_blog_single .success-box').fadeIn();
                            },
                            error: function () {
                                jQuery('#contact_form_blog_single .error-box').fadeIn();
                            }
                        });
                    });*/