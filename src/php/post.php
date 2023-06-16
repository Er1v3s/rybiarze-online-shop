<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Rybiarze - zaloguj się!</title>

    <meta name="format-detection" content="telephone=no" />

    <link rel="icon" href="public/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <base href="/rybiarze-online-shop/" />
</head>

<body>

    <?php
        if (isset($_SESSION['addPostMessage'])) {
            echo '<div id="addPostMessage" style="transition:1s; transform: translate(-50%, 0); ';
            if($_SESSION['result'] == 1){
                echo 'background-color: green;';
            } else {
                echo 'background-color: red;';
            }
            echo '">';
            echo '<h2>';
            echo $_SESSION['addPostMessage'];
            echo '</h2>';
            echo '<div id="close_message_button" class="fa-solid fa-xmark"></div>';
            echo '</div>';

            unset($_SESSION['addPostMessage']);
            unset($_SESSION['result']);
        }
    ?>

    <header class="page-header">
        <nav class="nav">
        <div class="nav__container">
            <div class="nav__logo">
            <a href="index.html">
                <img src="/logo-white.svg" alt="logo sklepu">
            </a>
            </div>

            <div class="nav__burger not-active">
            <span></span>
            <span></span>
            <span></span>
            </div>

            <div class="nav__menu">
            <ul>
                <li><a href="index.html">Strona główna</a></li>
                <li><a href="./pages/shop.html">Sklep</a></li>
                <li><a href="./pages/blog.html">Blog</a></li>
                <li><a href="/api/forum.php">Forum</a></li>
                <li><a href="./pages/about.html">O firmie</a></li>
            </ul>
            </div>

            <div class="nav__options">
            <ul>
                <li>
                <a href="/api/loginPage.php">
                    <i class="fa-solid fa-user"></i>
                    <span>Twoje konto</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>Koszyk</span>
                </a>
                </li>
            </ul>
            </div>

        </div>

        <div class="nav__mobile-menu">
            <ul>
            <li><a href="index.html">Strona główna</a></li>
            <li><a href="./pages/shop.html">Sklep</a></li>
            <li><a href="./pages/blog.html">Blog</a></li>
            <li><a href="/api/forum.php">Forum</a></li>
            <li><a href="./pages/about.html">O firmie</a></li>
            </ul>
        </div>

        </nav>
    </header>

    <main class="forum-main">

        <?php

            $postId = $_GET["id"];
           
            $DATABASE_HOST = 'localhost';
            $DATABASE_USER = 'root';
            $DATABASE_PASS = '';
            $DATABASE_NAME = 'RybiarzeDB';

            $connection = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

            if (!$connection) {
                die("Błąd połączenia z bazą danych: " . mysqli_connect_error());
            }

            $query = "SELECT posts.Id ,posts.Title, posts.Introduction, posts.BodyText, posts.Created, users.email FROM posts JOIN users ON posts.ForumUserId = users.Id WHERE posts.Id = $postId ";

            $result = mysqli_query($connection, $query);

            while ($row = mysqli_fetch_assoc($result)) {
                $title = $row['Title'];
                $introduction = $row['Introduction'];
                $created = $row['Created'];
                $bodyText = $row['BodyText'];
                $author = $row['email'];
                $author = preg_replace('/@.*$/', '', $author);

                echo '<div class="forum-main__post">';
                echo '<div class="forum-main__post-header">';
                echo '<h1>' . $title . '</h1>';
                echo '<h2>' . $introduction . '</h2>';
                echo '</div>';
                echo '<div class="forum-main__post-info">';
                echo '<time>' . $created . '</time>';
                echo '<div class="forum-main__post-user">';
                echo '<h4>' . $author . '</h4>';
                echo '</div>';
                echo '</div>';
                echo '<div class="forum-main__post-content">';
                echo '<p>' . $bodyText . '</p>';
                echo '</div>';
                echo '</div>';
            }

            mysqli_free_result($result);
        ?>

        <div class="forum-main__creating-post">
            <?php
                if (!isset($_SESSION['loggedin'])) {
                    echo '<span class="forum-main__error">Dodawanie komentarzy na forum tylko dla zalogowanych użytkowników.</span>';
                } else {
                    echo '<h2>Dodaj komentarz</h2>
                    <hr>
                    <form action="/api/createComment.php" method="post" autocomplete="no">
                        <div>
                            <input type="text" name="comment", id="validation1" class="forum-main__input" required />
        
                            <input type="hidden" name="postId" value="'; echo $postId; echo'">
                        </div>
                        <div>
                            <button type="submit" class="forum-main__submit-button">Dodaj komentarz</button>
                        </div>
                    </form>';
                }
            ?>
        </div>

        <?php
           
            $DATABASE_HOST = 'localhost';
            $DATABASE_USER = 'root';
            $DATABASE_PASS = '';
            $DATABASE_NAME = 'RybiarzeDB';

            $connection = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

            if (!$connection) {
                die("Błąd połączenia z bazą danych: " . mysqli_connect_error());
            }

            $query = "SELECT comments.CommentText, comments.Created, users.Email FROM comments JOIN posts ON posts.Id = comments.PostId JOIN users ON users.Id = comments.ForumUserId WHERE posts.Id = $postId";

            $result = mysqli_query($connection, $query);

            while ($row = mysqli_fetch_assoc($result)) {
                $CommentText = $row['CommentText'];
                $created = $row['Created'];
                $author = $row['Email'];
                $author = preg_replace('/@.*$/', '', $author);


                echo '<div class="forum-main__post forum-main__comment">';
                echo '<div class="forum-main__post-info forum-main__comment-info">';
                echo '<div class="forum-main__post-user">';
                echo '<h4>' . $author . '</h4>';
                echo '</div>';
                echo '<time>' . $created . '</time>';
                echo '</div>';
                echo '<div class="forum-main__post-header forum-main__comment-text-wrapper">';
                echo '<p>' . $CommentText . '</p>';
                echo '</div>';
                echo '</div>';
            }

            mysqli_free_result($result);
        ?>

    </main>
        
    <script type="module" src="../scripts/forum-post-scripts.ts"></script>
    <script type="module" src="../main.ts"></script>
</body>

</html>