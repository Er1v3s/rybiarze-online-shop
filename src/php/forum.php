<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Rybiarze - forum</title>

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

<header class="page-header">
        <nav class="nav">
            <div class="nav__container">
                <div class="nav__logo">
                    <a href="./index.html">
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
                        <li><a href="./index.html">Strona główna</a></li>
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
                    <li><a href="./index.html">Strona główna</a></li>
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
            <h2>Dodaj Post</h2>
            <hr />
            <form>
                <div>
                    <label for="validation1" class="forum-main__form-label">
                        <h3>Tytuł</h3>
                    </label>
                    <input type="text" id="validation1" class="forum-main__input" required />
                </div>

                <div>
                    <label for="validation2" class="forum-main__form-label">
                        <h3>Krótki opis</h3>
                    </label>
                    <input type="text" id="validation2" class="forum-main__input" required />
                </div>

                <div>
                    <label for="validation3" class="forum-main__form-label">
                        <h3>Treść wpisu</h3>
                    </label>
                    <textarea id="validation3" class="forum-main__input" required>

                    </textarea>
                </div>

                <div>
                    <button type="submit" class="forum-main__submit-button">Dodaj post</button>
                </div>
            </form>
        </div>

        <!-- <?php 
            $DATABASE_HOST = 'localhost';
            $DATABASE_USER = 'root';
            $DATABASE_PASS = '';
            $DATABASE_NAME = 'RybiarzeDB';
        
            $connection = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

            if ($mysqli->connect_error) {
                die("Błąd połączenia z bazą danych: " . $mysqli->connect_error);
            }
            
            // Zapytanie SQL do pobrania wszystkich postów
            $sql = "SELECT * FROM nazwa_tabeli_postów";
            $result = $mysqli->query($sql);
            
            // Sprawdzenie czy zapytanie zwróciło wyniki
            if ($result->num_rows > 0) {
                // Przetwarzanie każdego wiersza wynikowego
                while ($row = $result->fetch_assoc()) {
                    $postId = $row['Id'];
                    $postTitle = $row['tytuł'];
                    $postContent = $row['treść'];
                    $postDate = $row['data'];
                    $postAuthor = $row['autor'];
                }
            } else {
                echo "Brak postów w bazie danych.";
            }
            
            $mysqli->close();
        ?>

        <a href="/article/@post.Id">
            <div class="forum-main__post">
                <div class="forum-main__post-header">
                    <h1>Jaki haczyk najlepszy na początek?</h1>
                    <p>Witajcie drodzy wędkarze ja z takim szybkim pytaniem jaki haczyk na początek najlpeszy</p>
                </div>
                <div class="forum-main__post-info">
                    <time>15.06.2023r.</time>
                    <div class="forum-main__post-user">
                        <h4>Filip Statkiewicz</h4>
                    </div>
                </div>
            </div>
        </a> -->

    </main>

    <!-- <main class="forum-main">
        <div class="najman">
            <span class="najman-txt">Hola hola wojowniku, anonimowo to każdy wyszczekany. </span>
            <img src="/people/najman.webp" alt="">
            <span class="najman-txt">Dostęp do forum tylko dla zalogowanych!</span>
        </div>
    </main> -->

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

    <script type="module" src="../main.ts"></script>
</body>

</html>