/*==========================================================
    Author      : Bilal Qaiser
    Date Created: 17 Feb 2018
    Description : Controller to handle Skills page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [

        {
            Software: "Angular JS",
            Percentage: "45",
            theme: "green",
            image: "angular"
        },

        {
            Software: "Javascript",
            Percentage: "60",
            theme: "maroon",
            image: "javascript"
        },

        {
            Software: "jQuery & AJAX",
            Percentage: "60",
            theme: "yellow",
            image: "jquery"
        },

        {
            Software: "PHP",
            Percentage: "70",
            theme: "aqua",
            image: "php"
        },

        {
            Software: "phpMyAdmin",
            Percentage: "70",
            theme: "teal",
            image: "phpmyadmin"
        },

        {
            Software: "Restful",
            Percentage: "40",
            theme: "green",
            image: "restful"
        },

        {
            Software: "Ruby",
            Percentage: "65",
            theme: "red",
            image: "ruby"
        },

        {
            Software: "Wordpress",
            Percentage: "55",
            theme: "gray",
            image: "wordpress"
        },

{
            Software: "HTML 5",
            Percentage: "90",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "83",
            theme: "aqua",
            image: "css3"
        },

        {
            Software: "Bootstrap",
            Percentage: "85",
            theme: "purple",
            image: "bootstrap"
        },

        {
            Software: "Sublime",
            Percentage: "45",
            theme: "yellow",
            image: "sublime"
        },

        {
            Software: "Dreamweaver",
            Percentage: "60",
            theme: "green",
            image: "dreamweaver"
        },

        {
            Software: "Gumby Framework",
            Percentage: "85",
            theme: "blue",
            image: "gumby"
        }
    ];

    //Software Stack
    vm.skills.software = [
        
        {
            Software: "Java",
            Percentage: "60",
            theme: "aqua",
            image: "java",
        },

        {
            Software: "Python",
            Percentage: "30",
            theme: "aqua",
            image: "python",
        },

        {
            Software: "Oracle Application",
            Percentage: "62",
            theme: "red",
            image: "oracle"
        },

        {
            Software: "one.com",
            Percentage: "90",
            theme: "green",
            image: "one"
        },
        {
            Software: "Visual Studio",
            Percentage: "75",
            theme: "purple",
            image: "visualstudio"
        },
        {
            Software: "Eclipse",
            Percentage: "75",
            theme: "yellow",
            image: "eclipse"
        }
    ];

        //Mobile Stack
    vm.skills.mobile = [
        
        {
            Software: "Swift",
            Percentage: "80",
            theme: "maroon",
            image: "swift",
        },

        {
            Software: "xCode",
            Percentage: "82",
            theme: "blue",
            image: "xcode"
        },

        {
            Software: "Android Studio",
            Percentage: "80",
            theme: "green",
            image: "androidstudio"
        },

        {
            Software: "Firbase",
            Percentage: "75",
            theme: "maroon",
            image: "firebase"
        },

        {
            Software: "Phone Gap",
            Percentage: "75",
            theme: "aqua",
            image: "phonegap"
        }
    ];

    //Other Stack
    vm.skills.others = [

        {
            Software: "Bitbucket",
            Percentage: "70",
            theme: "blue",
            image: "bitbucket"
        },
        {
            Software: "Github",
            Percentage: "87",
            theme: "purple",
            image: "github"
        },

        {
            Software: "ASL",
            Percentage: "67",
            theme: "aqua",
            image: "asl"
        },

        {
            Software: "Macbook Pro",
            Percentage: "92",
            theme: "yellow",
            image: "mac"
        }
    ];
}]);

