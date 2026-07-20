var wms_layers = [];

var lyr_Ortofotocolorvigente_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_vigent",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto color vigente',
                            popuplayertitle: 'Ortofoto color vigente',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolorvigente_0, 0]);
var format_Tuberias_AP8001000E35_1 = new ol.format.GeoJSON();
var features_Tuberias_AP8001000E35_1 = format_Tuberias_AP8001000E35_1.readFeatures(json_Tuberias_AP8001000E35_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuberias_AP8001000E35_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuberias_AP8001000E35_1.addFeatures(features_Tuberias_AP8001000E35_1);
var lyr_Tuberias_AP8001000E35_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuberias_AP8001000E35_1, 
                style: style_Tuberias_AP8001000E35_1,
                popuplayertitle: 'Tuberias_AP (800-1000 - E3.5)',
                interactive: true,
    title: 'Tuberias_AP (800-1000 - E3.5)<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_0.png" /> Imp_FIBROCEMENTO<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_1.png" /> Imp_FUNDICION<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_2.png" /> Imp_PVC<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_3.png" /> Imp_PE<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_4.png" /> Distr_FIBROCEMENTO<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_5.png" /> Distr_FUNDICIO<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_6.png" /> Distr_PVC<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_7.png" /> Distr_PE<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_8.png" /> Tuberia Doble<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_9.png" /> Desconocido PRUEVAS <br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_10.png" /> ByPass Neteja<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_11.png" /> acometida correcte<br />\
    <img src="styles/legend/Tuberias_AP8001000E35_1_12.png" /> acometida fraude<br />' });
var format_Filtros300_2 = new ol.format.GeoJSON();
var features_Filtros300_2 = format_Filtros300_2.readFeatures(json_Filtros300_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Filtros300_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Filtros300_2.addFeatures(features_Filtros300_2);
var lyr_Filtros300_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Filtros300_2, 
                style: style_Filtros300_2,
                popuplayertitle: 'Filtros (300)',
                interactive: true,
    title: 'Filtros (300)<br />\
    <img src="styles/legend/Filtros300_2_0.png" /> Filtro<br />\
    <img src="styles/legend/Filtros300_2_1.png" /> Filtro<br />' });
var format_Ventoses200_3 = new ol.format.GeoJSON();
var features_Ventoses200_3 = format_Ventoses200_3.readFeatures(json_Ventoses200_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ventoses200_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ventoses200_3.addFeatures(features_Ventoses200_3);
var lyr_Ventoses200_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ventoses200_3, 
                style: style_Ventoses200_3,
                popuplayertitle: 'Ventoses (200)',
                interactive: true,
    title: 'Ventoses (200)<br />\
    <img src="styles/legend/Ventoses200_3_0.png" /> Ventosas<br />' });
var format_Hidrante250R3200_4 = new ol.format.GeoJSON();
var features_Hidrante250R3200_4 = format_Hidrante250R3200_4.readFeatures(json_Hidrante250R3200_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrante250R3200_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrante250R3200_4.addFeatures(features_Hidrante250R3200_4);
var lyr_Hidrante250R3200_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrante250R3200_4, 
                style: style_Hidrante250R3200_4,
                popuplayertitle: 'Hidrante (250 - R3200)',
                interactive: true,
    title: 'Hidrante (250 - R3200)<br />\
    <img src="styles/legend/Hidrante250R3200_4_0.png" /> Hidrant<br />' });
var format_Valvulas200_5 = new ol.format.GeoJSON();
var features_Valvulas200_5 = format_Valvulas200_5.readFeatures(json_Valvulas200_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valvulas200_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valvulas200_5.addFeatures(features_Valvulas200_5);
var lyr_Valvulas200_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valvulas200_5, 
                style: style_Valvulas200_5,
                popuplayertitle: 'Valvulas (200)',
                interactive: true,
    title: 'Valvulas (200)<br />\
    <img src="styles/legend/Valvulas200_5_0.png" /> Valvula n/a<br />\
    <img src="styles/legend/Valvulas200_5_1.png" /> Valvula n/c<br />' });
