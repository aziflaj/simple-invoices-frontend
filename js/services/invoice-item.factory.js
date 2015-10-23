(function() {
  'use strict';

  angular.module('simple-invoices')
    .factory('InvoiceItemFactory', InvoiceItemFactory);

  function InvoiceItemFactory() {
    var factory = {
      createNewItem: createNewItem
    };

    return factory;

    //////////
    function createNewItem() {
      var itemStub = {
        quantity: 0,
        rate: 0,
        amount: 0
      };

      return itemStub;
    }
  };
})();
