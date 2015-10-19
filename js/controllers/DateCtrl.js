(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('DateCtrl', DateCtrl);

  DateCtrl.$inject = ['DateHelper'];

  function DateCtrl(DateHelper) {
    var vm = this;
    vm.dateFormat = 'dd MMM yyyy';
    vm.date = DateHelper.formatDate(new Date());
  };
})();
