<?php 
    session_start();

    if (isset($_SESSION['loggedin'])) {
        header('Location: account.php');
        exit;
    }
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

    <main class="login-main">
        <div class="login-main__wrapper">
            <form action="/api/login-script.php" method="post" autocomplete="no">
                <span class="login-main__title">
                    Logowanie
                </span>
                <div class="login-main__email-wrapper" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="login-main__email" type="text" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="login-main__password-wrapper" data-validate="Password is required">
                    <input class="login-main__pawwsowrd" type="password" name="password" id="password"
                        placeholder="Hasło" required>
                </div>
                <div class="login-main__submit-btn-wrapper">
                    <button class="login-main__submit-btn">
                        Zaloguj się
                    </button>
                </div>
                <div class="login-main__create-new-account">
                    <span class="">
                        Nie masz jeszcze konta?
                    </span>
                    <a href="/api/register.php" class="login-main__link">
                        Stwórz konto
                    </a>
                </div>
            </form>
        </div>
    </main>

    <script type="module" src="../main.ts"></script>
</body>

</html>