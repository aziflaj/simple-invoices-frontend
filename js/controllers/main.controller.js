(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('MainController', MainController);

  function MainController() {
    var vm = this;
    vm.greeting = 'Hello, World';
    vm.date = new Date();
    vm.format = 'dd/MM/yyyy';
  }
})();
