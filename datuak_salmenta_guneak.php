<?php

    /*
    DOM dokumentu berri bat sortzen dugu XSLT arauekin eta XML datuekin
    */

    ini_set('display_errors', '1');
    error_reporting(E_ALL);
    
   $reglas = new DOMDocument();
   $reglas->load("datuak_salmenta_guneak.xsl");

   $datos = new DOMDocument();
   $datos->load("datuak.xml");

    /*
    Arau horiek aplikatzeko "motor" bat sortzen dugu.
    Transformazio-arauak kargatuko ditugu
    Arau ahoriek aplikatuko dizkiogu dokumentuari
    */

   $proc = new XSLTProcessor();
   $proc->importStylesheet($reglas);
   $proc->setParameter('', 'id_sg',$_GET['id_sg']);

   echo $proc->transformToXML($datos);

?>