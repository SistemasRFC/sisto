<?php
header('Content-Type: text/html; charset=UTF-8');
ini_set('default_charset', 'UTF-8');
DEFINE('V', time());
//DEFINE('V', 1);
?>
<html>
        <script src="../../Resources/jquery/jquery-1.10.1.min.js"></script>
        <script src="../../Resources/bootstrap/js/popper.min.js"></script>
        <script src="../../Resources/bootstrap/js/bootstrap.min.js"></script>
        <!-- jqwidgets -->
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxcore.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxdata.js"></script>
        <!-- Bootstrap core CSS -->
        <link href="../../Resources/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="../../Resources/jqx/jqwidgets/styles/jqx.base.css" type="text/css" />        
        <!-- Custom styles for this template -->
        <link href="../../Resources/bootstrap/css/dashboard.css" rel="stylesheet">
        <link href="../../Resources/css/style.css?rdm=<?php echo V;?>" rel="stylesheet">
        <script src="../../Resources/swal/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../../Resources/swal/dist/sweetalert.css">         
        <!-- DataTables -->
        <link rel="stylesheet" type="text/css" href="../../Resources/datatable/datatable.css"/>
        <script type="text/javascript" src="../../Resources/datatable/datatable.js"></script>
        
</html>
