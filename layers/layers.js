var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_ElevacinTlachinoltepetl_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Elevación Tlachinoltepetl",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ElevacinTlachinoltepetl_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10806558.118862, 2154905.621026, -10801718.813246, 2160269.776006]
                            })
                        });
var format_Tlachinoltepetlpoligono_2 = new ol.format.GeoJSON();
var features_Tlachinoltepetlpoligono_2 = format_Tlachinoltepetlpoligono_2.readFeatures(json_Tlachinoltepetlpoligono_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tlachinoltepetlpoligono_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tlachinoltepetlpoligono_2.addFeatures(features_Tlachinoltepetlpoligono_2);
var lyr_Tlachinoltepetlpoligono_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tlachinoltepetlpoligono_2, 
                style: style_Tlachinoltepetlpoligono_2,
                popuplayertitle: "Tlachinoltepetl poligono ",
                interactive: true,
                title: '<img src="styles/legend/Tlachinoltepetlpoligono_2.png" /> Tlachinoltepetl poligono '
            });
var format_Curvasdenivel_3 = new ol.format.GeoJSON();
var features_Curvasdenivel_3 = format_Curvasdenivel_3.readFeatures(json_Curvasdenivel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel_3.addFeatures(features_Curvasdenivel_3);
var lyr_Curvasdenivel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvasdenivel_3, 
                style: style_Curvasdenivel_3,
                popuplayertitle: "Curvas de nivel ",
                interactive: true,
                title: '<img src="styles/legend/Curvasdenivel_3.png" /> Curvas de nivel '
            });
var format_ZonadeEstudio_4 = new ol.format.GeoJSON();
var features_ZonadeEstudio_4 = format_ZonadeEstudio_4.readFeatures(json_ZonadeEstudio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonadeEstudio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeEstudio_4.addFeatures(features_ZonadeEstudio_4);
var lyr_ZonadeEstudio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeEstudio_4, 
                style: style_ZonadeEstudio_4,
                popuplayertitle: "Zona de Estudio",
                interactive: true,
                title: '<img src="styles/legend/ZonadeEstudio_4.png" /> Zona de Estudio'
            });
var format_Observaciones_5 = new ol.format.GeoJSON();
var features_Observaciones_5 = format_Observaciones_5.readFeatures(json_Observaciones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Observaciones_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Observaciones_5.addFeatures(features_Observaciones_5);
var lyr_Observaciones_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Observaciones_5, 
                style: style_Observaciones_5,
                popuplayertitle: "Observaciones ",
                interactive: true,
    title: 'Observaciones <br />\
    <img src="styles/legend/Observaciones_5_0.png" /> aff. granitum<br />\
    <img src="styles/legend/Observaciones_5_1.png" /> aff. mexicanus <br />\
    <img src="styles/legend/Observaciones_5_2.png" /> cafetalera<br />\
    <img src="styles/legend/Observaciones_5_3.png" /> gemmingeri<br />\
    <img src="styles/legend/Observaciones_5_4.png" /> loki  <br />\
    <img src="styles/legend/Observaciones_5_5.png" /> polyzona<br />\
    <img src="styles/legend/Observaciones_5_6.png" /> pygmeaus<br />\
    <img src="styles/legend/Observaciones_5_7.png" /> rhodopis <br />\
    <img src="styles/legend/Observaciones_5_8.png" /> schiedii<br />\
    <img src="styles/legend/Observaciones_5_9.png" /> semidoliatus <br />\
    <img src="styles/legend/Observaciones_5_10.png" /> smaragdinus <br />\
    <img src="styles/legend/Observaciones_5_11.png" /> towsendi<br />\
    <img src="styles/legend/Observaciones_5_12.png" /> valliceps<br />\
    <img src="styles/legend/Observaciones_5_13.png" /> vinitor <br />\
    <img src="styles/legend/Observaciones_5_14.png" /> <br />'
        });

lyr_ESRISatellite_0.setVisible(true);lyr_ElevacinTlachinoltepetl_1.setVisible(true);lyr_Tlachinoltepetlpoligono_2.setVisible(true);lyr_Curvasdenivel_3.setVisible(true);lyr_ZonadeEstudio_4.setVisible(true);lyr_Observaciones_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_ElevacinTlachinoltepetl_1,lyr_Tlachinoltepetlpoligono_2,lyr_Curvasdenivel_3,lyr_ZonadeEstudio_4,lyr_Observaciones_5];
lyr_Tlachinoltepetlpoligono_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Curvasdenivel_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ZonadeEstudio_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Observaciones_5.set('fieldAliases', {'Orden': 'Orden', 'Familia': 'Familia', 'Genero': 'Genero', 'Especie': 'Especie', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Tlachinoltepetlpoligono_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Curvasdenivel_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_ZonadeEstudio_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Observaciones_5.set('fieldImages', {'Orden': 'TextEdit', 'Familia': 'TextEdit', 'Genero': 'TextEdit', 'Especie': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Tlachinoltepetlpoligono_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_Curvasdenivel_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_ZonadeEstudio_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'inline label - always visible', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Observaciones_5.set('fieldLabels', {'Orden': 'inline label - always visible', 'Familia': 'inline label - always visible', 'Genero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Latitud': 'inline label - always visible', 'Longitud': 'inline label - always visible', });
lyr_Observaciones_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});