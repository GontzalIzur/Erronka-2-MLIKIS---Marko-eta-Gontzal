<?php

    /*
    DOM dokumentu berri bat sortzen dugu XSLT arauekin eta XML datuekin
    */

    ini_set('display_errors', '1');
    error_reporting(E_ALL);
    
   $reglas = new DOMDocument();
   $reglas->load("produktuak_salmenta_guneak.xsl");

   $datos = new DOMDocument();
   $datos->load("datuak.xml");

    /*
    Arau horiek aplikatzeko "motor" bat sortzen dugu.
    Transformazio-arauak kargatuko ditugu
    Arau horiek aplikatuko dizkiogu dokumentuari
    */

   $proc = new XSLTProcessor();
   $proc->importStylesheet($reglas);

   $proc->setParameter('', 'id_tienda',$_GET['id_tien']);


   echo $proc->transformToXML($datos);

?>