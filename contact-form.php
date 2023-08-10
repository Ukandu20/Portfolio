<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "oukandu2000@gmail.com"; // Your email address
    $subject = $_POST["subject"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $headers = "From: $name <$email>";
    
    mail($recipient, $subject, $message, $headers);
    
    echo "Message sent successfully!";
}
?>
