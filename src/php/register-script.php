<?php

    session_start();

    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'RybiarzeDB';

    $connection = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

    if (mysqli_connect_errno()) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    if (!isset($_POST['email'], $_POST['password'], $_POST['confirm_password'], $_POST['statute'])) {
        header("Location: register.php");
        exit;
    }
    if (empty($_POST['email']) || empty($_POST['password']) || empty($_POST['confirm_password'])) {
        exit('Please complete the registration form');
    }

    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    $query = "SELECT * FROM users WHERE email = ?";
    $statement = mysqli_prepare($connection, $query);
    mysqli_stmt_bind_param($statement, 's', $email);
    mysqli_stmt_execute($statement);
    mysqli_stmt_store_result($statement);

    if (mysqli_stmt_num_rows($statement) > 0) {
        $_SESSION['error'] = 'Użytkownik o podanym adresie e-mail istnieje w naszej bazie';
        header("Location: register.php");
        exit;
    }

    if ($password !== $confirm_password) {
        $_SESSION['error'] = 'Hasła się nie pokrywają';
        header("Location: register.php");
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $normalized_email = strtoupper($email);

    $query = "INSERT INTO users (email, normalizedEmail, passwordHash) VALUES (?, ?, ?)";
    $statement = mysqli_prepare($connection, $query);
    mysqli_stmt_bind_param($statement, 'sss', $email, $normalized_email, $hashed_password);

    if (mysqli_stmt_execute($statement)) {
        echo 'User registered successfully!';
    } else {
        echo 'Error: ' . mysqli_error($connection);
    }

    mysqli_stmt_close($statement);
    mysqli_close($connection);

    header("Location: ./success.php");

?>
