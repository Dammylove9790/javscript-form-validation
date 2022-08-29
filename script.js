
let fullname = document.getElementById('fullname');
let phone_number = document.getElementById('phone_number');
let email = document.getElementById('email');
let image = document.getElementById('image');
let detail_view = document.getElementById('detail_view');

let fullname_error = document.getElementById('fullname_error');
let phone_number_error = document.getElementById('phone_number_error');
let email_error = document.getElementById('email_error');
let image_error = document.getElementById('image_error');


let form1 = document.forms[0];
form1.addEventListener("submit", function (event){
    event.preventDefault();

    name_check();
    phone_number_check();
    email_check();
    image_check();
    
    if (name_check() == true && phone_number_check() == true && email_check() == true && image_check() == true) {
        // form1.submit();
        detail_view.innerHTML = '<div class="form-group"> Name : ' + fullname.value.trim() + '</div>' + '<div class="form-group"> Phone Number : ' + phone_number.value.trim() + '</div>' + '<div class="form-group"> Email Address : ' + email.value.trim() + '</div>' + '<div class="form-group"> User Image : ' + image.value.trim() + '</div>';
    }
})



function show_errors(element, error_message){
    element.innerHTML = error_message;
}


function name_check(){
    let fullname = document.getElementById('fullname').value.trim();

    if (fullname == 0){
        show_errors(fullname_error, "Please provide your fullname");
        return false;
    }
    else if (!fullname.match(/^[a-zA-Z]*\s[a-zA-Z]*$/)){
        show_errors(fullname_error, "Fullname must be seperated with a space");
        return false;
    }
    else if (fullname.length < 10){
        show_errors(fullname_error, "Fullname not valid yet");
        return false;
    }
    else{
        fullname_error.innerHTML = "";
        return true;
    }
}


function phone_number_check(){
    let phone_number = document.getElementById('phone_number').value.trim();
    
    if (phone_number == 0){
        show_errors(phone_number_error, "Please provide your phone number");
        return false;
    } else if (!phone_number.match(/^[0][7-9][0-1][0-9]{8}$/)){
        show_errors(phone_number_error, "Phone number not valid");
        return false;
    } else {
        phone_number_error.innerHTML = "";
        return true;
    }
}


/*      \d is for allowing digits         */
function email_check(){
    let email = document.getElementById('email').value.trim();
    
    if (email == 0){
        show_errors(email_error, "Please provide your email address");
        return false;
    } else if (!email.match(/^[a-zA-Z\d\._-]*@[a-zA-Z]*\.[a-zA-Z\.]{2,}$/)){
        show_errors(email_error, "Email address not valid");
        return false;
    } else {
        email_error.innerHTML = "";
        return true;
    }
}


function image_check(){
    let image = document.getElementById('image');

    if (image.value == 0){
        show_errors(image_error, "Please select an image to upload");
        return false;
    } else if (!image.value.match(/(\.jpg|\.png|\.jpeg)/)){
        show_errors(image_error, "Please select a valid image");
        return false;
    } else if (image.files[0].size > (1024 * 300)){
        show_errors(image_error, "Image must not be greater than 100kb");
        return false;
    } else {
        image_error.innerHTML = "";
        return true;
    }
}