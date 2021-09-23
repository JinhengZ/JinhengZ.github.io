

(function() {
    emailjs.init("user_XFdzTdNqw9XMEvhvx7UHP");
})(
);

function success(){
    Swal.fire({
        title:"Good job!",
        test:"Successfully sent message!",
        icon:"success",
        button:"OK",
    });
}


function error(){
    Swal.fire({
        title:"Oops...!",
        test:"Failed to send message because something went wrong",
        icon:"error",
        button:"OK",
    });
}


function inputempty(){
    Swal.fire({
        title:"Oops...",
        test:"Inputs fields are required!",
        icon:"error",
        button:"OK",
    });
}


function validate() {
    let user_lname = document.getElementById('user_lname').value;
    let user_fname = document.getElementById("user_fname").value;
    let user_phone = document.getElementById('user_phone').value;
    let user_email = document.getElementById('user_email').value;
    let user_message = document.getElementById('user_message').value;

        //alert(user_fname)
        if (user_lname === "" || user_fname === "" || user_phone === "" || user_message=== "" || user_email === "") {
            inputempty();
            error();
            console.log("Email failed to send, because something went wrong")
        } else {
            //sendmail(user_lname.value,user_fname.value,user_phone.value,user_message.value,user_email.value)
            success();
            console.log("email sent")
        }

}

function sendmail() {
    emailjs.send('service_p4schuv', 'template_o9jzx42',{
        first_name: user_fname,
        last_name: user_lname,
        phone_number: user_phone,
        email_address: user_email,
        message: user_message,
    });

}


