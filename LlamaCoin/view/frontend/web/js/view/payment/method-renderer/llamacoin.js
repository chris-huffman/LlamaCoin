define([
        'jquery',
        'Magento_Payment/js/view/payment/iframe'
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'ClassyLlama_LlamaCoin/payment/llamacoin'
            },
            placeOrderHandler: null,
            validateHandler: null,

            /**
             * @param {Object} handler
             */
            setPlaceOrderHandler: function (handler) {
                this.placeOrderHandler = handler;
            },

            /**
             * @param {Object} handler
             */
            setValidateHandler: function (handler) {
                this.validateHandler = handler;
            },

            context: function() {
                return this;
            },

            getCode: function() {
                return 'classyllama_llamacoin';
            },

            isActive: function() {
                return true;
            }
        });
    }
);