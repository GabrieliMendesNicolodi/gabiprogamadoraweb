<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(isset($_POST['enviar'])){

$mail = new PHPMailer(true);

$contact_name = $_POST['name'];
$contact_mail = $_POST['email'];
$contact_msg = $_POST['msg'];

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'gabiprogramadoraweb@gmail.com';
    $mail->Password = 'vudteksgnrvhzjpw';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('gabiprogramadoraweb@gmail.com', 'Website');
    $mail->addAddress('gabiprogramadoraweb@gmail.com', $contact_name);
    //$mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC($contact_mail);
    //$mail->addBCC('bcc@example.com');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Contato';
    $mail->Body    = $contact_msg;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

}else{
    //caso não tenha preenchido os campos necessários ou não clicando no botão enviar
}