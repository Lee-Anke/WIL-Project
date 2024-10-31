<?php
session_start();
$mysqli = new mysqli('localhost', 'root', '', 'realhome');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first_name = $mysqli->real_escape_string($_POST['first_name']);
    $last_name = $mysqli->real_escape_string($_POST['last_name']);
    $email = $mysqli->real_escape_string($_POST['email']);
    $password = $mysqli->real_escape_string($_POST['password']);
    $confirm_password = $mysqli->real_escape_string($_POST['confirm_password']);

    if ($password === $confirm_password) {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Check if email is already registered
        $result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

        if ($result->num_rows > 0) {
            $_SESSION['error'] = "Email is already registered.";
            header('Location: register.html');
        } else {
            // Insert new user into the database
            $sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$hashed_password')";

            if ($mysqli->query($sql)) {
                $_SESSION['message'] = "Registration successful! You can log in now.";
                header('Location: login.html');
            } else {
                $_SESSION['error'] = "Registration failed. Please try again.";
                header('Location: register.html');
            }
        }
    } else {
        $_SESSION['error'] = "Passwords do not match.";
        header('Location: register.html');
    }
}
?>