var format_Reducctora250_6 = new ol.format.GeoJSON();
var features_Reducctora250_6 = format_Reducctora250_6.readFeatures(json_Reducctora250_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reducctora250_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reducctora250_6.addFeatures(features_Reducctora250_6);
var lyr_Reducctora250_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reducctora250_6, 
                style: style_Reducctora250_6,
                popuplayertitle: 'Reducctora (250)',
                interactive: true,
    title: 'Reducctora (250)<br />\
    <img src="styles/legend/Reducctora250_6_0.png" /> Reductora<br />' });
var format_Bombas150_7 = new ol.format.GeoJSON();
var features_Bombas150_7 = format_Bombas150_7.readFeatures(json_Bombas150_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bombas150_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bombas150_7.addFeatures(features_Bombas150_7);
var lyr_Bombas150_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bombas150_7, 
                style: style_Bombas150_7,
                popuplayertitle: 'Bombas (150)',
                interactive: true,
    title: 'Bombas (150)<br />\
    <img src="styles/legend/Bombas150_7_0.png" /> Grupo de Presion<br />' });
var format_Depositos300_8 = new ol.format.GeoJSON();
var features_Depositos300_8 = format_Depositos300_8.readFeatures(json_Depositos300_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Depositos300_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Depositos300_8.addFeatures(features_Depositos300_8);
var lyr_Depositos300_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Depositos300_8, 
                style: style_Depositos300_8,
                popuplayertitle: 'Depositos (300)',
                interactive: true,
    title: 'Depositos (300)<br />\
    <img src="styles/legend/Depositos300_8_0.png" /> Deposito Plastico<br />\
    <img src="styles/legend/Depositos300_8_1.png" /> Deposito Plastico<br />\
    <img src="styles/legend/Depositos300_8_2.png" /> Deposito Plastico<br />' });
var format_Captaciones300_9 = new ol.format.GeoJSON();
var features_Captaciones300_9 = format_Captaciones300_9.readFeatures(json_Captaciones300_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Captaciones300_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Captaciones300_9.addFeatures(features_Captaciones300_9);
var lyr_Captaciones300_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Captaciones300_9, 
                style: style_Captaciones300_9,
                popuplayertitle: 'Captaciones (300)',
                interactive: true,
    title: 'Captaciones (300)<br />\
    <img src="styles/legend/Captaciones300_9_0.png" /> Captacion<br />' });
var format_ContadoresSECTORIALrosas125_10 = new ol.format.GeoJSON();
var features_ContadoresSECTORIALrosas125_10 = format_ContadoresSECTORIALrosas125_10.readFeatures(json_ContadoresSECTORIALrosas125_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContadoresSECTORIALrosas125_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContadoresSECTORIALrosas125_10.addFeatures(features_ContadoresSECTORIALrosas125_10);
var lyr_ContadoresSECTORIALrosas125_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContadoresSECTORIALrosas125_10, 
                style: style_ContadoresSECTORIALrosas125_10,
                popuplayertitle: 'Contadores SECTORIAL rosas (125)',
                interactive: true,
    title: 'Contadores SECTORIAL rosas (125)<br />\
    <img src="styles/legend/ContadoresSECTORIALrosas125_10_0.png" /> Contador Manual + Telelectura<br />' });

