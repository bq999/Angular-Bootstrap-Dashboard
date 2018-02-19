/*==========================================================
    Author      : Bilal Qaiser
    Date Created: 17 Feb 2018
    Description : Controller to handle Websites page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("WebsitesController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.websites = [

        {
            title: "Github Page",
            image: "github",
            link:"https://bq999.github.io/portfolio/"
        },

        {
            title: "Angular Bootstrap Dashboard",
            image: "dashboard",
            link:"http://bilalqaiser.com/dashboard/"
        },

        {
            title: "Web Development Internship",
            image: "intern",
            link:"http://ocmtontario.bilalqaiser.com/"
        },
        {
            title: "Holiday Home Project (2015–2016)",
            image: "holiday",
            link: "http://bilalqaiser.com/holiday/"
        },
        {
            title: "Advanced Interned Development (2015–2016)",
            image: "aid",
            link: "http://www.bilalqaiser.com/webapp/includes/"
        },
        
        {
            title: " Lazeez PHP project (2014-2015)",
            image: "lazeez",
            link: "http://bilalqaiser.com/lazeez/project2/index.php"
        },
        {
            title: "Qatar Project (2013–2014)",
            image: "qatar",
            link: "http://bilalqaiser.com/about/Qatar/homeqatar.html"
        },

        {
            title: "Freelance (Company name: Ozone UVB) ",
            image: "sunglasses",
            link: "http://bilalqaiser.com/sunglasses/sun.html"
        },
                {
            title: "Codeigniter MVC",
            image: "mvc",
            link: "http://bilalqaiser.com/mvc/"
        },
        {
            title: "My Personal Site",
            image: "portfolio",
            link: "https://www.bilalqaiser.com/portfolio/"
        },
        {
            title: "Bilal's Resume",
            image: "resume",
            link: "https://www.bilalqaiser.com/portfolio/resume/index.html"
        }
    ];
    console.log("coming to Websites controller");

}]);

