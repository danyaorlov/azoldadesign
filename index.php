<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="/images/icon.png" type="image/png">
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <script src="/js/lib/jquery-3.5.1.min.js" ></script>
    <script src="/js/lib/jquery.maskedinput.js"></script>
    <script src="/js/lib/three.min.js"></script>
    <script src="/js/script.js"></script>
    <title>Азольда Гараева</title>
</head>
<body>
<div class="button-hunter">
    <input type="button" class="default-button hunter" value="Заказать картину...">
</div>
<script>
    function sendForm(f){
        let name = $('input[id="name"]').val();
        let telephone = $('input[id="phone"]').val();
        let email = $('input[id="email"]').val();
        let comment = $('textarea[id="text-comment"]').val();
            console.log(name);
            $('.request-wait-block').removeClass('hidden');
            $('.request-wait-block').animate({
                opacity:'1'
            },300,'swing');
            $.ajax({
                type: "POST",
                url: "send.php",
                data: { name: name, telephone: telephone, email: email, comment: comment},
                success:function () {
                    $('.success-sendmail').removeClass('hidden');
                    $('.form-client').css({
                        'display':'flex',
                        'align-items':'center',
                    });
                    $('.formbox').addClass('hidden');
                    $('.request-wait-block').animate({
                        opacity:'0'
                    },300);

                    $('.request-wait-block').addClass('hidden');
                },
                before:function () {
                    console.log("START");
                }
            });
    }
</script>
<section class="sidebar-form">
        <button class="crossOnButton">
            <i class="fas fa-times crossOnButton"></i>
        </button>
        <div class="form-and-videos ">
            <div class="form-client ">
                <div class="success-sendmail hidden">
                    <p class="info-about-me">Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.</p>
                    <p class="info-about-me">Пока ждете, можете посмотреть как я выполняла свои предыдущие работы.</p>
                </div>
                <div class="formbox">
                    <div class="request-wait-block hidden">
                        <img src="/images/load.gif" alt="">
                    </div>
                    <p class="info-about-me">Для начала работы нам нужно поговорить. Вам достаточно указать номер телефона или почту, и я свяжусь с вами, чтобы обсудить вашу идею.</p>
                    <form id="form" method="post" onsubmit="sendForm(this);return false;">
                        <input id="name" name="name" type="text" placeholder="Ваше имя" required>
                        <input id="phone" name="telephone" type="tel" placeholder="Мобильный телефон" required>
                        <input id="email" name="email" type="email" placeholder="Почта" required>
                        <textarea name="comment" id="text-comment" placeholder="Кратко опишите, в чем конкретно вы нуждаетесь" required></textarea>
                        <input class="default-button buttonForm" type="submit" value="Заказать картину">
                    </form>
                </div>
            </div>
            <div class="canvas-field">
                <canvas id="form-canvas" style="display: block;" width="100%"></canvas>
                <video id="video" loop crossOrigin="anonymous" playsinline style="display:none" muted>
                </video>
                <video id="videoNiger" loop crossOrigin="anonymous" playsinline style="display:none" muted>
                </video>
                <video id="womanNiger" loop crossOrigin="anonymous" playsinline style="display:none" muted>
                </video>
                <video id="camel" loop crossOrigin="anonymous" playsinline style="display:none" muted>
                </video>
                <video id="pustinya" loop crossOrigin="anonymous" playsinline style="display:none" muted>
                </video>
            </div>
        </div>
</section>

<section class="header">
    <header>
        <p>Азольда Гараева</p>
        <p>Художник</p>
    </header>
</section>
<section class="main">
    <canvas id="canvas"></canvas>
</section>
<section class="education">
    <img src="/images/vgpy.jpg" class="background-education" alt="">
    <div class="container">
        <div class="col-6 education-images-block">
            <div class="education-image">
                <img src="/images/1.jpg" alt="" class="">
                <img src="/images/2.jpg" alt="" class="">
            </div>
            <div class="education-image">
                <img src="/images/3.jpg" alt="" class="">
                <img src="/images/4.jpg" alt="" class="">
            </div>
            <div class="education-image on-middle-screens">
                <img src="/images/55.jpg" alt="" class="">
                <img src="/images/6.jpg" alt="" class="">
            </div>
        </div>
        <div class="col-4 education-text-block">
            <p class="text-description education-text">Получила образование
                в Воронежском ГПУ
                на факультете «Искусств
                и художественного
                образования».<br><br>
                После завершения учебы решила полностью связать свою жизнь с искусством и посвятить её рисованию.
                В настоящее время работаю художником/дизайнером в музыкальном издательстве, а в свободное время творю картины.
            </p>
        </div>
    </div>
</section>
<section class="show-art">
    <div class="container">
        <div class="col-6 show-left-block">
            <div class="imageScroll block-siria">
                <img class="show-image-background siria-back" src="/images/siria.jpg" alt="">
                <img class="main-show-image siria-image" src="/images/siria.jpg" alt="">
            </div>
            <div class="imageScroll block-bobMarley">
                <img class="show-image-background bob-back" src="/images/bobMarley.jpg" alt="">
                <img class="main-show-image bobMarley-image" src="/images/bobMarley.jpg" alt="">
            </div>
        </div>
        <div class="col-4 show-right-block">
            <div class="text-desc-block">
                <p class="text-description first-place-description">Моя первая персональная выставка прошла в 2013 году в городе Воронеж.</p>
            </div>
            <div class="text-desc-block siria-description">
                <p class="text-description ">В 2015 году участвовала в конкурсе «Ночь в музее» с работой «Сирия».</p>
            </div>
            <div class="text-desc-block bob-description">
                <p class="text-description ">Заняла 1-е место в конкурсе «Портрет Боба Марли».</p>
            </div>
        </div>
    </div>
</section>
<section class="presentation">
    <div class="container">
        <div class="col-6 show-left-block">
            <div class="video-block" style="z-index:1;">
                <video style=" display: block" loop autoplay muted width='100%' src="/video/rabbit.mp4" type='video/mp4'></video>
            </div>
            <div class="background-white-opacity">
            </div>
        </div>
        <div class="col-4 show-right-block work-hobby-block">
            <div class="text-desc-block">
                    <p class="text-description">Готовлюсь к персональной выставке в Москве.</p>
                </div>
                <div class="text-desc-block">
                    <p class="text-description">Тема выставки посвящена известному австралийскому фильму «Клетка для кроликов».</p>
                </div>
        </div>
    </div>
    <div class="container all-my-works">
        <p class="text-center">Мои работы<br>- это частица меня</p>
    </div>
</section>
<section class="footer">
    <footer>
        <div class="social-block">
            <div class="social">
                <a href="https://www.instagram.com/azoldagaraeva/">
                    <img src="/images/inst.png" alt="instagram" class="instagram" >
                </a>
            </div>
            <div class="social">
                <a href="https://www.youtube.com/channel/UC_hKZODGWSqCE49dW-0eGtw">
                    <img src="/images/youtube.png" alt="youtube" class="youtube">
                </a>
            </div>
            <div class="social">
                <a href="https://vk.com/id17608225">
                    <img src="/images/vk.png" alt="vkontakte" class="vk">
                </a>
            </div>
            <div class="social urfinjus-block">
                <a href="https://www.instagram.com/urfinjus_art/">
                    <img src="/images/urf.png" alt="instagram" class="urfinjus">
                </a>
            </div>
        </div>
        <div class="urfinjus-copyright">
            <p>Дизайн студия Urfinjus © 2020</p>
        </div>
    </footer>
</section>
</body>
</html>