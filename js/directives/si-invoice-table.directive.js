(function() {
  angular.module('simple-invoices')
    .directive('siInvoiceTable', InvoiceTable);

  function InvoiceTable() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'partials/table.html',
      controller: 'InvoiceController',
      controllerAs: 'i'
    };

    return directive;
  }
})();
