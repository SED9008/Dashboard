$(document).ready(function()
{
    // Menu button
    $("#menu-button").on("click", function(){
        console.log("clicked");
        var $menu = $("#navigation-menu");
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        if($menu.hasClass("menu-hidden"))
        {
            if($menu.hasClass("invisible"))
            {
                $menu.removeClass("invisible");
                setTimeout(function(){$menu.removeClass("menu-hidden")}, 1);
            }
        }
        else
        {
            $menu.addClass("menu-hidden").one(transitionEnd, function(){
                $menu.addClass("invisible");
                $menu.unbind(transitionEnd);
            });
        }
    });
    // $("#menu-button").on("click", function(){
        // $("#navigation-menu").toggleClass("menu-hidden");
        // console.log("clicked");
        // var $menu = $("#navigation-menu");
        // var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        // if($menu.hasClass("menu-hidden"))
        // {
        //     if($menu.hasClass("invisible"))
        //     {
        //         $menu.removeClass("invisible");
        //         setTimeout(function(){$menu.removeClass("menu-hidden")}, 1);
        //     }
        // }
        // else
        // {
        //     $menu.addClass("menu-hidden").one(transitionEnd, function(){
        //         $menu.addClass("invisible");
        //         $menu.unbind(transitionEnd);
        //     });
        // }
    // });
});
