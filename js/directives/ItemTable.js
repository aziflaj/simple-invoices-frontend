(function() {
  'use strict';

  angular.module('simple-invoices')
    .directive('ItemTable', ItemTable);

  function ItemTable() {
    var directive = {
      restrict: 'AE'
    };

    return directive;
  }
})();
