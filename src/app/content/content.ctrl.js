(function() {
    'use strict';

    angular
        .module('projectAngular')
        .controller('MainContentCtrl', MainContentCtrl);

    /* @ngInject */
    function MainContentCtrl(gitService) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Ctrl';
        vm.gitProfile = {};
        vm.gitFeeds = {};
        activate();

        function activate() {
            gitService.fetchgitFeed('https://github.com/prateekpronoc.atom').then(function(response) {
                vm.gitFeeds = response.feed.entries;
                console.log(vm.gitFeeds);
            });

            fetchgitProfile();
        }

        function fetchgitProfile() {
            gitService.fetchGitProfile().then(function(response) {
                if (response) {
                    vm.gitProfile = response;
                    console.log(vm.gitProfile);
                }
            });
        }
    }
})();
