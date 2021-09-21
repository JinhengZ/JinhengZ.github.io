(function() {
    emailjs.init("user_XFdzTdNqw9XMEvhvx7UHP");
})();

function sendmail(){
    let lName = document.getElementById('lname').value;
    let fName = document.getElementById("fname").value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let userMessage = document.getElementById('message').value;

        var contactParams = {
            first_name: fName,
            last_name: lName,
            phone_number: phoneNumber,
            email_address: emailAddress,
            message: userMessage
        };

        emailjs.send('service_p4schuv','template_o9jzx42',contactParams)
            .then(function(response){ console.log('SUCCESS!', response.status, response.text);
            },
                function(error) {
                    console.log('FAILED...', error);
                }
            )
}