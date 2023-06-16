<?php 
    session_start();

    if (!isset($_SESSION['loggedin'])) {
        header('Location: ../rybiarze-online-shop/index.html');
        exit;
    }
?>

<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Rybiarze - operation success</title>
  <meta name="description"
    content="Najlepszy sklep online ze sprzętem wędkarskim, duza baza produków w super niskich cenach, Zamów juz dzis a na jutrzejszy wyjazd wszsytko będziesz miał dostarczone przez kuriera bądź do paczkomatu!">
  <meta name='keywords'
    content='sklep wędkarski, wędki, kołowrotki, haczyki, spławiki, przynęty, siatki, podbieraki, cięzarki,'>
  <meta name='robots' content='index,follow'>

  <meta name="format-detection" content="telephone=no" />

  <link rel="icon" href="./favicon.svg">
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
        <div class="login-main__success-wrapper">
          <h1>
            Zalogowano jako  
            <span class="login-main__user-name">
              <?php 
                echo $_SESSION['name'];
              ?>
            </span>
          </h1>
          <form action="/api/logout.php" method="post">
            <input class="logout_button"  type="submit" value="Wyloguj">
          </form>
        </div>
    </main>

    <script type="module" src="main.ts"></script>
</body>

</html>