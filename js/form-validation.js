$(document).ready(function(){
    $("#registration").validate({
        errorElement: "div",
        errorLabelContainer: "#error_message span",
        
        // Specify validation rules
        rules:{
            firstname: {
                required: true,
                maxlength: 20
            },
            lastname: {
                required: true,
                maxlength: 20
            },
            email:{
                required: true,
                email:true
            },
            password:{
                required: true,
                minlength: 5
            }
        },
        // Specify validation error messages
        messages:{
            "firstname":{
                required: "You must enter your full first name",
                maxlength: "First name cannot be more than 20 characters long"
            },
            "lastname":{
                required: "You must enter your full last name",
                maxlength: "Last name cannot be more than 20 characters long"
            },
            "email":{
                required: "You must enter your email address",
                email: "Not a valid email address"
            },
            "password":{
                required: "You must enter a password",
                minlength: "Password cannot be less than 5 characters long"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});