lyr_Ortofotocolorvigente_0.setVisible(true);lyr_Tuberias_AP8001000E35_1.setVisible(true);lyr_Filtros300_2.setVisible(true);lyr_Ventoses200_3.setVisible(true);lyr_Hidrante250R3200_4.setVisible(true);lyr_Valvulas200_5.setVisible(true);lyr_Reducctora250_6.setVisible(true);lyr_Bombas150_7.setVisible(true);lyr_Depositos300_8.setVisible(true);lyr_Captaciones300_9.setVisible(true);lyr_ContadoresSECTORIALrosas125_10.setVisible(true);
var layersList = [lyr_Ortofotocolorvigente_0,lyr_Tuberias_AP8001000E35_1,lyr_Filtros300_2,lyr_Ventoses200_3,lyr_Hidrante250R3200_4,lyr_Valvulas200_5,lyr_Reducctora250_6,lyr_Bombas150_7,lyr_Depositos300_8,lyr_Captaciones300_9,lyr_ContadoresSECTORIALrosas125_10];
lyr_Tuberias_AP8001000E35_1.set('fieldAliases', {'fid': 'fid', 'XARXA': 'XARXA', 'MATERIAL': 'MATERIAL', 'DIAMETRO': 'DIAMETRO', 'COMENTS_EDU': 'COMENTS_EDU', 'ML_2025': 'ML_2025', 'ML_2026': 'ML_2026', 'ML_2027': 'ML_2027', 'MUNICIPIO': 'MUNICIPIO', 'LONGITUD': 'LONGITUD', 'Layer': 'Layer', });
lyr_Filtros300_2.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'COMENTARIOS': 'COMENTARIOS', 'NOM_AP': 'NOM_AP', 'ROTACION': 'ROTACION', });
lyr_Ventoses200_3.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'DIAMETRO': 'DIAMETRO', 'MARCA': 'MARCA', 'ESTADO': 'ESTADO', 'COMENTARIO': 'COMENTARIO', 'UBICACION': 'UBICACION', 'ROTACION': 'ROTACION', });
lyr_Hidrante250R3200_4.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'DIAMETRO': 'DIAMETRO', 'ESTADO': 'ESTADO', 'COMENTARIO': 'COMENTARIO', 'MUNICIPIO_H': 'MUNICIPIO_H', 'UBICACION': 'UBICACION', 'NUM_HIDR': 'NUM_HIDR', 'ROTCACION': 'ROTCACION', 'LONGITUD_X': 'LONGITUD_X', 'LATITUD_Y': 'LATITUD_Y', 'CARTELL': 'CARTELL', 'REVISIO': 'REVISIO', 'URL_MAPS': 'URL_MAPS', });
lyr_Valvulas200_5.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'MARCA': 'MARCA', 'UBICACION': 'UBICACION', 'COMENTARIO': 'COMENTARIO', 'ROTACION': 'ROTACION', 'MUNICIPIO': 'MUNICIPIO', 'SECTOR': 'SECTOR', 'SUB_SECTOR': 'SUB_SECTOR', 'ACTUACIO': 'ACTUACIO', 'MOTIVO': 'MOTIVO', 'DATA': 'DATA', });
lyr_Reducctora250_6.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'MARCA': 'MARCA', 'MODEL': 'MODEL', 'DIAMETRO': 'DIAMETRO', 'NUM_SERIE': 'NUM_SERIE', 'NOM_ETQ': 'NOM_ETQ', 'ROTACION': 'ROTACION', 'PRES_ENTRADA': 'PRES_ENTRADA', 'PRES_SORTIDA': 'PRES_SORTIDA', 'URL_MAPS': 'URL_MAPS', 'COTA': 'COTA', 'MUNICIPIO': 'MUNICIPIO', 'OBSERV_OPERARIOS': 'OBSERV_OPERARIOS', 'OBSERV_OFICINA': 'OBSERV_OFICINA', 'MOTIVO': 'MOTIVO', 'ACTUACIO': 'ACTUACIO', 'SECTOR': 'SECTOR', 'DATA': 'DATA', });
lyr_Bombas150_7.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'M_MARCA': 'M_MARCA', 'M_SERIE': 'M_SERIE', 'M_POTENCIA': 'M_POTENCIA', 'M_RPM': 'M_RPM', 'M_CONEXION ': 'M_CONEXION ', 'M_INTENSIDAD': 'M_INTENSIDAD', 'B_TIPO': 'B_TIPO', 'B_MARCA': 'B_MARCA', 'B_SERIE': 'B_SERIE', 'B_MODELO': 'B_MODELO', 'B_CAUDAL': 'B_CAUDAL', 'B_PRESION': 'B_PRESION', 'COMENTARIOS': 'COMENTARIOS', 'ROTACION': 'ROTACION', 'NOM_ETQ': 'NOM_ETQ', });
lyr_Depositos300_8.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'NOM_DIPOSIT': 'NOM_DIPOSIT', 'NUM_SINAC': 'NUM_SINAC', 'M_CUBICOS': 'M_CUBICOS', 'LITROS_CLORO': 'LITROS_CLORO', 'ROTACION': 'ROTACION', 'COMENTARIO': 'COMENTARIO', 'URL_MAPS': 'URL_MAPS', 'MUNICIPIO': 'MUNICIPIO', 'COTA': 'COTA', 'TEXT_CERTIFICAT': 'TEXT_CERTIFICAT', 'HISTORIC_NETEJES': 'HISTORIC_NETEJES', 'DATA_CERT_2027': 'DATA_CERT_2027', 'DATA_CERT_2024': 'DATA_CERT_2024', 'DATA_CERT_2026': 'DATA_CERT_2026', 'id_Laboratori': 'id_Laboratori', 'DATA_CERT_2029': 'DATA_CERT_2029', 'DATA_CERT_2030': 'DATA_CERT_2030', 'DATA_CERT_2032': 'DATA_CERT_2032', 'INSTRUCCIO_NETEJA': 'INSTRUCCIO_NETEJA', });
lyr_Captaciones300_9.set('fieldAliases', {'fid': 'fid', 'ACCESORIO': 'ACCESORIO', 'COMENTARIO': 'COMENTARIO', 'NOM_AP': 'NOM_AP', 'NUM_SINAC': 'NUM_SINAC', 'ROTACION': 'ROTACION', 'URL_MAPS': 'URL_MAPS', 'COTA': 'COTA', 'MUNICIPIO': 'MUNICIPIO', 'PROFUNDIDAD': 'PROFUNDIDAD', 'AGUA_CAPTADA': 'AGUA_CAPTADA', 'LONGITUD_X': 'LONGITUD_X', 'LATITUD_Y': 'LATITUD_Y', });
lyr_ContadoresSECTORIALrosas125_10.set('fieldAliases', {'fid': 'fid', 'ROTACION': 'ROTACION', 'ACCESORIO': 'ACCESORIO', 'NOM_ETQ': 'NOM_ETQ', 'GOOGLE_MAPS': 'GOOGLE_MAPS', 'csvPC_QGIS': 'csvPC_QGIS', 'COMEN_EDU': 'COMEN_EDU', 'DIAMETRO': 'DIAMETRO', 'csv_POBLACIO': 'csv_POBLACIO', 'csv_NOM_COMPTADOR': 'csv_NOM_COMPTADOR', 'csv_STATUS': 'csv_STATUS', 'csv_NUM_SERIE': 'csv_NUM_SERIE', 'csv_MODEL': 'csv_MODEL', 'csv_OBS': 'csv_OBS', 'csv_COMENT': 'csv_COMENT', 'csv_PARTE_O': 'csv_PARTE_O', 'csv_PARTE_T': 'csv_PARTE_T', 'csv_LOGGER': 'csv_LOGGER', 'MOTIVO': 'MOTIVO', 'ACTUACIO': 'ACTUACIO', 'SECTOR': 'SECTOR', 'MARCA': 'MARCA', 'DATA': 'DATA', 'NUM_CONTRATO': 'NUM_CONTRATO', });
lyr_Tuberias_AP8001000E35_1.set('fieldImages', {'fid': 'TextEdit', 'XARXA': 'ValueMap', 'MATERIAL': 'ValueMap', 'DIAMETRO': 'ValueMap', 'COMENTS_EDU': 'TextEdit', 'ML_2025': 'TextEdit', 'ML_2026': 'TextEdit', 'ML_2027': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'Layer': 'TextEdit', });
lyr_Filtros300_2.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'COMENTARIOS': 'TextEdit', 'NOM_AP': 'TextEdit', 'ROTACION': 'TextEdit', });
lyr_Ventoses200_3.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'MARCA': 'TextEdit', 'ESTADO': 'TextEdit', 'COMENTARIO': 'TextEdit', 'UBICACION': 'TextEdit', 'ROTACION': 'TextEdit', });
lyr_Hidrante250R3200_4.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'ESTADO': 'TextEdit', 'COMENTARIO': 'TextEdit', 'MUNICIPIO_H': 'TextEdit', 'UBICACION': 'TextEdit', 'NUM_HIDR': 'TextEdit', 'ROTCACION': 'TextEdit', 'LONGITUD_X': 'TextEdit', 'LATITUD_Y': 'TextEdit', 'CARTELL': 'TextEdit', 'REVISIO': 'DateTime', 'URL_MAPS': 'TextEdit', });
lyr_Valvulas200_5.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'ESTADO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'MARCA': 'TextEdit', 'UBICACION': 'TextEdit', 'COMENTARIO': 'TextEdit', 'ROTACION': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECTOR': 'TextEdit', 'SUB_SECTOR': 'TextEdit', 'ACTUACIO': 'TextEdit', 'MOTIVO': 'TextEdit', 'DATA': 'DateTime', });
lyr_Reducctora250_6.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'MARCA': 'TextEdit', 'MODEL': 'TextEdit', 'DIAMETRO': 'TextEdit', 'NUM_SERIE': 'TextEdit', 'NOM_ETQ': 'TextEdit', 'ROTACION': 'TextEdit', 'PRES_ENTRADA': 'TextEdit', 'PRES_SORTIDA': 'TextEdit', 'URL_MAPS': 'TextEdit', 'COTA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'OBSERV_OPERARIOS': 'TextEdit', 'OBSERV_OFICINA': 'TextEdit', 'MOTIVO': 'TextEdit', 'ACTUACIO': 'TextEdit', 'SECTOR': 'TextEdit', 'DATA': 'DateTime', });
lyr_Bombas150_7.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'M_MARCA': 'TextEdit', 'M_SERIE': 'TextEdit', 'M_POTENCIA': 'TextEdit', 'M_RPM': 'TextEdit', 'M_CONEXION ': 'TextEdit', 'M_INTENSIDAD': 'TextEdit', 'B_TIPO': 'TextEdit', 'B_MARCA': 'TextEdit', 'B_SERIE': 'TextEdit', 'B_MODELO': 'TextEdit', 'B_CAUDAL': 'TextEdit', 'B_PRESION': 'TextEdit', 'COMENTARIOS': 'TextEdit', 'ROTACION': 'TextEdit', 'NOM_ETQ': 'TextEdit', });
lyr_Depositos300_8.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'NOM_DIPOSIT': 'TextEdit', 'NUM_SINAC': 'TextEdit', 'M_CUBICOS': 'TextEdit', 'LITROS_CLORO': 'TextEdit', 'ROTACION': 'TextEdit', 'COMENTARIO': 'TextEdit', 'URL_MAPS': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'COTA': 'TextEdit', 'TEXT_CERTIFICAT': 'TextEdit', 'HISTORIC_NETEJES': 'TextEdit', 'DATA_CERT_2027': 'TextEdit', 'DATA_CERT_2024': 'TextEdit', 'DATA_CERT_2026': 'TextEdit', 'id_Laboratori': 'TextEdit', 'DATA_CERT_2029': 'TextEdit', 'DATA_CERT_2030': 'TextEdit', 'DATA_CERT_2032': 'TextEdit', 'INSTRUCCIO_NETEJA': 'TextEdit', });
lyr_Captaciones300_9.set('fieldImages', {'fid': 'TextEdit', 'ACCESORIO': 'ValueMap', 'COMENTARIO': 'TextEdit', 'NOM_AP': 'TextEdit', 'NUM_SINAC': 'TextEdit', 'ROTACION': 'TextEdit', 'URL_MAPS': 'TextEdit', 'COTA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'PROFUNDIDAD': 'TextEdit', 'AGUA_CAPTADA': 'TextEdit', 'LONGITUD_X': 'TextEdit', 'LATITUD_Y': 'TextEdit', });
lyr_ContadoresSECTORIALrosas125_10.set('fieldImages', {'fid': 'TextEdit', 'ROTACION': 'TextEdit', 'ACCESORIO': 'ValueMap', 'NOM_ETQ': 'TextEdit', 'GOOGLE_MAPS': 'TextEdit', 'csvPC_QGIS': 'TextEdit', 'COMEN_EDU': 'TextEdit', 'DIAMETRO': 'TextEdit', 'csv_POBLACIO': 'TextEdit', 'csv_NOM_COMPTADOR': 'TextEdit', 'csv_STATUS': 'TextEdit', 'csv_NUM_SERIE': 'TextEdit', 'csv_MODEL': 'TextEdit', 'csv_OBS': 'TextEdit', 'csv_COMENT': 'TextEdit', 'csv_PARTE_O': 'TextEdit', 'csv_PARTE_T': 'TextEdit', 'csv_LOGGER': 'TextEdit', 'MOTIVO': 'TextEdit', 'ACTUACIO': 'TextEdit', 'SECTOR': 'TextEdit', 'MARCA': 'TextEdit', 'DATA': 'DateTime', 'NUM_CONTRATO': 'TextEdit', });
lyr_Tuberias_AP8001000E35_1.set('fieldLabels', {'fid': 'no label', 'XARXA': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', 'DIAMETRO': 'inline label - always visible', 'COMENTS_EDU': 'no label', 'ML_2025': 'no label', 'ML_2026': 'no label', 'ML_2027': 'no label', 'MUNICIPIO': 'no label', 'LONGITUD': 'inline label - always visible', 'Layer': 'no label', });
lyr_Filtros300_2.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'COMENTARIOS': 'no label', 'NOM_AP': 'inline label - always visible', 'ROTACION': 'no label', });
lyr_Ventoses200_3.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'DIAMETRO': 'no label', 'MARCA': 'no label', 'ESTADO': 'no label', 'COMENTARIO': 'no label', 'UBICACION': 'no label', 'ROTACION': 'no label', });
lyr_Hidrante250R3200_4.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'DIAMETRO': 'no label', 'ESTADO': 'inline label - always visible', 'COMENTARIO': 'no label', 'MUNICIPIO_H': 'no label', 'UBICACION': 'no label', 'NUM_HIDR': 'no label', 'ROTCACION': 'no label', 'LONGITUD_X': 'no label', 'LATITUD_Y': 'no label', 'CARTELL': 'no label', 'REVISIO': 'no label', 'URL_MAPS': 'inline label - always visible', });
lyr_Valvulas200_5.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'ESTADO': 'no label', 'DIAMETRO': 'inline label - always visible', 'MARCA': 'no label', 'UBICACION': 'no label', 'COMENTARIO': 'no label', 'ROTACION': 'no label', 'MUNICIPIO': 'no label', 'SECTOR': 'no label', 'SUB_SECTOR': 'no label', 'ACTUACIO': 'no label', 'MOTIVO': 'no label', 'DATA': 'no label', });
lyr_Reducctora250_6.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'MARCA': 'inline label - always visible', 'MODEL': 'inline label - always visible', 'DIAMETRO': 'inline label - always visible', 'NUM_SERIE': 'inline label - always visible', 'NOM_ETQ': 'inline label - always visible', 'ROTACION': 'no label', 'PRES_ENTRADA': 'inline label - always visible', 'PRES_SORTIDA': 'inline label - always visible', 'URL_MAPS': 'inline label - always visible', 'COTA': 'inline label - always visible', 'MUNICIPIO': 'no label', 'OBSERV_OPERARIOS': 'no label', 'OBSERV_OFICINA': 'no label', 'MOTIVO': 'no label', 'ACTUACIO': 'no label', 'SECTOR': 'no label', 'DATA': 'no label', });
lyr_Bombas150_7.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'M_MARCA': 'no label', 'M_SERIE': 'no label', 'M_POTENCIA': 'no label', 'M_RPM': 'no label', 'M_CONEXION ': 'no label', 'M_INTENSIDAD': 'no label', 'B_TIPO': 'no label', 'B_MARCA': 'no label', 'B_SERIE': 'no label', 'B_MODELO': 'no label', 'B_CAUDAL': 'no label', 'B_PRESION': 'no label', 'COMENTARIOS': 'no label', 'ROTACION': 'no label', 'NOM_ETQ': 'inline label - always visible', });
lyr_Depositos300_8.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'NOM_DIPOSIT': 'inline label - always visible', 'NUM_SINAC': 'no label', 'M_CUBICOS': 'inline label - always visible', 'LITROS_CLORO': 'no label', 'ROTACION': 'no label', 'COMENTARIO': 'no label', 'URL_MAPS': 'inline label - always visible', 'MUNICIPIO': 'no label', 'COTA': 'inline label - always visible', 'TEXT_CERTIFICAT': 'no label', 'HISTORIC_NETEJES': 'no label', 'DATA_CERT_2027': 'no label', 'DATA_CERT_2024': 'no label', 'DATA_CERT_2026': 'no label', 'id_Laboratori': 'no label', 'DATA_CERT_2029': 'no label', 'DATA_CERT_2030': 'no label', 'DATA_CERT_2032': 'no label', 'INSTRUCCIO_NETEJA': 'no label', });
lyr_Captaciones300_9.set('fieldLabels', {'fid': 'no label', 'ACCESORIO': 'no label', 'COMENTARIO': 'no label', 'NOM_AP': 'inline label - always visible', 'NUM_SINAC': 'no label', 'ROTACION': 'no label', 'URL_MAPS': 'inline label - always visible', 'COTA': 'inline label - always visible', 'MUNICIPIO': 'no label', 'PROFUNDIDAD': 'no label', 'AGUA_CAPTADA': 'no label', 'LONGITUD_X': 'no label', 'LATITUD_Y': 'no label', });
lyr_ContadoresSECTORIALrosas125_10.set('fieldLabels', {'fid': 'no label', 'ROTACION': 'no label', 'ACCESORIO': 'no label', 'NOM_ETQ': 'inline label - always visible', 'GOOGLE_MAPS': 'inline label - always visible', 'csvPC_QGIS': 'no label', 'COMEN_EDU': 'no label', 'DIAMETRO': 'inline label - always visible', 'csv_POBLACIO': 'no label', 'csv_NOM_COMPTADOR': 'no label', 'csv_STATUS': 'no label', 'csv_NUM_SERIE': 'inline label - always visible', 'csv_MODEL': 'no label', 'csv_OBS': 'no label', 'csv_COMENT': 'no label', 'csv_PARTE_O': 'no label', 'csv_PARTE_T': 'no label', 'csv_LOGGER': 'no label', 'MOTIVO': 'no label', 'ACTUACIO': 'no label', 'SECTOR': 'no label', 'MARCA': 'inline label - always visible', 'DATA': 'inline label - always visible', 'NUM_CONTRATO': 'inline label - always visible', });
lyr_ContadoresSECTORIALrosas125_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});