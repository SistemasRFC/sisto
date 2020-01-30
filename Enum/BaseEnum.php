<?php
class BaseEnum {

    Public Static Function getByCodigo($codigo) {
        $enums = get_class_vars(get_called_class());
        foreach($enums as $key => $value){
            if ($value[0]==$codigo){
                return $enums[$key];
            }
        }
    }

    Public Static Function getByNome($nome) {
        $enums = get_class_vars(get_called_class());
        foreach($enums as $key => $value){
            if ($value[1]==$nome){
                return $enums[$key];
            }
        }
    }

    Public Static Function getEnum(){
        return get_class_vars(get_called_class());
    }
}
?>