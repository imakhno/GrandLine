<?php

require_once('PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];

$mail->IsSMTP();
$mail->Host = 'ssl://smtp.yandex.ru'; // хост почты
$mail->Port = 465; // Порт почты
$mail->SMTPAuth = true;
$mail->Username = ''; // Почта, с которой отправляется письмо
$mail->Password = ''; // Пароль почты, с которой отправляется письмо
// $mail->SMTPSecure = 'ssl';
// $mail->Port = 465;

$mail->setFrom('iwan.mahno2015@yandex.ru'); // Почта, с которой отправляется письмо
$mail->addAddress('Actum.inside@gmail.com');  // Почта, куда приходят сообщения

$mail->isHTML(true);

$mail->Subject = 'Обратный звонок GrandLine!';
$mail->Body    = '' .$name . ' оставил заявку, его телефон: ' .$phone . '';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Сообщение не могло быть отправлено.';
    echo 'Ошибки: ' . $mail->ErrorInfo;
} else {
    header('location: /success.php');
}