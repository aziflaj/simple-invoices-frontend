(function() {
  angular.module('simple-invoices')
    .directive('siInvoiceItem', InvoiceItem);

  function InvoiceItem() {
    var o = {
      restrict: 'EA',
      templateUrl: 'partials/table-item.html',
      controller: 'InvoiceController',
      controllerAs: 'i'
    };

    return o;
  }
})();
