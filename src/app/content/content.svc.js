(function() {
    'use strict';

    angular
        .module('projectAngular')
        .factory('gitService', gitService);

    /* @ngInject */
    function gitService($http) {
        var service = {
                fetchgitFeed: fetchgitFeed,
                fetchGitProfile: fetchGitProfile
            },
            googleApi = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=';
        return service;

        ////////////////

        function fetchgitFeed(url) {
            return $http.jsonp(googleApi + encodeURIComponent(url))
                .then(function(response) {
                    if (response && response.data && response.data.responseData) {
                        // console.log(response);
                        return response.data.responseData;
                    }
                }, function(error) {
                    return error;
                });
        }

        function fetchGitProfile() {
            return $http.get('https://api.github.com/users/prateekpronoc').then(function(response) {
                if(response && response.data){
                    return response.data;
                }
            }, function(error) {
                console.log(error);
            });
        }
    }
})();
