define([
        'jquery',
        'Magento_Payment/js/view/payment/cc-form'
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'ClassyLlama_LlamaCoin/payment/llamacoin'
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