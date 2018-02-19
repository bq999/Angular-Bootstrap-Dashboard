/*==========================================================
    Author      : Bilal Qaiser
    Date Created: 17 Feb 2018
    Description : Controller to handle Recent Projects page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.recents = [
      {
          id: 1,
          heading: "Shopping Cart ",
          title: "Android Shopping Cart SQLite in Android Studio.",
          image: "android cart",
          theme: "warning",
          url:"https://bitbucket.org/bq999/android-studio-shopping-cart/src",
          roles: [
              {
                  theme: "success",
                  myRole:"Android Studio"
              },
              {
                  theme: "info",
                  myRole: "Map API"
              },
              {
                  theme: "warning",
                  myRole: "Payment"
              }
          ]
      },
      {
          id: 2,
          heading: "Basic Bird game",
          title: "Created bird game in Java by Eclipse SDK.",
          image: "android game",
          theme:"info",
          url: "https://bitbucket.org/bq999/eclipse-android-bird-game/src",
          roles: [
              {
                  theme: "success",
                  myRole: "Eclipse"
              },
              {
                  theme: "info",
                  myRole: "Android SDK"
              },
              
          ]
      },
      {
          id: 3,
          heading: "Photo Book",
          title: "Created photobook in Android Studio. To take picture and type new name into photobook. To select any item to send sms. ",
          image: "android photobook",
          theme: "success",
          url: "https://bitbucket.org/bq999/android-photobook/src",
          roles: [
              {
                  theme: "success",
                  myRole: "Android Studio"
              },
              {
                  theme: "info",
                  myRole: "Camera"
              }
          ]
      },
      {
          id: 4,
          heading: "Guess Game",
          title: "Guess numbers between 1 - 20. Created java in Eclipse SDK. ",
          image: "android guess",
          theme: "danger",
          url: "https://bitbucket.org/bq999/eclipse-android-app-guess-game/src",
          roles: [
              {
                  theme: "success",
                  myRole: "Eclipse"
              },
              {
                  theme: "info",
                  myRole: "Android SDK"
              }
          ]
      }
    ];

    //Apple

    vm.recents2 = [
      {
          id: 5,
          heading: "Machine Cypher ",
          title: "Data convert into encrypted ",
          image: "encrypted",
          theme: "warning",
          url:"https://bitbucket.org/bq999/machine-cypher/src",
          roles: [
              {
                  theme: "success",
                  myRole:"xCode"
              },
              {
                  theme: "info",
                  myRole: "Swift 3"
              },
              {
                  theme: "warning",
                  myRole: "Map"
              }
          ]
      },
      {
          id: 6,
          heading: "Shopping mall ",
          title: "Created iPhone app about shopping mall. To select shopping item to show information of detail, picture, and rating. Then you can see location where shopping mall is! ",
          image: "iOS shopping",
          theme:"info",
          url: "https://bitbucket.org/bq999/ios-shopping-mall/src",
          roles: [
              {
                  theme: "success",
                  myRole: "iOS"
              },
              {
                  theme: "info",
                  myRole: "xCode"
              },
              
          ]
      },
      {
          id: 7,
          heading: "Car Agency",
          title: "Created iPhone app about car agency. ",
          image: "iOS car agency",
          theme: "success",
          url: "https://bitbucket.org/bq999/ios-car-agency/src",
          roles: [
              {
                  theme: "success",
                  myRole: "iOS"
              },
              {
                  theme: "info",
                  myRole: "Camera"
              }
          ]
      },
      {
          id: 8,
          heading: "Border",
          title: "Created border between 2 countries. ",
          image: "iOS border",
          theme: "danger",
          url: "https://bitbucket.org/bq999/ios-border-map/src",
          roles: [
              {
                  theme: "success",
                  myRole: "xCode"
              },
              {
                  theme: "info",
                  myRole: "Map"
              }
          ]
      }
    ];





    // Cross platform

    vm.platform = [

        {
            title: "Waitress menu app",
            detail: "To create list of item about menu",
            image: "waitress",
            link:"https://github.com/bq999/Waitress-menu-app"
        },

        {
            title: "Form app",
            detail: "To create grade form that show graph of GPA",            
            image: "form",
            link:"https://github.com/bq999/form-app"
        },
        {
            title: "Project app",
            detail: "To create and design a mobile web site about dessert",
            image: "projectcross",
            link: "https://github.com/bq999/project-app"
        }
    ];

    console.log("coming to Recent controller");

}]);

