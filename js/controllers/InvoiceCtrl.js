(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('InvoiceCtrl', InvoiceCtrl);

  function InvoiceCtrl() {
    var vm = this;
    var itemStub = {
      quantity: 0,
      rate: 0,
      amount: 0
    };

    vm.itemList = [itemStub];

    vm.addNewItem = addNewItem;

    ///////////
    function addNewItem() {
      vm.itemList.push(itemStub);
      //console.log(vm.amount);
    }
  }
})();
