(function() {
  angular.module('simple-invoices')
    .directive('siInvoiceTable', InvoiceTable);

  function InvoiceTable() {
    var o = {
      restrict: 'EA',
      templateUrl: 'partials/table.html',
      controller: 'InvoiceCtrl',
      controllerAs: 'i'
    };

    return o;
  }
})();
