// var chartElement;
var chart;
var chartElement;
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


    chartElement = $("#chart");
    console.log(chartElement);
    chart = new Chart(chartElement, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
});
