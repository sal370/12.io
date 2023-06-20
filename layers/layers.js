var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_banjarmasinkecamatan_1 = new ol.format.GeoJSON();
var features_banjarmasinkecamatan_1 = format_banjarmasinkecamatan_1.readFeatures(json_banjarmasinkecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_banjarmasinkecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_banjarmasinkecamatan_1.addFeatures(features_banjarmasinkecamatan_1);
var lyr_banjarmasinkecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_banjarmasinkecamatan_1, 
                style: style_banjarmasinkecamatan_1,
                interactive: true,
    title: 'banjarmasinkecamatan<br />\
    <img src="styles/legend/banjarmasinkecamatan_1_0.png" /> BANJARMASIN BARAT<br />\
    <img src="styles/legend/banjarmasinkecamatan_1_1.png" /> BANJARMASIN SELATAN<br />\
    <img src="styles/legend/banjarmasinkecamatan_1_2.png" /> BANJARMASIN TENGAH<br />\
    <img src="styles/legend/banjarmasinkecamatan_1_3.png" /> BANJARMASIN TIMUR<br />\
    <img src="styles/legend/banjarmasinkecamatan_1_4.png" /> BANJARMASIN UTARA<br />\
    <img src="styles/legend/banjarmasinkecamatan_1_5.png" /> <br />'
        });
var lyr_ALALALALALALAK_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ALALALALALALAK",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ALALALALALALAK_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12746041.731090, -371205.894781, 12775807.981598, -349957.155696]
                            })
                        });
var lyr_PetaAdministrasibjm50krevisi_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peta Administrasi bjm 50k revisi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PetaAdministrasibjm50krevisi_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12748643.214457, -377946.829067, 12770787.223004, -362145.603618]
                            })
                        });
var format_desadialalak_4 = new ol.format.GeoJSON();
var features_desadialalak_4 = format_desadialalak_4.readFeatures(json_desadialalak_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desadialalak_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desadialalak_4.addFeatures(features_desadialalak_4);
var lyr_desadialalak_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_desadialalak_4, 
                style: style_desadialalak_4,
                interactive: true,
    title: 'desadialalak<br />\
    <img src="styles/legend/desadialalak_4_0.png" /> BELANDEAN<br />\
    <img src="styles/legend/desadialalak_4_1.png" /> BELANDEAN MUARA<br />\
    <img src="styles/legend/desadialalak_4_2.png" /> BERANGAS<br />\
    <img src="styles/legend/desadialalak_4_3.png" /> BERANGAS BARAT<br />\
    <img src="styles/legend/desadialalak_4_4.png" /> BERANGAS TIMUR<br />\
    <img src="styles/legend/desadialalak_4_5.png" /> BERINGIN<br />\
    <img src="styles/legend/desadialalak_4_6.png" /> HANDIL BAKTI<br />\
    <img src="styles/legend/desadialalak_4_7.png" /> PANCA KARYA<br />\
    <img src="styles/legend/desadialalak_4_8.png" /> PULAU ALALAK<br />\
    <img src="styles/legend/desadialalak_4_9.png" /> PULAU SEWANGI<br />\
    <img src="styles/legend/desadialalak_4_10.png" /> PULAU SUGARA<br />\
    <img src="styles/legend/desadialalak_4_11.png" /> SEI SEMANGAT BHAKTI<br />\
    <img src="styles/legend/desadialalak_4_12.png" /> SEMANGAT DALAM<br />\
    <img src="styles/legend/desadialalak_4_13.png" /> SEMANGAT KARYA<br />\
    <img src="styles/legend/desadialalak_4_14.png" /> SUNGAI LUMBAH<br />\
    <img src="styles/legend/desadialalak_4_15.png" /> SUNGAI PITUNG<br />\
    <img src="styles/legend/desadialalak_4_16.png" /> TANJUNG HARAPAN<br />\
    <img src="styles/legend/desadialalak_4_17.png" /> TATAH MESJID<br />\
    <img src="styles/legend/desadialalak_4_18.png" /> <br />'
        });
