<?php

    if (!isset($_POST['email'], $_POST['password'])) {
        header('Location: ../rybiarze-online-shop/index.html');
        exit;
    }

    session_start();

    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'RybiarzeDB';

    $connection = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

    if (mysqli_connect_errno()) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }

    if ($stmt = $connection->prepare('SELECT id, passwordHash FROM Users WHERE email = ?')) {
        $stmt->bind_param('s', $_POST['email']);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $password);
            $stmt->fetch();
            if (password_verify($_POST['password'], $password)) {
                session_regenerate_id();
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['name'] = preg_replace('/@.*$/', '', $_POST['email']);
                $_SESSION['UserId'] = $id;
                
                header("Location: ./success.php");
            } else {
                $_SESSION['error'] = 'Niepoprawny login lub hasło';
                header("Location: loginPage.php");
            }
        } else {
            $_SESSION['error'] = 'Niepoprawny login lub hasło';
            header("Location: loginPage.php");
            exit;
        }

        $stmt->close();
    }
?>
