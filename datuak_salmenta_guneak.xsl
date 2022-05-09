<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" version="5.0" encoding="UTF-8"></xsl:output>
    <xsl:param name="id_sg"></xsl:param>
    <xsl:template match="datuak">
        <html>
            <body>

                <xsl:for-each select="guneak/gunea">

                    <xsl:if test="$id_sg=1">
                        <h1>Hello 1</h1>
                    </xsl:if>
                    <xsl:if test="$id_sg=2">
                        <h1>Hello 2</h1>
                    </xsl:if>
                    <xsl:if test="$id_sg=3">
                        <h1>Hello 3</h1>
                    </xsl:if>
                    <xsl:if test="$id_sg=4">
                        <h1>Hello 4</h1>
                    </xsl:if>
                    <xsl:if test="$id_sg=5">
                        <h1>Hello 5</h1>
                    </xsl:if>
                    <xsl:if test="$id_sg=6">
                        <h1>Hello 6</h1>
                    </xsl:if>

                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>