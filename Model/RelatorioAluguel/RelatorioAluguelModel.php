<?php
include_once(PATH . "Model/BaseModel.php");
include_once(PATH . "Dao/RelatorioAluguel/RelatorioAluguelDao.php");
include_once(PATH . "Resources/php/FuncoesMoeda.php");
class RelatorioAluguelModel extends BaseModel
{
    public function RelatorioAluguelModel()
    {
        if (!isset($_SESSION)) {
            ob_start();
            session_start();
        }
    }

    public function ListarRelatorioAluguel() {
        $dao = new RelatorioAluguelDao();
        $lista = $this->VerificaCliente();
        if($lista[0]) {
            $codCliente = filter_input(INPUT_POST, 'codCliente', FILTER_SANITIZE_NUMBER_INT);
            $lista = $dao->ListarRelatorioAluguel($codCliente);
            if ($lista[0]) {
                $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_TOTAL');
                if ($lista[1] != null) {
                    $dadosCliente = $dao->BuscarDadosCliente($codCliente);
                    if($dadosCliente[0]){
                        $lista[2] = $dadosCliente[1];
                    }

                    for ($i = 0; $i < count($lista[1]); $i++) {
                        $produtos = $dao->ListarProdutosRelatorioAluguel($lista[1][$i]['COD_ALUGUEL']);
                        if ($produtos[0]) {
                            $lista[1][$i]['PRODUTOS'] = $produtos[1];
                        }
                    }
                }
            }
        }
        return json_encode($lista);
    }

    public function VerificaCliente() {
        $result = array(true, '');
        if (null == filter_input(INPUT_POST, 'codCliente', FILTER_SANITIZE_NUMBER_INT)){
            $result[0] = false;
            $result[1] .= "Nenhum Cliente foi selecionado \n";
        }
        return $result;
    }
}
