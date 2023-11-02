function sendEmail(){
    Email.send({
        Host : "smtp.mail.com",
        Username : "soumyadeepdas0302@gmail.com",
        Password : "D81F46BD9233F9CA001FC3976F01C53C6CF5",
        To : 'soumyadeepdas0302@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Help me this",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}