(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('InvoiceController', InvoiceController);

  function InvoiceController() {
    var vm = this;
    var itemStub = {
      quantity: 0,
      rate: 0,
      amount: 0
    };

    vm.itemList = [itemStub];

    vm.addNewItem = addNewItem;
    vm.calculateTotal = calculateTotal;
    vm.removeItem = removeItem;

    ///////////
    function addNewItem() {
      vm.itemList.push(itemStub);
    }

    function calculateTotal() {
      var sum = 0;
      for (var i = 0; i < vm.itemList.length; i++) {
        sum += vm.itemList[i].amount;
      }

      return sum;
    }

    function removeItem(index) {
      vm.itemList.splice(index, 1);
    }
  }
})();
