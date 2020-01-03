<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php");
include_once (PATH."/Model/MontaFile/MontaFileModel.php");
class MontaFileController extends BaseController
{
       
    Public Function ChamaView(){
        $params = array('pagina' => '../../View/MontaFile/MontaFileView.php');        
        echo ($this->gen_redirect_and_form('View/MontaFile/MontaFileView.php', $params));   
    }
    
    Public Function ListarTabelas(){
        $model = new MontaFileModel();
        echo $model->ListarTabelas();
    }    
    
    Public Function GeraFile(){
        $model = new MontaFileModel();
        echo $model->GeraFile();
    }
      
}    
?>
