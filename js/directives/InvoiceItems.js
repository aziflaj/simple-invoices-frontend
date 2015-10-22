(function() {
  angular.module('simple-invoices')
    .directive('siInvoiceItem', InvoiceItem);

  function InvoiceItem() {
    var o = {
      restrict: 'EA',
      templateUrl: 'partials/table-item.html',
      controller: 'InvoiceCtrl',
      controllerAs: 'i'
    };

    return o;
  }
})();
