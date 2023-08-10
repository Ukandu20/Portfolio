<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "oukandu2000@gmail.com"; // Your email address
    $subject = $_POST["subject"];
    $fname = $_POST["first_name"];
    $lname = $_POST["last_name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $headers = "From:" .$fname. "<".$email.">";
    
    mail($recipient, $subject, $message, $headers) or die("Error!");
    
    echo "Message sent successfully!";
}
?>
