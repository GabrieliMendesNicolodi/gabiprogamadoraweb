<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';


if(isset($_POST['enviar'])){

$mail = new PHPMailer(true);

$contact_name = $_POST['nome'];
$contact_mail = $_POST['email'];
$contact_msg = $_POST['msg'];

try {
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
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
    $mail->Subject = 'Contato Website Gabi Programadora Web';
    $mail->Body    = $contact_msg;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Seu email foi enviado com sucesso! <a href="https://gabrielimendesnicolodi.github.io/gabiprogamadoraweb/">Voltar ao site</a>';
} catch (Exception $e) {
    echo "Sua mensagem não pode ser enviada! Error: {$mail->ErrorInfo}";
}

}else{
    echo 'Sua mensagem não pode ser enviada. <a href="https://gabrielimendesnicolodi.github.io/gabiprogamadoraweb/">Voltar ao site</a>';
}