(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    // eslint-disable-next-line no-unused-vars
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    // eslint-disable-next-line no-unused-vars
    formHandler.addSubmitHandlerForPayment(function (data) {
        console.log(formHandler);
        // eslint-disable-next-line no-undef
        $("#myModal").modal('show');
    });

    console.log(formHandler);

})(window);
