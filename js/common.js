(function ($) {
    var navHeaderHeight = $ && $("#navHeader")[0].offsetHeight;
    var $aboutSection = document.getElementById("about");
    var $contactsSection = document.getElementById("contacts");

    var $navItems = $ && $(".nav__items-list li");
    var $workNavItem = $ && $("#workNavItem");
    var $abautNavItem = $ && $("#aboutNavItem");
    var $contactsNavItem = $ && $("#contactsNavItem");

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
        $title.addClass(navActiveClassName);
        return false;
    }


    function onScroll() {
        var windowHeight = document.documentElement.clientHeight;
        var aboutTopPosition = $aboutSection.getBoundingClientRect().top;
        var contactsTopPosition = $contactsSection.getBoundingClientRect().top;

        $navItems.removeClass(navActiveClassName);

        if(aboutTopPosition < windowHeight/3 && contactsTopPosition > windowHeight/3){
            $abautNavItem.addClass(navActiveClassName);
            return;
        }

        if(contactsTopPosition < windowHeight/3) {
            $contactsNavItem.addClass(navActiveClassName);
            return;
        }

        $workNavItem.addClass(navActiveClassName);
    }
})($);