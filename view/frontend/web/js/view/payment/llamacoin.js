define([
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component, rendererList) {
        'use strict';

        rendererList.push(
            {
                type: 'classyllama_llamacoin',
                component: 'ClassyLlama_LlamaCoin/js/view/payment/method-renderer/llamacoin'
            }
        );

        /** Add view logic here if needed */
        return Component.extend({});
    });
