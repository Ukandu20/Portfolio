function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "oukandu2000@gmail.com",
        Password : "Apexgoldchain765",
        To : 'oukandu2000@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Request",
        Body : "And this is the body"
    }).then(
      message => alert(" Message sent successfully")
    );
}