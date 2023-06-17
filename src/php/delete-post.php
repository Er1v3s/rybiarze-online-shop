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
    $postId = $_POST['postId'];
    $ForumUserId = $_SESSION['UserId'];

    $query = "DELETE FROM `Posts` WHERE Id = $postId";

    $result = mysqli_query($connection, $query);

    if ($result) {
        $_SESSION['result'] = 1;
        $_SESSION['addPostMessage'] = "Pomyślnie usunięto wpis";
    } else {
        $_SESSION['result'] = 2;
        $_SESSION['addPostMessage'] = "Wystąpił błąd podczas dodawania komentarza: " . mysqli_error($connection);
    }
    mysqli_close($connection);

    header("Location: forum.php");
?>