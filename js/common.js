(function () {
    var $aboutSection = document.getElementById("about");
    var $workNavItem = document.getElementById("workNavItem");
    var $abautNavItem = document.getElementById("aboutNavItem");
    var navActiveClassName = "nav__item_active";

    document.getElementById("year").textContent=(new Date()).getFullYear();

    if($aboutSection) {
        onScroll();
        window.addEventListener('scroll', onScroll);
    }


    function onScroll() {
        var windowHeight = document.documentElement.clientHeight;
        var scrollY = window.scrollY;
        
        var aboutTopPosition = $aboutSection.getBoundingClientRect().top;

        if(aboutTopPosition < windowHeight/3) {
            $workNavItem.classList.remove(navActiveClassName);
            $abautNavItem.classList.add(navActiveClassName);
        } else {
            $workNavItem.classList.add(navActiveClassName);
            $abautNavItem.classList.remove(navActiveClassName);
        }
    }
})();