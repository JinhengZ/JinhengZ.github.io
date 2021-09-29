

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
        title:"Oops...! Please fill all blanks.",
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

function InpHasLetter()
{
    let y = false;
    var x=document.forms["contactMe"]["user_phone"].value;
    if (isNaN(x))
    {
        y = true;
    }
    return y;
}


function validate() {
    let user_lname = document.getElementById('user_lname').value;
    let user_fname = document.getElementById("user_fname").value;
    let user_phone = document.getElementById('user_phone').value;
    let user_email = document.getElementById('user_email').value;
    let user_message = document.getElementById('user_message').value;


        if (user_lname === "" || user_fname === "" || user_phone === "" || user_message === "" || user_email === "") {
            inputempty();
            error();
            console.log("Email failed to send, because something went wrong")
        }else if(InpHasLetter()===true){
            Swal.fire({
                title:"Oops...! Please check your phone number's format",
                test:"Failed to send message because the phone number is wrong format",
                icon:"error",
                button:"OK",
        })}
        else{
        sendmail(user_lname,user_fname,user_phone,user_message,user_email);
        success();
        console.log("Email sent")
    }

}

function sendmail() {
    emailjs.send('service_p4schuv', 'template_o9jzx42',{
        user_fname: user_fname.value,
        user_lname: user_lname.value,
        user_phone: user_phone.value,
        user_email: user_email.value,
        user_message: user_message.value,
    });

}


