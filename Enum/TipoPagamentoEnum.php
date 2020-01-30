<?php
/**
 * Para utilizar este Enum:
 * include "Enum/TipoPagamentoEnum.php";
 * TipoPagamentoEnum::getByCodigo($codigo);
 * TipoPagamentoEnum::getByNome($nome);
 * TipoPagamentoEnum::getEnum();
 */

include_once('BaseEnum.php');
class TipoPagamentoEnum extends BaseEnum{
    var $dinheiro = [1, 'Dinheiro'];
    var $cartao = [2, 'Cartao'];
    var $boleto = [2, 'Boleto'];
    var $deposito = [2, 'Dep. Bancário'];
}
?>