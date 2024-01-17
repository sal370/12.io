var wms_layers = [];


    var projection_BASEMAP_Rupabumi_Indonesia_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_BASEMAP_Rupabumi_Indonesia_0 = projection_BASEMAP_Rupabumi_Indonesia_0.getExtent();
    var size_BASEMAP_Rupabumi_Indonesia_0 = ol.extent.getWidth(projectionExtent_BASEMAP_Rupabumi_Indonesia_0) / 256;
    var resolutions_BASEMAP_Rupabumi_Indonesia_0 = new Array(14);
    var matrixIds_BASEMAP_Rupabumi_Indonesia_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_BASEMAP_Rupabumi_Indonesia_0[z] = size_BASEMAP_Rupabumi_Indonesia_0 / Math.pow(2, z);
        matrixIds_BASEMAP_Rupabumi_Indonesia_0[z] = z;
    }
    var lyr_BASEMAP_Rupabumi_Indonesia_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://geoservices.big.go.id/rbi/rest/services/BASEMAP/Rupabumi_Indonesia/MapServer/WMTS/1.0.0/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "BASEMAP_Rupabumi_Indonesia",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_BASEMAP_Rupabumi_Indonesia_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_BASEMAP_Rupabumi_Indonesia_0),
                resolutions: resolutions_BASEMAP_Rupabumi_Indonesia_0,
                matrixIds: matrixIds_BASEMAP_Rupabumi_Indonesia_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "BASEMAP_Rupabumi_Indonesia",
                            opacity: 1.0,
                            
                            
                          });

lyr_BASEMAP_Rupabumi_Indonesia_0.setVisible(true);
var layersList = [lyr_BASEMAP_Rupabumi_Indonesia_0];
