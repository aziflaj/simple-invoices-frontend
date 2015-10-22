(function() {
  angular.module('simple-invoices')
    .directive('siInvoiceItems', InvoiceItems);

  function InvoiceItems() {
    var o = {
      restrict: 'EA',
      templateUrl: 'partials/table.html',
      controller: 'InvoiceCtrl',
      controllerAs: 'i'
    };

    return o;
  }
})();
