<?php
$servername = "localhost";
$username = "root"; // Default username for XAMPP is 'root'
$password = ""; // Leave this empty for default
$dbname = "realhome_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
