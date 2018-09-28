<?php

//adding our variables
if (isset($_POST['name']))  {$name = $_POST['name'];}
if (isset($_POST['phone']))  {$phone = $_POST['phone'];}
if (isset($_POST['email']))  {$email = $_POST['email'];}

// adding theme

$subject = 'Mail From Rabbit';
$to  = "Mary Karpenko <karpenko0207@gmail.com>" . ", ";
$to .= "Dmitry Sergeev <freenager@gmail.com@luft.tech>" . ", ";
$to .= "Sergey Jani <musmodo@gmail.com>";


$message = "
<h2>Rabbit | Java</h2>
<span style='font-size: 16px;'>Name : </span> $name <br>
<span style='font-size: 16px;'>Phone : </span> $phone <br>
<span style='font-size: 16px;'>Email : </span> $email <br> \n";


$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";


$headers .= "From: Rabbit\r\n";


mail($to, $subject, $message, $headers);



die();
?>
