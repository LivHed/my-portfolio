// The function takes the EmailJS serviceID (the id of the service through which the email should be sent),
// the templateID (which is the template id of the email)
// and the templateParams (parameters of the template)
// to be able to send an email through the contact form. 

function sendMail(contactForm) {
    emailjs.send("gmail", "contactportfolio", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_request": contactForm.messagefield.value
    })
    .then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert('Your email is sent!');

            document.getElementById('myform').reset(); //// the form fields resets after the user click on send button.
        },
        function(error) {
            console.log("FAILED", error);
            alert('Oops, an error occured!')
        }
    );
    return false;  // To block from loading a new page when sent
}


