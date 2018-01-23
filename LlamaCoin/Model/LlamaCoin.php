<?php

namespace ClassyLlama\LlamaCoin\Model;

class LlamaCoin extends \Magento\Payment\Model\Method\Cc
{
    protected $_code = 'classyllama_llamacoin';

    public function capture(\Magento\Payment\Model\InfoInterface $payment, $amount)
    {
        return $this;
    }

    public function authorize(\Magento\Payment\Model\InfoInterface $payment, $amount)
    {
        return $this;
    }
}