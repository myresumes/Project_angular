(function() {
    'use strict';

    angular
        .module('projectAngular')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'header@': {
                        templateUrl: 'app/header/header.tpl.html'
                    },
                    '@': {
                        templateUrl: 'app/content/content.html',
                        controller: 'MainContentCtrl as vm'
                    }
                },
                data: {
                    private: true
                }
            });


        // $stateProvider
        //     .state('home', {
        //         abstract: true,
        //         url: '/home/',
        //         view: {
        //             'header': {

        //             }
        //         }

        //     });

        $urlRouterProvider.otherwise('/home');
    }

})();
