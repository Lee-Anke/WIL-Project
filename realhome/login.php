<?php
session_start();
$mysqli = new mysqli('localhost', 'root', '', 'realhome');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $mysqli->real_escape_string($_POST['email']);
    $password = $mysqli->real_escape_string($_POST['password']);

    // Retrieve user data
    $result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['first_name'] = $user['first_name'];
            header('Location: index.html'); // Redirect to the home page
        } else {
            $_SESSION['error'] = "Incorrect password.";
            header('Location: login.html');
        }
    } else {
        $_SESSION['error'] = "Email not registered.";
        header('Location: login.html');
    }
}
?>
