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
        <div class="forum-main__creating-post">
            <?php
                if (!isset($_SESSION['loggedin'])) {
                    echo '<span class="forum-main__error">Dodawanie postów na forum tylko dla zalogowanych użytkowników.</span>';
                } else {
                    echo '<h2>Dodaj Post</h2>
                    <hr />
                    <form action="/api/insertPostToDB.php" method="post" autocomplete="no">
                        <div>
                            <label for="validation1" class="forum-main__form-label">
                                <h3>Tytuł</h3>
                            </label>
                            <input type="text" name="title", id="validation1" class="forum-main__input" required />
                        </div>
        
                        <div>
                            <label for="validation2" class="forum-main__form-label">
                                <h3>Krótki opis</h3>
                            </label>
                            <input type="text" name="introduction" id="validation2" class="forum-main__input" required />
                        </div>
        
                        <div>
                            <label for="validation3" class="forum-main__form-label">
                                <h3>Treść wpisu</h3>
                            </label>
                            <textarea name="bodyText" id="validation3" class="forum-main__input" required>
        
                            </textarea>
                        </div>
        
                        <div>
                            <button type="submit" class="forum-main__submit-button">Dodaj post</button>
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

            $query = "SELECT posts.Id ,posts.Title, posts.Introduction, posts.BodyText, posts.Created, users.email FROM posts JOIN users ON posts.ForumUserId = users.Id";

            $result = mysqli_query($connection, $query);

            while ($row = mysqli_fetch_assoc($result)) {
                $postId = $row['Id'];
                $title = $row['Title'];
                $introduction = $row['Introduction'];
                $created = $row['Created'];
                $author = $row['email'];
                $author = preg_replace('/@.*$/', '', $author);


                echo '<a href="/api/post.php?id=';
                echo $postId;
                echo '">';
                echo '<div class="forum-main__post">';
                echo '<div class="forum-main__post-header">';
                echo '<h1>' . $title . '</h1>';
                echo '<p>' . $introduction . '</p>';
                echo '</div>';
                echo '<div class="forum-main__post-info">';
                echo '<time>' . $created . '</time>';
                echo '<div class="forum-main__post-user">';
                echo '<h4>' . $author . '</h4>';
                echo '</div>';
                echo '</div>';
                echo '</div>';
                echo '</a>';
            }

            mysqli_free_result($result);
        ?>
    </main>
        

    <footer class="footer">
        <div class="footer__container">
            <article class="footer__message">
                <h4>Dotarłeś na sam dół naszej strony</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis recusandae repellendus non
                    quod
                    tempore temporibus consequatur provident dolores placeat! Aliquid deserunt commodi molestias quasi
                    facere
                    recusandae, ex illum aliquam?
                    Expedita fugiat temporibus soluta obcaecati unde repellendus dolorum at ex! Culpa, obcaecati modi.
                    Libero
                    inventore consequatur, natus eum a doloremque, totam sed eligendi voluptatem quam eius suscipit
                    ducimus dolor
                    rem!
                    Officia sunt nostrum voluptatem earum error repellat nihil quos dolorum quisquam ad, sit eveniet.
                    Cum saepe
                    aperiam, qui dolore, facilis delectus accusantium animi autem illo, asperiores molestias eligendi
                    corporis
                    molestiae.
                    Fugit doloribus eligendi incidunt adipisci soluta hic expedita cumque natus veritatis eum, dolore
                    at? Laborum
                    corporis neque mollitia facere sit exercitationem, quaerat libero sapiente, ipsam velit molestias
                    tempore
                    aliquid. Sunt.</p>
            </article>

            <section class="footer__interactive">

                <article class="footer__contact">
                    <div class="footer__phone">
                        <i class="fa-solid fa-phone"></i>
                        <strong>+48 123 123 123</strong>
                    </div>
                    <div class="footer_address">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <strong>ul. Jana Pawła II 21/37 Wadowice</strong>
                    </div>
                </article>

                <article class="footer__social-media">
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </article>

                <form class="footer__contact-text" action="">
                    <h4>Jakiś problem? Napisz do nas!</h4>
                    <input type="text" name="" id="" placeholder="Twoje imię">
                    <input type="email" name="" id="" placeholder="Twój adres e-mail">
                    <textarea name="" id="" cols="20" rows="10" placeholder="Wpisz treść swojej wiadomości"></textarea>
                    <button type="submit">Wyślij</button>
                </form>

                <form class="footer__newsletter" action="">
                    <h4>Zapisz się do naszego newslettera!</h4>
                    <input type="email" name="" id="" placeholder="name@example.com">
                    <button type="submit">Zapisz się</button>
                </form>

                <article class="footer__application">
                    <h4>Pobierz aplikację mobilną</h4>
                    <div class="footer__qr-code">
                        <img src="/qrcode.svg" alt="QR kod do pobrania palikacji">
                    </div>
                    <div class="footer__app-img">
                        <a href="#">
                            <img src="/google.svg" alt="Link do pobrania aplikacji z google play">
                        </a>
                    </div>
                    <div class="footer__app-img">
                        <a href="#">
                            <img src="/apple.svg" alt="Link do pobrania aplikacji z app store">
                        </a>
                    </div>
                </article>

            </section>

            <section class="footer__info">
                <h5 class="footer__copyright">
                    Copyright ©2023 All rights reserved |
                </h5>
                <h5 class="footer__author">
                    Designed and made by <a href="https://github.com/Er1v3s">Filip Statkiewicz</a>
                </h5>
            </section>

        </div>
    </footer>

    <script type="module" src="../scripts/forum-post-scripts.ts"></script>
    <script type="module" src="../main.ts"></script>
</body>

</html>