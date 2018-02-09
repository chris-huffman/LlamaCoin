<?php

namespace ClassyLlama\LlamaCoin\Model;

use Magento\Payment\Model\Method\ConfigInterface;

class LlamaCoin extends \Magento\Payment\Model\Method\Cc implements ConfigInterface
{
    const CODE = 'classyllama_llamacoin';

    protected $_code = self::CODE;

    public function capture(\Magento\Payment\Model\InfoInterface $payment, $amount)
    {
        //todo add functionality later
    }

    public function authorize(\Magento\Payment\Model\InfoInterface $payment, $amount)
    {
        //todo add functionality later
    }

    /**
     * Retrieve information from payment configuration
     *
     * @param string $field
     * @param int|null $storeId
     *
     * @return mixed
     */
    public function getValue($field, $storeId = null)
    {
        return $this->getConfigData($field, $storeId);
    }

    /**
     * Sets method code
     *
     * @param string $methodCode
     * @return void
     */
    public function setMethodCode($methodCode)
    {
    }

    /**
     * Sets path pattern
     *
     * @param string $pathPattern
     * @return void
     */
    public function setPathPattern($pathPattern)
    {
    }
}