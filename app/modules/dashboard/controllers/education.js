/*==========================================================
    Author      : Bilal Qaiser
    Date Created: 17 Feb 2018
    Description : Controller to handle Education page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("EducationController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
        console.log("coming to Education controller");

vm.rowCollection = [
        {term1: 'Introduction to Swift Programming', 
        term2: 'Mobile Browser Application Development',
        term3:  'Software Quality Assurance Testing',
        term4: 'Co-op Work Term'},

        {term1: 'Database Design and SQL', 
        term2: 'Web Application Development Using PHP and MySQL',
        term3:  'Game Design and Development for iOS and Android'},

        {term1: 'Programming Java I', 
        term2: 'Cross-Platform Mobile Application Development',
        term3:  'Applications for Wearable Devices'},

        {term1: 'iOS Programming Fundamentals', 
        term2: 'Advanced iOS Application Development',
        term3:  'The Business of Mobile Application Development'},

        {term1: 'Android Development Fundamentals', 
        term2: 'Advanced Android Application Development',
        term3:  'Mobile Development and Design - Capstone Project'},
    ];

vm.rowCollection2 = [
        {term1: 'Computing Forensic & Security', 
        term2: 'Database Application Development',
        term3:  'Advanced Software Engineering '},

        {term1: 'Computing Systems', 
        term2: 'Internet Systems Development',
        term3:  'Advanced Internet Development'},

        {term1: 'Database', 
        term2: 'Networking Principles',
        term3:  'Production Project (Web Service)'},

        {term1: 'Programming', 
        term2: 'Software Development'},

        {term1: 'Systems Development', 
        term2: 'Software Engineering'},

        {term1: 'Web Development', 
        term2: 'Team Project'},



    ];



}]);

