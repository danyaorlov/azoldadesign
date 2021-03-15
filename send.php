<?php
$name = $_POST['name'];
$phone = $_POST['telephone'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$comment = htmlspecialchars($comment);

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$comment = urldecode($comment);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$comment = trim($comment);

$to = 'azolka@inbox.ru';
$subject = 'Заказ с сайта';
$message = "ФИО:".$name.". Телефон: ".$phone." Почта: ".$email." Комментарий:  ".$comment;
$headers = array(
    'From' => 'azolda@garaeva.com',
    'Reply-To' => 'azolda@garaeva.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

if (mail($to, $subject, $message,$headers))
{
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки ".$phone.$name.$email.$comment;
}

