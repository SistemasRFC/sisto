<?php
include_once(PATH . "Model/BaseModel.php");
include_once(PATH . "Dao/Aluguel/AluguelDao.php");
include_once(PATH . "Model/ProdutoAluguel/ProdutoAluguelModel.php");
include_once(PATH . "Resources/php/FuncoesMoeda.php");
include_once(PATH . "Enum/TipoPagamentoEnum.php");
class AluguelModel extends BaseModel
{
    public function AluguelModel()
    {
        if (!isset($_SESSION)) {
            ob_start();
            session_start();
        }
    }

    public function ListarAluguel()
    {
        $dao = new AluguelDao();
        $lista = $dao->ListarAluguel();
        if ($lista[0]) {
            $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_TOTAL');
            if ($lista[1] != null) {
                for ($i = 0; $i < count($lista[1]); $i++) {
                    $produtos = $dao->ListarProdutosAluguel($lista[1][$i]['COD_ALUGUEL']);
                    // var_dump($produtos);
                    if ($produtos[0]) {
                        $lista[1][$i]['PRODUTOS'] = $produtos[1];
                    }
                }
            }
        }
        return json_encode($lista);
    }

    public function InsertAluguel()
    {
        $dao = new AluguelDao();
        BaseModel::PopulaObjetoComRequest($dao->getColumns());
        $this->objRequest->codUsuario = $_SESSION['cod_usuario'];
        // var_dump($this->objRequest); die;
        $result = $dao->InsertAluguel($this->objRequest);
        if ($result[0]) {
            $codAluguel = $result[2];
            $produtoAluguelModel = new ProdutoAluguelModel();
            $result = json_decode($produtoAluguelModel->InsertProdutoAluguel($codAluguel));
            $result[2] = $codAluguel;
        }
        return json_encode($result);
    }

    public function UpdateAluguel()
    {
        $dao = new AluguelDao();
        $result = $dao->UpdateAluguel($_SESSION['cod_usuario']);
        if ($result[0]) {
            $codAluguel = $dao->Populate('codVenda', 'I');
            $produtoAluguelModel = new ProdutoAluguelModel();
            if ($dao->Populate('codProdutoAluguel', 'I') == '') {
                $result = json_decode($produtoAluguelModel->InsertProdutoAluguel($codAluguel));
            } else {
                $result = json_decode($produtoAluguelModel->UpdateProdutoAluguel($codAluguel));
            }
            $result[2] = $codAluguel;
        }
        return json_encode($result);
    }

    public function UpdateStatusAluguel()
    {
        $dao = new AluguelDao();
        $result = $dao->UpdateStatusAluguel();
        return json_encode($result);
    }

    public function ListarAlugueisDia()
    {
        $dao = new AluguelDao();
        $lista = $dao->ListarAlugueisDia();
        if ($lista[0] && $lista[1] == null) {
            $lista[1] = [];
        }
        return json_encode($lista);
    }

    public function ListarAlugueisAgendados()
    {
        $dao = new AluguelDao();
        $lista = $dao->ListarAlugueisAgendados();
        if ($lista[0] && $lista[1] == null) {
            $lista[1] = [];
        }
        return json_encode($lista);
    }

    public function ListarTiposPagamento()
    {
        $enum = TipoPagamentoEnum::getEnum();
        $arr = [];
        $i = 0;
        foreach ($enum as $key => $value) {
            $arr[$i]['COD'] = $enum[$key][0];
            $arr[$i]['DSC'] = $enum[$key][1];
            $i++;
        }
        // var_dump($arr); die;
        
        $lista = [true, $arr];
        // var_dump($lista); die;
        return json_encode($lista);
    }
}