var format_sungaibjm_5 = new ol.format.GeoJSON();
var features_sungaibjm_5 = format_sungaibjm_5.readFeatures(json_sungaibjm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaibjm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaibjm_5.addFeatures(features_sungaibjm_5);
var lyr_sungaibjm_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungaibjm_5, 
                style: style_sungaibjm_5,
                interactive: true,
                title: '<img src="styles/legend/sungaibjm_5.png" /> sungaibjm'
            });
var format_camat_6 = new ol.format.GeoJSON();
var features_camat_6 = format_camat_6.readFeatures(json_camat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camat_6.addFeatures(features_camat_6);
var lyr_camat_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_camat_6, 
                style: style_camat_6,
                interactive: true,
                title: '<img src="styles/legend/camat_6.png" /> camat'
            });
var format_jalanalalak_7 = new ol.format.GeoJSON();
var features_jalanalalak_7 = format_jalanalalak_7.readFeatures(json_jalanalalak_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanalalak_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanalalak_7.addFeatures(features_jalanalalak_7);
var lyr_jalanalalak_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalanalalak_7, 
                style: style_jalanalalak_7,
                interactive: true,
                title: '<img src="styles/legend/jalanalalak_7.png" /> jalanalalak'
            });
var format_alalak_8 = new ol.format.GeoJSON();
var features_alalak_8 = format_alalak_8.readFeatures(json_alalak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alalak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alalak_8.addFeatures(features_alalak_8);
var lyr_alalak_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alalak_8, 
                style: style_alalak_8,
                interactive: true,
                title: '<img src="styles/legend/alalak_8.png" /> alalak'
            });
