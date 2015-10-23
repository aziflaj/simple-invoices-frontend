(function() {
  'use strict';

  angular.module('simple-invoices')
    .controller('InvoiceController', InvoiceController);

  InvoiceController.$inject = ['InvoiceItemFactory'];

  function InvoiceController(InvoiceItemFactory) {
    var vm = this;

    vm.itemList = [InvoiceItemFactory.createNewItem()];
    vm.flatTax = 0;

    vm.addNewItem = addNewItem;
    vm.calculateTotal = calculateTotal;
    vm.removeItem = removeItem;
    vm.subtotal = subtotal;

    ///////////
    function addNewItem() {
      vm.itemList.push(InvoiceItemFactory.createNewItem());
    }

    function calculateTotal() {
      return vm.subtotal() + vm.flatTax;
    }

    function removeItem(index) {
      if (vm.itemList.length > 1) {
        vm.itemList.splice(index, 1);
      }
    }

    function subtotal() {
      var subtotal = 0;
      for (var i = 0; i < vm.itemList.length; i++) {
        subtotal += vm.itemList[i].amount;
      }

      return subtotal;
    }
  }
})();
