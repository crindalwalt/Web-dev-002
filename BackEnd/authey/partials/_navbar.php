<?php

session_start();

?>

<nav class="navbar navbar-expand-lg bg-main navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/">Authey</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">

                        <?php
                        if (
                            isset($_SESSION['login']) &&
                            isset($_SESSION['username'])
                        ) {
                            echo $_SESSION['username'];
                        } else {
                            echo "not logged in";
                        }

                        ?>
                    </a>
                </li>
            </ul>
            <form class="d-flex" role="search">

                <?php
                if (isset($_SESSION['login']) && $_SESSION['login'] == true) {
                    echo '<a class="btn btn-main mx-2" href="backend/logout_handler.php">Logout</a>';
                } else {
                    echo '<a class="btn btn-main mx-2" href="register.php">Register</a>
                <a class="btn btn-main mx-2" href="login.php">Login</a>';
                }

                ?>


            </form>
        </div>
    </div>
</nav>