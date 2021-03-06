<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="html" version="5.0" encoding="UTF-8"></xsl:output>

    <xsl:template match="datuak">

        <html lang="eu">
            <!-- Web orria responsive egiteko propietateak -->
            <head>
                <title>Gure Produktuak</title>
                <meta charset="utf-8"></meta>
                <meta name="description" content="Makina Saltzaileko web orria" />
                <meta name="keywords" content="vending machine, makina saltzailea, maquina expendedora" />
                <meta name="author" content="Marko eta Gontzal" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" type="text/css" href="CSS/css.css" />

            </head>

            <body class="produktuak">
                <!-- Gure defektuzko header-a hemen titulua joango da -->
                <header>

                    <h1>| Gure Produktuak |</h1>

                    <span class="index1">
                        <a href="GureProduktuakNight.html">
                            <i>Night mode</i>
                        </a>
                    </span>

                </header>

                <!-- Hau menua da, NAV baten modukoa esentzialki -->
                <div class="barra">

                    <h2>
                        \ Menu /
                        <img src="MULTIMEDIA/bus.png" alt="Menu" width="80px" height="50px" />
                    </h2>

                    <ul>
                        <li>
                            <a href="Index.html">~ Tremibus ~</a>
                        </li>
                        <li>
                            <a href="produktuak.php">~ Gure Produktuak ~</a>
                        </li>
                        <li>
                            <a href="salmenta_guneak.php">~ Gure Guneak ~</a>
                        </li>
                        <li>
                            <a href="Formularioak.html">~ Kontsultak ~</a>
                        </li>
                    </ul>

                </div>

                <!-- Kodea ondo maketatuta egoteko eta programatzaileari errazteko lana eta ulermena, orria article batean dago non gorputz bezala lan egiten du, makina bakoitza orri honen section bat da -->

                <!-- Lehenengo makinaren "sectiona" hasten da -->
                <div class="contentProd">
                    <div class="divproduktu">
                        <xsl:for-each select="guneak/gunea">
                            <div class="karratu">
                                <a>
                                    <xsl:attribute name="href">produktuak_salmenta_guneak.php?id_sg=<xsl:value-of select="@id"></xsl:value-of>
                                    </xsl:attribute>
                                    <xsl:value-of select="izena"></xsl:value-of>
                                </a>
                            </div>
                        </xsl:for-each>
                    </div>

                    <fieldset class="datuakProd">
                        <div class="divvvvvvvvv">
                            <xsl:for-each select="produktuak/produktua">

                                <div class="classaskodaude">
                                    <p>
                                        <xsl:value-of select="izena"></xsl:value-of>
                                    </p>

                                    <img class="imgphp1">
                                        <xsl:attribute name="src">
                                            <xsl:value-of select="argazkia"></xsl:value-of>
                                        </xsl:attribute>
                                    </img>
                                </div>
                            </xsl:for-each>
                        </div>

                    </fieldset>


                </div>
                <!-- Footer-a -->
                <footer>

                    <div>
                        <a href="https://www.twitter.com">
                            <img class="saresozialimg" src="MULTIMEDIA/twitter_logo.png" alt="Twitter_Logo" />
                        </a>

                        <a href="https://www.instagram.com">
                            <img class="saresozialimg" src="MULTIMEDIA/insta.webp" alt="Instagram" />
                        </a>

                        <a href="https://www.facebook.com">
                            <img class="saresozialimg" src="MULTIMEDIA/face.webp" alt="Facebook" />
                        </a>
                    </div>

                    <div>
                        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                            <img class="CC" alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
                        </a>
                    </div>

                </footer>

            </body>

        </html>

    </xsl:template>


</xsl:stylesheet>