(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('InvoiceCtrl', InvoiceCtrl);

  function InvoiceCtrl() {
    var vm = this;
    vm.amount = vm.quantity * vm.rate;
    vm.showVars = showVars;

    ///////////
    function showVars() {
      console.log(vm.amount);
    }
  }
})();
