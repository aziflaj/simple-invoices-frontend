(function() {
  'use strict';

  angular.module('simple-invoices')
    .service('DateHelper', DateHelper);

  function DateHelper() {
    var helper = {
      formatDate: formatDate
    };

    return helper;
    ////////////////////

    function formatDate(date) {
      var monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

      return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
    }
  };
})();
