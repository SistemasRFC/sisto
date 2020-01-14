<?php

class FuncoesString{

    /**
     * 
     * @param type $tabelaPivot
     * @param type $campoPivot
     * @param type $criterioPivot
     * @param type $outrosCampos
     * @param type $campoCont
     * @param type $alias
     * @param type $criterioSelect
     * @param type $campoSomar
     * @param type $tabela
     * @return type
     */
    Public function Pivotear($tabelaPivot,
                             $campoPivot,
                             $criterioPivot,
                             $outrosCampos,
                             $campoCont,
                             $criterioSelect,
                             $campoSomar,
                             $tabela,
                             $aliasTabela,
                             $join,
                             $orderby){
        $sql_group = "SELECT $campoPivot AS $campoPivot
                        FROM $tabelaPivot
                        $criterioPivot
                       GROUP BY $campoPivot";
        $result_group = $this->selectDB($sql_group, false);
        $sql_montada = "SELECT ";
        if ($outrosCampos!=''){
            $sql_montada .= $outrosCampos.', ';
        }
        for ($i=0;$i<count($result_group[1]);$i++){
            $sql_montada.=" SUM(CASE WHEN $campoCont='".$result_group[1][$i][$campoPivot]."' THEN $campoSomar ELSE 0 END) AS '".$result_group[1][$i][$campoPivot]."',";
        }
        $sql_montada = substr($sql_montada, 0, strlen($sql_montada)-1);
        $sql_montada.= " FROM $tabela ";
        if ($aliasTabela!=''){
            $sql_montada .= $aliasTabela." ";
        }
        if ($join!=''){
            $sql_montada .= $join." ";
        }
        if ($criterioSelect!=''){
            $sql_montada .= " $criterioSelect";
        }
        if ($outrosCampos!=''){
            $sql_montada .= " GROUP BY $outrosCampos
                              ORDER BY $orderby";
        }
        return $sql_montada;
    }  
    
    /**
     * 
     * @param type $tabela
     * @param type $tabelaPivot
     * @param type $campoPivot
     * @param type $outrosCampos
     * @param type $campoCont
     * @param type $alias
     * @param type $criterioPivot
     * @param type $criterioSelect
     * @param type $campoSomar
     * @return type Select
     */
    Public function Pivot1($tabela,
                         $tabelaPivot,
                         $campoPivot,
                         $outrosCampos,
                         $campoCont,
                         $alias,
                         $criterioPivot,
                         $criterioSelect,
                         $campoSomar){
        if ($tabelaPivot==''){
            $tabelaPivotear=$tabela;
        }else{
            $tabelaPivotear=$tabelaPivot;
        }
        $sql_group = "SELECT $campoPivot AS $campoPivot
                        FROM $tabelaPivotear
                        $criterioPivot
                       GROUP BY $campoPivot";
        $result_group = $this->selectDB($sql_group, false);
        $result_group = $result_group[1];
        $colunas='';
        for ($i=0;$i<count($result_group);$i++){
            if ($colunas==''){
                $colunas=''.$result_group[$i][$campoPivot];
            }else{
                $colunas=$colunas.','.$result_group[$i][$campoPivot];
            }
            $colunas.=' ';
        }
        if ($outrosCampos!=''){
            $sql_montada = "SELECT $outrosCampos,
                                   $campoCont as $alias";
        }else{
            $sql_montada = "SELECT $campoCont as $alias";
        }
        $j=0;
        $tamanho = strlen($colunas);
        while ($j<$tamanho){
            $palavra='';
            $palavra = $this->pegaPalavra($colunas, $j, $tamanho);
            $j=$j+strlen($palavra)+1;
            $sql_montada.=", SUM(CASE WHEN $campoPivot='$palavra' THEN $campoSomar ELSE 0 END) AS '$palavra'";
        }
        $sql_montada.= " FROM $tabela";
        if ($criterioSelect!=''){
            $sql_montada .= " $criterioSelect";
        }
        if ($outrosCampos!=''){
            $sql_montada .= " GROUP BY $outrosCampos, $campoCont
                              ORDER BY $outrosCampos, $campoCont";
        }
        return $sql_montada;
    }
    
    Public Function pegaPalavra($Texto, $inicio, $tamanho){
        $j=$inicio;
        $palavra='';
        while (($Texto[$j]!=',')&&
              ($j+1<$tamanho)){
            $palavra=$palavra.$Texto[$j];
            $j=$j+1;
        }
        return $palavra;
    }    
}
