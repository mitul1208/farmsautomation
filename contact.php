<?php
$to = "farmautomations@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

$headers .= "Cc: someone@domain.com \r\n";

$headers .= "Bcc: someoneelse@domain.com \r\n";

mail($to,$email_subject,$email_body,$headers);
?>
