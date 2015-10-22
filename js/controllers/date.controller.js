(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('DateController', DateController);

  DateController.$inject = ['DateHelper'];

  function DateController(DateHelper) {
    var vm = this;
    vm.dateFormat = 'dd MMM yyyy';
    vm.date = DateHelper.formatDate(new Date());
  };
})();
