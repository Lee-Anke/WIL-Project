<?php
include 'db.php';

$title = $_POST['title'];
$location = $_POST['location'];
$price = $_POST['price'];
$type = $_POST['type'];
$description = $_POST['description'];
$image_url = $_POST['image_url'];

$sql = "INSERT INTO properties (title, location, price, type, description, image_url) VALUES ('$title', '$location', '$price', '$type', '$description', '$image_url')";

if ($conn->query($sql) === TRUE) {
    echo "New property added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
