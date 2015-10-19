(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;
    vm.greeting = 'Hello, World';
    vm.date = new Date();
    vm.format = 'dd/MM/yyyy';
  }
})();
