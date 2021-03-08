<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../phpmailer/src/Exception.php';
require '../phpmailer/src/PHPMailer.php';
require '../phpmailer/src/SMTP.php';


try {
    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';

    $to = $_POST['test_email'];
    $message = $_POST['test_message'];
    $name = $_POST['name'];
    $files_link = $_FILES['test_file']['tmp_name'];
    $files_name = $_FILES['test_file']['name'];


    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;

    $mail->Host = 'ssl://smtp.gmail.com';
    $mail->Port = 465;
    $mail->Username = 'lotostoii@gmail.com';
    $mail->Password = 'EUDaawww1';

    $mail->setFrom('lotostoii@gmail.com', 'Alexander Plotnikov');

    $mail->addAddress($to, $name);

    $mail->Subject = 'Отправка почты';

    $body = "<p>{$message}</p>";
    $body .= "<p>C уважением Александр Плотников.</p>";

    $mail->msgHTML($body);

    foreach ($files_link as $key => $file) {
        $mail->addAttachment($file, $files_name[$key]);
    }

    $mail->send();

    echo json_encode(['result' => true]);
} catch (Exception $e) {
    echo json_encode(['result' => false]);
}
