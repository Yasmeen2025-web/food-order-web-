<?php
$host = "localhost";
$user = "root"; // أو اسم المستخدم في الاستضافة
$password = "";
$dbname = "sofra_db";

// الاتصال بقاعدة البيانات
$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// استقبال البيانات
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$phone = $conn->real_escape_string($_POST['phone']);
$message = $conn->real_escape_string($_POST['message']);

// إدخال البيانات إلى الجدول
$sql = "INSERT INTO contact_messages (name, email, phone, message, created_at)
        VALUES ('$name', '$email', '$phone', '$message', NOW())";

if ($conn->query($sql) === TRUE) {
  echo "✅ Your message has been sent successfully.";
} else {
  echo "❌ Failed to send message: " . $conn->error;
}

$conn->close();
?>