var format_JALAN_AR_50K_9 = new ol.format.GeoJSON();
var features_JALAN_AR_50K_9 = format_JALAN_AR_50K_9.readFeatures(json_JALAN_AR_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_AR_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_AR_50K_9.addFeatures(features_JALAN_AR_50K_9);
var lyr_JALAN_AR_50K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_AR_50K_9, 
                style: style_JALAN_AR_50K_9,
                interactive: true,
                title: '<img src="styles/legend/JALAN_AR_50K_9.png" /> JALAN_AR_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_banjarmasinkecamatan_1.setVisible(true);lyr_ALALALALALALAK_2.setVisible(true);lyr_PetaAdministrasibjm50krevisi_3.setVisible(true);lyr_desadialalak_4.setVisible(true);lyr_sungaibjm_5.setVisible(true);lyr_camat_6.setVisible(true);lyr_jalanalalak_7.setVisible(true);lyr_alalak_8.setVisible(true);lyr_JALAN_AR_50K_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_banjarmasinkecamatan_1,lyr_ALALALALALALAK_2,lyr_PetaAdministrasibjm50krevisi_3,lyr_desadialalak_4,lyr_sungaibjm_5,lyr_camat_6,lyr_jalanalalak_7,lyr_alalak_8,lyr_JALAN_AR_50K_9];
lyr_banjarmasinkecamatan_1.set('fieldAliases', {'ID': 'ID', 'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'SUMBER': 'SUMBER', 'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'KECNO': 'KECNO', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'WIADKK': 'WIADKK', 'WIADKD': 'WIADKD', 'LUASWH': 'LUASWH', 'WIADPR': 'WIADPR', 'WIADKC': 'WIADKC', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'TIPADM': 'TIPADM', 'KDBBPS': 'KDBBPS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'KDCBPS': 'KDCBPS', 'KDPUMKEC': 'KDPUMKEC', 'KDPUMKAB': 'KDPUMKAB', 'KDPUMDES': 'KDPUMDES', 'KDEBPS': 'KDEBPS', 'KDPBPS': 'KDPBPS', 'KDPUMPROV': 'KDPUMPROV', 'SHAPE_1': 'SHAPE_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', });
lyr_desadialalak_4.set('fieldAliases', {'OBJECT_ID': 'OBJECT_ID', 'KODE_DESA': 'KODE_DESA', 'DESA': 'DESA', 'KODE': 'KODE', 'PROVINSI': 'PROVINSI', 'KAB_KOTA': 'KAB_KOTA', 'KECAMATAN': 'KECAMATAN', 'DESA_KELUR': 'DESA_KELUR', 'JUMLAH_PEN': 'JUMLAH_PEN', 'JUMLAH_KK': 'JUMLAH_KK', 'LUAS_WILAY': 'LUAS_WILAY', 'KEPADATAN': 'KEPADATAN', 'PERPINDAHA': 'PERPINDAHA', 'JUMLAH_MEN': 'JUMLAH_MEN', 'PERUBAHAN': 'PERUBAHAN', 'WAJIB_KTP': 'WAJIB_KTP', 'SILAM': 'SILAM', 'KRISTEN': 'KRISTEN', 'KHATOLIK': 'KHATOLIK', 'HINDU': 'HINDU', 'BUDHA': 'BUDHA', 'KONGHUCU': 'KONGHUCU', 'KEPERCAYAA': 'KEPERCAYAA', 'PRIA': 'PRIA', 'WANITA': 'WANITA', 'BELUM_KAWI': 'BELUM_KAWI', 'KAWIN': 'KAWIN', 'CERAI_HIDU': 'CERAI_HIDU', 'CERAI_MATI': 'CERAI_MATI', 'U0': 'U0', 'U5': 'U5', 'U10': 'U10', 'U15': 'U15', 'U20': 'U20', 'U25': 'U25', 'U30': 'U30', 'U35': 'U35', 'U40': 'U40', 'U45': 'U45', 'U50': 'U50', 'U55': 'U55', 'U60': 'U60', 'U65': 'U65', 'U70': 'U70', 'U75': 'U75', 'TIDAK_BELU': 'TIDAK_BELU', 'BELUM_TAMA': 'BELUM_TAMA', 'TAMAT_SD': 'TAMAT_SD', 'SLTP': 'SLTP', 'SLTA': 'SLTA', 'DIPLOMA_I': 'DIPLOMA_I', 'DIPLOMA_II': 'DIPLOMA_II', 'DIPLOMA_IV': 'DIPLOMA_IV', 'STRATA_II': 'STRATA_II', 'STRATA_III': 'STRATA_III', 'BELUM_TIDA': 'BELUM_TIDA', 'APARATUR_P': 'APARATUR_P', 'TENAGA_PEN': 'TENAGA_PEN', 'WIRASWASTA': 'WIRASWASTA', 'PERTANIAN': 'PERTANIAN', 'NELAYAN': 'NELAYAN', 'AGAMA_DAN': 'AGAMA_DAN', 'PELAJAR_MA': 'PELAJAR_MA', 'TENAGA_KES': 'TENAGA_KES', 'PENSIUNAN': 'PENSIUNAN', 'LAINNYA': 'LAINNYA', 'GENERATED': 'GENERATED', 'KODE_DES_1': 'KODE_DES_1', 'BELUM_': 'BELUM_', 'MENGUR_': 'MENGUR_', 'PELAJAR_': 'PELAJAR_', 'PENSIUNA_1': 'PENSIUNA_1', 'PEGAWAI_': 'PEGAWAI_', 'TENTARA': 'TENTARA', 'KEPOLISIAN': 'KEPOLISIAN', 'PERDAG_': 'PERDAG_', 'PETANI': 'PETANI', 'PETERN_': 'PETERN_', 'NELAYAN_1': 'NELAYAN_1', 'INDUSTR_': 'INDUSTR_', 'KONSTR_': 'KONSTR_', 'TRANSP_': 'TRANSP_', 'KARYAW_': 'KARYAW_', 'KARYAW1': 'KARYAW1', 'KARYAW1_1': 'KARYAW1_1', 'KARYAW1_12': 'KARYAW1_12', 'BURUH': 'BURUH', 'BURUH_': 'BURUH_', 'BURUH1': 'BURUH1', 'BURUH1_1': 'BURUH1_1', 'PEMBANT_': 'PEMBANT_', 'TUKANG': 'TUKANG', 'TUKANG_1': 'TUKANG_1', 'TUKANG_12': 'TUKANG_12', 'TUKANG__13': 'TUKANG__13', 'TUKANG__14': 'TUKANG__14', 'TUKANG__15': 'TUKANG__15', 'TUKANG__16': 'TUKANG__16', 'TUKANG__17': 'TUKANG__17', 'PENATA': 'PENATA', 'PENATA_': 'PENATA_', 'PENATA1_1': 'PENATA1_1', 'MEKANIK': 'MEKANIK', 'SENIMAN_': 'SENIMAN_', 'TABIB': 'TABIB', 'PARAJI_': 'PARAJI_', 'PERANCA_': 'PERANCA_', 'PENTER_': 'PENTER_', 'IMAM_M': 'IMAM_M', 'PENDETA': 'PENDETA', 'PASTOR': 'PASTOR', 'WARTAWAN': 'WARTAWAN', 'USTADZ': 'USTADZ', 'JURU_M': 'JURU_M', 'PROMOT': 'PROMOT', 'ANGGOTA_': 'ANGGOTA_', 'ANGGOTA1': 'ANGGOTA1', 'ANGGOTA1_1': 'ANGGOTA1_1', 'PRESIDEN': 'PRESIDEN', 'WAKIL_PRES': 'WAKIL_PRES', 'ANGGOTA1_2': 'ANGGOTA1_2', 'ANGGOTA1_3': 'ANGGOTA1_3', 'DUTA_B': 'DUTA_B', 'GUBERNUR': 'GUBERNUR', 'WAKIL_GUBE': 'WAKIL_GUBE', 'BUPATI': 'BUPATI', 'WAKIL_BUPA': 'WAKIL_BUPA', 'WALIKOTA': 'WALIKOTA', 'WAKIL_WALI': 'WAKIL_WALI', 'ANGGOTA1_4': 'ANGGOTA1_4', 'ANGGOTA1_5': 'ANGGOTA1_5', 'DOSEN': 'DOSEN', 'GURU': 'GURU', 'PILOT': 'PILOT', 'PENGACARA_': 'PENGACARA_', 'NOTARIS': 'NOTARIS', 'ARSITEK': 'ARSITEK', 'AKUNTA_': 'AKUNTA_', 'KONSUL_': 'KONSUL_', 'DOKTER': 'DOKTER', 'BIDAN': 'BIDAN', 'PERAWAT': 'PERAWAT', 'APOTEK_': 'APOTEK_', 'PSIKIATER': 'PSIKIATER', 'PENYIA_': 'PENYIA_', 'PENYIA1': 'PENYIA1', 'PELAUT': 'PELAUT', 'PENELITI': 'PENELITI', 'SOPIR': 'SOPIR', 'PIALAN': 'PIALAN', 'PARANORMAL': 'PARANORMAL', 'PEDAGA_': 'PEDAGA_', 'PERANG_': 'PERANG_', 'KEPALA_': 'KEPALA_', 'BIARAW_': 'BIARAW_', 'WIRASWAST_': 'WIRASWAST_', 'LAINNYA_12': 'LAINNYA_12', 'LUAS_DESA': 'LUAS_DESA', 'KODE_DES_3': 'KODE_DES_3', 'DESA_KEL_1': 'DESA_KEL_1', 'KODE_12': 'KODE_12', });
lyr_sungaibjm_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_camat_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_jalanalalak_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_alalak_8.set('fieldAliases', {'ID': 'ID', 'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'SUMBER': 'SUMBER', 'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'KECNO': 'KECNO', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'WIADKK': 'WIADKK', 'WIADKD': 'WIADKD', 'LUASWH': 'LUASWH', 'WIADPR': 'WIADPR', 'WIADKC': 'WIADKC', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'TIPADM': 'TIPADM', 'KDBBPS': 'KDBBPS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'KDCBPS': 'KDCBPS', 'KDPUMKEC': 'KDPUMKEC', 'KDPUMKAB': 'KDPUMKAB', 'KDPUMDES': 'KDPUMDES', 'KDEBPS': 'KDEBPS', 'KDPBPS': 'KDPBPS', 'KDPUMPROV': 'KDPUMPROV', 'SHAPE_1': 'SHAPE_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', });
lyr_JALAN_AR_50K_9.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_banjarmasinkecamatan_1.set('fieldImages', {'ID': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'SUMBER': 'TextEdit', 'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'KECNO': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADKD': 'TextEdit', 'LUASWH': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'TIPADM': 'TextEdit', 'KDBBPS': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDPUMKEC': 'TextEdit', 'KDPUMKAB': 'TextEdit', 'KDPUMDES': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPUMPROV': 'TextEdit', 'SHAPE_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_desadialalak_4.set('fieldImages', {'OBJECT_ID': 'TextEdit', 'KODE_DESA': 'TextEdit', 'DESA': 'TextEdit', 'KODE': 'TextEdit', 'PROVINSI': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA_KELUR': 'TextEdit', 'JUMLAH_PEN': 'TextEdit', 'JUMLAH_KK': 'TextEdit', 'LUAS_WILAY': 'TextEdit', 'KEPADATAN': 'TextEdit', 'PERPINDAHA': 'TextEdit', 'JUMLAH_MEN': 'TextEdit', 'PERUBAHAN': 'TextEdit', 'WAJIB_KTP': 'TextEdit', 'SILAM': 'TextEdit', 'KRISTEN': 'TextEdit', 'KHATOLIK': 'TextEdit', 'HINDU': 'TextEdit', 'BUDHA': 'TextEdit', 'KONGHUCU': 'TextEdit', 'KEPERCAYAA': 'TextEdit', 'PRIA': 'TextEdit', 'WANITA': 'TextEdit', 'BELUM_KAWI': 'TextEdit', 'KAWIN': 'TextEdit', 'CERAI_HIDU': 'TextEdit', 'CERAI_MATI': 'TextEdit', 'U0': 'TextEdit', 'U5': 'TextEdit', 'U10': 'TextEdit', 'U15': 'TextEdit', 'U20': 'TextEdit', 'U25': 'TextEdit', 'U30': 'TextEdit', 'U35': 'TextEdit', 'U40': 'TextEdit', 'U45': 'TextEdit', 'U50': 'TextEdit', 'U55': 'TextEdit', 'U60': 'TextEdit', 'U65': 'TextEdit', 'U70': 'TextEdit', 'U75': 'TextEdit', 'TIDAK_BELU': 'TextEdit', 'BELUM_TAMA': 'TextEdit', 'TAMAT_SD': 'TextEdit', 'SLTP': 'TextEdit', 'SLTA': 'TextEdit', 'DIPLOMA_I': 'TextEdit', 'DIPLOMA_II': 'TextEdit', 'DIPLOMA_IV': 'TextEdit', 'STRATA_II': 'TextEdit', 'STRATA_III': 'TextEdit', 'BELUM_TIDA': 'TextEdit', 'APARATUR_P': 'TextEdit', 'TENAGA_PEN': 'TextEdit', 'WIRASWASTA': 'TextEdit', 'PERTANIAN': 'TextEdit', 'NELAYAN': 'TextEdit', 'AGAMA_DAN': 'TextEdit', 'PELAJAR_MA': 'TextEdit', 'TENAGA_KES': 'TextEdit', 'PENSIUNAN': 'TextEdit', 'LAINNYA': 'TextEdit', 'GENERATED': 'TextEdit', 'KODE_DES_1': 'TextEdit', 'BELUM_': 'TextEdit', 'MENGUR_': 'TextEdit', 'PELAJAR_': 'TextEdit', 'PENSIUNA_1': 'TextEdit', 'PEGAWAI_': 'TextEdit', 'TENTARA': 'TextEdit', 'KEPOLISIAN': 'TextEdit', 'PERDAG_': 'TextEdit', 'PETANI': 'TextEdit', 'PETERN_': 'TextEdit', 'NELAYAN_1': 'TextEdit', 'INDUSTR_': 'TextEdit', 'KONSTR_': 'TextEdit', 'TRANSP_': 'TextEdit', 'KARYAW_': 'TextEdit', 'KARYAW1': 'TextEdit', 'KARYAW1_1': 'TextEdit', 'KARYAW1_12': 'TextEdit', 'BURUH': 'TextEdit', 'BURUH_': 'TextEdit', 'BURUH1': 'TextEdit', 'BURUH1_1': 'TextEdit', 'PEMBANT_': 'TextEdit', 'TUKANG': 'TextEdit', 'TUKANG_1': 'TextEdit', 'TUKANG_12': 'TextEdit', 'TUKANG__13': 'TextEdit', 'TUKANG__14': 'TextEdit', 'TUKANG__15': 'TextEdit', 'TUKANG__16': 'TextEdit', 'TUKANG__17': 'TextEdit', 'PENATA': 'TextEdit', 'PENATA_': 'TextEdit', 'PENATA1_1': 'TextEdit', 'MEKANIK': 'TextEdit', 'SENIMAN_': 'TextEdit', 'TABIB': 'TextEdit', 'PARAJI_': 'TextEdit', 'PERANCA_': 'TextEdit', 'PENTER_': 'TextEdit', 'IMAM_M': 'TextEdit', 'PENDETA': 'TextEdit', 'PASTOR': 'TextEdit', 'WARTAWAN': 'TextEdit', 'USTADZ': 'TextEdit', 'JURU_M': 'TextEdit', 'PROMOT': 'TextEdit', 'ANGGOTA_': 'TextEdit', 'ANGGOTA1': 'TextEdit', 'ANGGOTA1_1': 'TextEdit', 'PRESIDEN': 'TextEdit', 'WAKIL_PRES': 'TextEdit', 'ANGGOTA1_2': 'TextEdit', 'ANGGOTA1_3': 'TextEdit', 'DUTA_B': 'TextEdit', 'GUBERNUR': 'TextEdit', 'WAKIL_GUBE': 'TextEdit', 'BUPATI': 'TextEdit', 'WAKIL_BUPA': 'TextEdit', 'WALIKOTA': 'TextEdit', 'WAKIL_WALI': 'TextEdit', 'ANGGOTA1_4': 'TextEdit', 'ANGGOTA1_5': 'TextEdit', 'DOSEN': 'TextEdit', 'GURU': 'TextEdit', 'PILOT': 'TextEdit', 'PENGACARA_': 'TextEdit', 'NOTARIS': 'TextEdit', 'ARSITEK': 'TextEdit', 'AKUNTA_': 'TextEdit', 'KONSUL_': 'TextEdit', 'DOKTER': 'TextEdit', 'BIDAN': 'TextEdit', 'PERAWAT': 'TextEdit', 'APOTEK_': 'TextEdit', 'PSIKIATER': 'TextEdit', 'PENYIA_': 'TextEdit', 'PENYIA1': 'TextEdit', 'PELAUT': 'TextEdit', 'PENELITI': 'TextEdit', 'SOPIR': 'TextEdit', 'PIALAN': 'TextEdit', 'PARANORMAL': 'TextEdit', 'PEDAGA_': 'TextEdit', 'PERANG_': 'TextEdit', 'KEPALA_': 'TextEdit', 'BIARAW_': 'TextEdit', 'WIRASWAST_': 'TextEdit', 'LAINNYA_12': 'TextEdit', 'LUAS_DESA': 'TextEdit', 'KODE_DES_3': 'TextEdit', 'DESA_KEL_1': 'TextEdit', 'KODE_12': 'TextEdit', });
lyr_sungaibjm_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_camat_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_jalanalalak_7.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_alalak_8.set('fieldImages', {'ID': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'SUMBER': 'TextEdit', 'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'KECNO': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADKD': 'TextEdit', 'LUASWH': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'TIPADM': 'TextEdit', 'KDBBPS': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDPUMKEC': 'TextEdit', 'KDPUMKAB': 'TextEdit', 'KDPUMDES': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPUMPROV': 'TextEdit', 'SHAPE_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_JALAN_AR_50K_9.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_banjarmasinkecamatan_1.set('fieldLabels', {'ID': 'no label', 'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KECAMATAN': 'no label', 'SUMBER': 'no label', 'PROVNO': 'no label', 'KABKOTNO': 'no label', 'KECNO': 'no label', 'KABUPATEN': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'WIADKK': 'no label', 'WIADKD': 'no label', 'LUASWH': 'no label', 'WIADPR': 'no label', 'WIADKC': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'TIPADM': 'no label', 'KDBBPS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'KDCBPS': 'no label', 'KDPUMKEC': 'no label', 'KDPUMKAB': 'no label', 'KDPUMDES': 'no label', 'KDEBPS': 'no label', 'KDPBPS': 'no label', 'KDPUMPROV': 'no label', 'SHAPE_1': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'METADATA': 'no label', });
lyr_desadialalak_4.set('fieldLabels', {'OBJECT_ID': 'no label', 'KODE_DESA': 'no label', 'DESA': 'no label', 'KODE': 'no label', 'PROVINSI': 'no label', 'KAB_KOTA': 'no label', 'KECAMATAN': 'no label', 'DESA_KELUR': 'no label', 'JUMLAH_PEN': 'no label', 'JUMLAH_KK': 'no label', 'LUAS_WILAY': 'no label', 'KEPADATAN': 'no label', 'PERPINDAHA': 'no label', 'JUMLAH_MEN': 'no label', 'PERUBAHAN': 'no label', 'WAJIB_KTP': 'no label', 'SILAM': 'no label', 'KRISTEN': 'no label', 'KHATOLIK': 'no label', 'HINDU': 'no label', 'BUDHA': 'no label', 'KONGHUCU': 'no label', 'KEPERCAYAA': 'no label', 'PRIA': 'no label', 'WANITA': 'no label', 'BELUM_KAWI': 'no label', 'KAWIN': 'no label', 'CERAI_HIDU': 'no label', 'CERAI_MATI': 'no label', 'U0': 'no label', 'U5': 'no label', 'U10': 'no label', 'U15': 'no label', 'U20': 'no label', 'U25': 'no label', 'U30': 'no label', 'U35': 'no label', 'U40': 'no label', 'U45': 'no label', 'U50': 'no label', 'U55': 'no label', 'U60': 'no label', 'U65': 'no label', 'U70': 'no label', 'U75': 'no label', 'TIDAK_BELU': 'no label', 'BELUM_TAMA': 'no label', 'TAMAT_SD': 'no label', 'SLTP': 'no label', 'SLTA': 'no label', 'DIPLOMA_I': 'no label', 'DIPLOMA_II': 'no label', 'DIPLOMA_IV': 'no label', 'STRATA_II': 'no label', 'STRATA_III': 'no label', 'BELUM_TIDA': 'no label', 'APARATUR_P': 'no label', 'TENAGA_PEN': 'no label', 'WIRASWASTA': 'no label', 'PERTANIAN': 'no label', 'NELAYAN': 'no label', 'AGAMA_DAN': 'no label', 'PELAJAR_MA': 'no label', 'TENAGA_KES': 'no label', 'PENSIUNAN': 'no label', 'LAINNYA': 'no label', 'GENERATED': 'no label', 'KODE_DES_1': 'no label', 'BELUM_': 'no label', 'MENGUR_': 'no label', 'PELAJAR_': 'no label', 'PENSIUNA_1': 'no label', 'PEGAWAI_': 'no label', 'TENTARA': 'no label', 'KEPOLISIAN': 'no label', 'PERDAG_': 'no label', 'PETANI': 'no label', 'PETERN_': 'no label', 'NELAYAN_1': 'no label', 'INDUSTR_': 'no label', 'KONSTR_': 'no label', 'TRANSP_': 'no label', 'KARYAW_': 'no label', 'KARYAW1': 'no label', 'KARYAW1_1': 'no label', 'KARYAW1_12': 'no label', 'BURUH': 'no label', 'BURUH_': 'no label', 'BURUH1': 'no label', 'BURUH1_1': 'no label', 'PEMBANT_': 'no label', 'TUKANG': 'no label', 'TUKANG_1': 'no label', 'TUKANG_12': 'no label', 'TUKANG__13': 'no label', 'TUKANG__14': 'no label', 'TUKANG__15': 'no label', 'TUKANG__16': 'no label', 'TUKANG__17': 'no label', 'PENATA': 'no label', 'PENATA_': 'no label', 'PENATA1_1': 'no label', 'MEKANIK': 'no label', 'SENIMAN_': 'no label', 'TABIB': 'no label', 'PARAJI_': 'no label', 'PERANCA_': 'no label', 'PENTER_': 'no label', 'IMAM_M': 'no label', 'PENDETA': 'no label', 'PASTOR': 'no label', 'WARTAWAN': 'no label', 'USTADZ': 'no label', 'JURU_M': 'no label', 'PROMOT': 'no label', 'ANGGOTA_': 'no label', 'ANGGOTA1': 'no label', 'ANGGOTA1_1': 'no label', 'PRESIDEN': 'no label', 'WAKIL_PRES': 'no label', 'ANGGOTA1_2': 'no label', 'ANGGOTA1_3': 'no label', 'DUTA_B': 'no label', 'GUBERNUR': 'no label', 'WAKIL_GUBE': 'no label', 'BUPATI': 'no label', 'WAKIL_BUPA': 'no label', 'WALIKOTA': 'no label', 'WAKIL_WALI': 'no label', 'ANGGOTA1_4': 'no label', 'ANGGOTA1_5': 'no label', 'DOSEN': 'no label', 'GURU': 'no label', 'PILOT': 'no label', 'PENGACARA_': 'no label', 'NOTARIS': 'no label', 'ARSITEK': 'no label', 'AKUNTA_': 'no label', 'KONSUL_': 'no label', 'DOKTER': 'no label', 'BIDAN': 'no label', 'PERAWAT': 'no label', 'APOTEK_': 'no label', 'PSIKIATER': 'no label', 'PENYIA_': 'no label', 'PENYIA1': 'no label', 'PELAUT': 'no label', 'PENELITI': 'no label', 'SOPIR': 'no label', 'PIALAN': 'no label', 'PARANORMAL': 'no label', 'PEDAGA_': 'no label', 'PERANG_': 'no label', 'KEPALA_': 'no label', 'BIARAW_': 'no label', 'WIRASWAST_': 'no label', 'LAINNYA_12': 'no label', 'LUAS_DESA': 'no label', 'KODE_DES_3': 'no label', 'DESA_KEL_1': 'no label', 'KODE_12': 'no label', });
lyr_sungaibjm_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_LEN': 'no label', });
lyr_camat_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_jalanalalak_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_alalak_8.set('fieldLabels', {'ID': 'no label', 'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KECAMATAN': 'no label', 'SUMBER': 'no label', 'PROVNO': 'no label', 'KABKOTNO': 'no label', 'KECNO': 'no label', 'KABUPATEN': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'WIADKK': 'no label', 'WIADKD': 'no label', 'LUASWH': 'no label', 'WIADPR': 'no label', 'WIADKC': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'TIPADM': 'no label', 'KDBBPS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'KDCBPS': 'no label', 'KDPUMKEC': 'no label', 'KDPUMKAB': 'no label', 'KDPUMDES': 'no label', 'KDEBPS': 'no label', 'KDPBPS': 'no label', 'KDPUMPROV': 'no label', 'SHAPE_1': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'METADATA': 'no label', });
lyr_JALAN_AR_50K_9.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_AR_50K_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});