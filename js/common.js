(function ($) {
    var navHeaderHeight = $ && $("#navHeader")[0].offsetHeight;
    var $aboutSection = document.getElementById("about");
    var $workNavItem = $ && $("#workNavItem");
    var $abautNavItem = $ && $("#aboutNavItem");
    var navActiveClassName = "nav__item_active";

    document.getElementById("year").textContent = (new Date()).getFullYear();

    onScroll();
    window.addEventListener('scroll', onScroll);

    $(".nav__link").click(goToLink);


    function goToLink() {
        var href = $(this).attr("href");
        var index = href.indexOf("#");
        var titleId = href.substring(index);
        var $title = $($(titleId)[0]);
        $('html,body').animate({ scrollTop: $title.offset().top - navHeaderHeight }, 'slow');
        return false;
    }


    function onScroll() {
        var windowHeight = document.documentElement.clientHeight;
        var aboutTopPosition = $aboutSection.getBoundingClientRect().top;

        if(aboutTopPosition < windowHeight/3) {
            $workNavItem.removeClass(navActiveClassName);
            $abautNavItem.addClass(navActiveClassName);
        } else {
            $workNavItem.addClass(navActiveClassName);
            $abautNavItem.removeClass(navActiveClassName);
        }
    }
})($);