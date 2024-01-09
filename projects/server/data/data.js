const role = [{ role: "user" }, { role: "tenant" }];

const category = [{ category: "villa" }, { category: "hotel" }, { category: "apartement" }];

const location = [
  {
    city: "Kota Tangerang Selatan",
    lat: "-6.2888889",
    lng: "106.7180556",
  },
  {
    city: "Kabupaten Banyuwangi",
    lat: "-8.2186111",
    lng: "114.3669444",
  },
  {
    city: "Kabupaten Madiun",
    lat: "-7.627753",
    lng: "111.505483",
  },
  {
    city: "Kabupaten Ponorogo",
    lat: "-7.867827",
    lng: "111.466003",
  },
  {
    city: "Kabupaten Magetan",
    lat: "-7.6493413",
    lng: "111.3381593",
  },
  {
    city: "Kabupaten Pacitan",
    lat: "-8.204614",
    lng: "111.08769",
  },
  {
    city: "Kabupaten Ngawi",
    lat: "-7.38993",
    lng: "111.46193",
  },
  {
    city: "Kabupaten Bangkalan",
    lat: "-7.0306912",
    lng: "112.7450068",
  },
  {
    city: "Kabupaten Kediri",
    lat: "-7.809356",
    lng: "112.032356",
  },
  {
    city: "Kabupaten Bondowoso",
    lat: "-7.917704",
    lng: "113.813483",
  },
  {
    city: "Kabupaten Blitar",
    lat: "-8.1014419",
    lng: "112.162762",
  },
  {
    city: "Kabupaten Trenggalek",
    lat: "-8.05",
    lng: "111.7166667",
  },
  {
    city: "Kabupaten Tulungagung",
    lat: "-8.0666667",
    lng: "111.9",
  },
  {
    city: "Kabupaten Nganjuk",
    lat: "-7.602932",
    lng: "111.901808",
  },
  {
    city: "Kabupaten Situbondo",
    lat: "-7.702534",
    lng: "113.955605",
  },
  {
    city: "Kabupaten Malang",
    lat: "-8.0495643",
    lng: "112.6884549",
  },
  {
    city: "Kabupaten Jember",
    lat: "-8.172357",
    lng: "113.700302",
  },
  {
    city: "Kabupaten Sumenep",
    lat: "-6.9253999",
    lng: "113.9060624",
  },
  {
    city: "Kabupaten Pasuruan",
    lat: "-6.8623098",
    lng: "108.8001936",
  },
  {
    city: "Kabupaten Pamekasan",
    lat: "-7.1666667",
    lng: "113.4666667",
  },
  {
    city: "Kabupaten Probolinggo",
    lat: "-7.753965",
    lng: "113.210675",
  },
  {
    city: "Kabupaten Lumajang",
    lat: "-8.137022",
    lng: "113.226601",
  },
  {
    city: "Kabupaten Bojonegoro",
    lat: "0.882681",
    lng: "124.4669566",
  },
  {
    city: "Kabupaten Tuban",
    lat: "-8.7493146",
    lng: "115.1711298",
  },
  {
    city: "Kabupaten Lamongan",
    lat: "-7.406153",
    lng: "109.3946794",
  },
  {
    city: "Kabupaten Sidoarjo",
    lat: "-7.4530278",
    lng: "112.7173389",
  },
  {
    city: "Kabupaten Sampang",
    lat: "-7.5782556",
    lng: "109.2058436",
  },
  {
    city: "Kabupaten Mojokerto",
    lat: "-7.488075",
    lng: "112.427027",
  },
  {
    city: "Kabupaten Gresik",
    lat: "-7.15665",
    lng: "112.6555",
  },
  {
    city: "Kabupaten Jombang",
    lat: "-7.5468395",
    lng: "112.2264794",
  },
  {
    city: "Kota Mojokerto",
    lat: "-7.4722222",
    lng: "112.4336111",
  },
  {
    city: "Kota Surabaya",
    lat: "-7.289166",
    lng: "112.734398",
  },
  {
    city: "Kota Madiun",
    lat: "-7.629714",
    lng: "111.513702",
  },
  {
    city: "Kota Blitar",
    lat: "-8.1",
    lng: "112.15",
  },
  {
    city: "Kota Malang",
    lat: "-7.981894",
    lng: "112.626503",
  },
  {
    city: "Kota Batu",
    lat: "-7.8671",
    lng: "112.5239",
  },
  {
    city: "Kota Pasuruan",
    lat: "-7.644872",
    lng: "112.903297",
  },
  {
    city: "Kota Kediri",
    lat: "-7.816895",
    lng: "112.011398",
  },
  {
    city: "Kota Probolinggo",
    lat: "-7.756928",
    lng: "113.211502",
  },
  {
    city: "Kabupaten Batanghari",
    lat: "-1.7083922",
    lng: "103.0817903",
  },
  {
    city: "Kabupaten Bungo",
    lat: "-1.6401338",
    lng: "101.8891721",
  },
  {
    city: "Kabupaten Kerinci",
    lat: "-1.8720467",
    lng: "101.4339148",
  },
  {
    city: "Kabupaten Merangin",
    lat: "-2.1752789",
    lng: "101.9804613",
  },
  {
    city: "Kabupaten Muaro Jambi",
    lat: "-1.596672",
    lng: "103.615799",
  },
  {
    city: "Kabupaten Sarolangun",
    lat: "-2.2654937",
    lng: "102.6905326",
  },
  {
    city: "Kabupaten Tanjung Jabung Barat",
    lat: "-1.2332122",
    lng: "103.7984428",
  },
  {
    city: "Kabupaten Tanjung Jabung Timur",
    lat: "-1.3291599",
    lng: "103.89973",
  },
  {
    city: "Kabupaten Tebo",
    lat: "-1.2592999",
    lng: "102.3463875",
  },
  {
    city: "Kota Jambi",
    lat: "-1.596672",
    lng: "103.615799",
  },
  {
    city: "Kota Sungai Penuh",
    lat: "-2.06314",
    lng: "101.387199",
  },
  {
    city: "Kabupaten Simeulue",
    lat: "2.583333",
    lng: "96.083333",
  },
  {
    city: "Kabupaten Aceh Singkil",
    lat: "2.3589459",
    lng: "97.87216",
  },
  {
    city: "Kabupaten Aceh Selatan",
    lat: "3.3115056",
    lng: "97.3516558",
  },
  {
    city: "Kabupaten Aceh Tenggara",
    lat: "3.3088666",
    lng: "97.6982272",
  },
  {
    city: "Kabupaten Aceh Timur",
    lat: "5.255443",
    lng: "95.9885456",
  },
  {
    city: "Kabupaten Aceh Tengah",
    lat: "4.4482641",
    lng: "96.8350999",
  },
  {
    city: "Kabupaten Aceh Barat",
    lat: "4.4542745",
    lng: "96.1526985",
  },
  {
    city: "Kabupaten Aceh Besar",
    lat: "5.4529168",
    lng: "95.4777811",
  },
  {
    city: "Kabupaten Pidie",
    lat: "5.0742659",
    lng: "95.940971",
  },
  {
    city: "Kabupaten Bireuen",
    lat: "5.18254",
    lng: "96.89005",
  },
  {
    city: "Kabupaten Aceh Utara",
    lat: "4.9786331",
    lng: "97.2221421",
  },
  {
    city: "Kabupaten Aceh Barat Daya",
    lat: "3.0512643",
    lng: "97.3368031",
  },
  {
    city: "Kabupaten Gayo Lues",
    lat: "3.955165",
    lng: "97.3516558",
  },
  {
    city: "Kabupaten Aceh Tamiang",
    lat: "4.2328871",
    lng: "98.0028892",
  },
  {
    city: "Kabupaten Nagan Raya",
    lat: "4.1248406",
    lng: "96.4929797",
  },
  {
    city: "Kabupaten Aceh Jaya",
    lat: "4.7873684",
    lng: "95.6457951",
  },
  {
    city: "Kabupaten Bener Meriah",
    lat: "4.7748348",
    lng: "97.0068393",
  },
  {
    city: "Kabupaten Pidie Jaya",
    lat: "5.1548063",
    lng: "96.195132",
  },
  {
    city: "Kota Banda Aceh",
    lat: "5.55",
    lng: "95.3166667",
  },
  {
    city: "Kota Sabang",
    lat: "5.8946929",
    lng: "95.3192982",
  },
  {
    city: "Kota Langsa",
    lat: "4.48",
    lng: "97.9633333",
  },
  {
    city: "Kota Lhokseumawe",
    lat: "5.1880556",
    lng: "97.1402778",
  },
  {
    city: "Kota Subulussalam",
    lat: "2.6449927",
    lng: "98.0165205",
  },
  {
    city: "Kabupaten Nias",
    lat: "-8.1712591",
    lng: "113.7111274",
  },
  {
    city: "Kabupaten Mandailing Natal",
    lat: "0.7432372",
    lng: "99.3673084",
  },
  {
    city: "Kabupaten Tapanuli Selatan",
    lat: "1.5774933",
    lng: "99.2785583",
  },
  {
    city: "Kabupaten Tapanuli Tengah",
    lat: "1.8493299",
    lng: "98.704075",
  },
  {
    city: "Kabupaten Tapanuli Utara",
    lat: "2.0405246",
    lng: "99.1013498",
  },
  {
    city: "Kabupaten Toba Samosir",
    lat: "2.3502398",
    lng: "99.2785583",
  },
  {
    city: "Kabupaten Labuhanbatu",
    lat: "2.3439863",
    lng: "100.1703257",
  },
  {
    city: "Kabupaten Asahan",
    lat: "2.8174722",
    lng: "99.634135",
  },
  {
    city: "Kabupaten Simalungun",
    lat: "2.9781612",
    lng: "99.2785583",
  },
  {
    city: "Kabupaten Dairi",
    lat: "2.8675801",
    lng: "98.265058",
  },
  {
    city: "Kabupaten Karo",
    lat: "3.1052909",
    lng: "98.265058",
  },
  {
    city: "Kabupaten Deli Serdang",
    lat: "3.4201802",
    lng: "98.704075",
  },
  {
    city: "Kabupaten Langkat",
    lat: "3.8653916",
    lng: "98.3088441",
  },
  {
    city: "Kabupaten Nias Selatan",
    lat: "0.7086091",
    lng: "97.8286368",
  },
  {
    city: "Kabupaten Humbang Hasundutan",
    lat: "2.1988508",
    lng: "98.5721016",
  },
  {
    city: "Kabupaten Pakpak Bharat",
    lat: "2.545786",
    lng: "98.299838",
  },
  {
    city: "Kabupaten Samosir",
    lat: "2.5833333",
    lng: "98.8166667",
  },
  {
    city: "Kabupaten Serdang Bedagai",
    lat: "3.3371694",
    lng: "99.0571089",
  },
  {
    city: "Kabupaten Batu Bara",
    lat: "3.1740979",
    lng: "99.5006143",
  },
  {
    city: "Kabupaten Padang Lawas Utara",
    lat: "1.5758644",
    lng: "99.634135",
  },
  {
    city: "Kabupaten Padang Lawas",
    lat: "1.1186977",
    lng: "99.8124935",
  },
  {
    city: "Kota Sibolga",
    lat: "1.7403745",
    lng: "98.7827988",
  },
  {
    city: "Kota Tanjung Balai",
    lat: "2.965122",
    lng: "99.800331",
  },
  {
    city: "Kota Pematang Siantar",
    lat: "2.96",
    lng: "99.06",
  },
  {
    city: "Kota Tebing Tinggi",
    lat: "3.3856205",
    lng: "99.2009815",
  },
  {
    city: "Kota Medan",
    lat: "3.585242",
    lng: "98.6755979",
  },
  {
    city: "Kota Binjai",
    lat: "3.594462",
    lng: "98.482246",
  },
  {
    city: "Kota Padangsidimpuan",
    lat: "1.380424",
    lng: "99.273972",
  },
  {
    city: "Kabupaten Kepulauan Mentawai",
    lat: "-1.426001",
    lng: "98.9245343",
  },
  {
    city: "Kabupaten Pesisir Selatan",
    lat: "-1.7223147",
    lng: "100.8903099",
  },
  {
    city: "Kabupaten Solok",
    lat: "-0.803027",
    lng: "100.644402",
  },
  {
    city: "Kabupaten Sijunjung",
    lat: "-0.6881586",
    lng: "100.997658",
  },
  {
    city: "Kabupaten Tanah Datar",
    lat: "-0.4797043",
    lng: "100.5746224",
  },
  {
    city: "Kabupaten Padang Pariaman",
    lat: "-0.5546757",
    lng: "100.2151578",
  },
  {
    city: "Kabupaten Agam",
    lat: "-0.2209392",
    lng: "100.1703257",
  },
  {
    city: "Kabupaten Lima Puluh Kota",
    lat: "3.168216",
    lng: "99.4187929",
  },
  {
    city: "Kabupaten Pasaman",
    lat: "0.1288752",
    lng: "99.7901781",
  },
  {
    city: "Kabupaten Solok Selatan",
    lat: "-1.4157329",
    lng: "101.2523792",
  },
  {
    city: "Kabupaten Dharmas Raya",
    lat: "-1.1120568",
    lng: "101.6157773",
  },
  {
    city: "Kabupaten Pasaman Barat",
    lat: "0.2213005",
    lng: "99.634135",
  },
  {
    city: "Kota Padang",
    lat: "-0.95",
    lng: "100.3530556",
  },
  {
    city: "Kota Solok",
    lat: "-0.803027",
    lng: "100.644402",
  },
  {
    city: "Kota Sawah Lunto",
    lat: "-0.6810286",
    lng: "100.7763604",
  },
  {
    city: "Kota Padang Panjang",
    lat: "-0.470679",
    lng: "100.4059456",
  },
  {
    city: "Kota Bukittinggi",
    lat: "-0.3055556",
    lng: "100.3691667",
  },
  {
    city: "Kota Payakumbuh",
    lat: "-0.22887",
    lng: "100.632301",
  },
  {
    city: "Kota Pariaman",
    lat: "-0.6264389",
    lng: "100.1179574",
  },
  {
    city: "Kabupaten Kuantan Singingi",
    lat: "-0.4411596",
    lng: "101.5248055",
  },
  {
    city: "Kabupaten Indragiri Hulu",
    lat: "-0.7361181",
    lng: "102.2547919",
  },
  {
    city: "Kabupaten Indragiri Hilir",
    lat: "-0.1456733",
    lng: "102.989615",
  },
  {
    city: "Kabupaten Pelalawan",
    lat: "0.441415",
    lng: "102.088699",
  },
  {
    city: "Kabupaten S I A K",
    lat: "-0.789275",
    lng: "113.921327",
  },
  {
    city: "Kabupaten Kampar",
    lat: "0.146671",
    lng: "101.1617356",
  },
  {
    city: "Kabupaten Rokan Hulu",
    lat: "1.0410934",
    lng: "100.439656",
  },
  {
    city: "Kabupaten Bengkalis",
    lat: "1.4897222",
    lng: "102.0797222",
  },
  {
    city: "Kabupaten Rokan Hilir",
    lat: "1.6463978",
    lng: "100.8000051",
  },
  {
    city: "Kota Pekanbaru",
    lat: "0.5333333",
    lng: "101.45",
  },
  {
    city: "Kota Dumai",
    lat: "1.665742",
    lng: "101.447601",
  },
  {
    city: "Kabupaten Kerinci",
    lat: "-1.697",
    lng: "101.264",
  },
  {
    city: "Kabupaten Merangin",
    lat: "-2.1752789",
    lng: "101.9804613",
  },
  {
    city: "Kabupaten Sarolangun",
    lat: "-2.2654937",
    lng: "102.6905326",
  },
  {
    city: "Kabupaten Batang Hari",
    lat: "-1.7083922",
    lng: "103.0817903",
  },
  {
    city: "Kabupaten Muaro Jambi",
    lat: "-1.596672",
    lng: "103.615799",
  },
  {
    city: "Kabupaten Tanjung Jabung Timur",
    lat: "-1.3291599",
    lng: "103.89973",
  },
  {
    city: "Kabupaten Tanjung Jabung Barat",
    lat: "-1.2332122",
    lng: "103.7984428",
  },
  {
    city: "Kabupaten Tebo",
    lat: "-1.2592999",
    lng: "102.3463875",
  },
  {
    city: "Kabupaten Bungo",
    lat: "-1.6401338",
    lng: "101.8891721",
  },
  {
    city: "Kota Jambi",
    lat: "-1.596672",
    lng: "103.615799",
  },
  {
    city: "Kabupaten Ogan Komering Ulu",
    lat: "-4.0283486",
    lng: "104.0072348",
  },
  {
    city: "Kabupaten Ogan Komering Ilir",
    lat: "-3.4559744",
    lng: "105.2194808",
  },
  {
    city: "Kabupaten Muara Enim",
    lat: "-3.651581",
    lng: "103.770798",
  },
  {
    city: "Kabupaten Lahat",
    lat: "-3.7863889",
    lng: "103.5427778",
  },
  {
    city: "Kabupaten Musi Rawas",
    lat: "-2.8625305",
    lng: "102.989615",
  },
  {
    city: "Kabupaten Musi Banyuasin",
    lat: "-2.5442029",
    lng: "103.7289167",
  },
  {
    city: "Kabupaten Banyu Asin",
    lat: "-2.6095639",
    lng: "104.7520939",
  },
  {
    city: "Kabupaten Ogan Komering Ulu Selatan",
    lat: "-4.6681951",
    lng: "104.0072348",
  },
  {
    city: "Kabupaten Ogan Komering Ulu Timur",
    lat: "-3.8567934",
    lng: "104.7520939",
  },
  {
    city: "Kabupaten Ogan Ilir",
    lat: "-3.426544",
    lng: "104.6121475",
  },
  {
    city: "Kabupaten Empat Lawang",
    lat: "-3.7286029",
    lng: "102.8975098",
  },
  {
    city: "Kota Palembang",
    lat: "-2.9911083",
    lng: "104.7567333",
  },
  {
    city: "Kota Prabumulih",
    lat: "-3.440956",
    lng: "104.235397",
  },
  {
    city: "Kota Pagar Alam",
    lat: "-4.03767",
    lng: "103.265297",
  },
  {
    city: "Kota Lubuklinggau",
    lat: "-3.2966667",
    lng: "102.8616667",
  },
  {
    city: "Kabupaten Bengkulu Selatan",
    lat: "-4.3248409",
    lng: "103.035694",
  },
  {
    city: "Kabupaten Rejang Lebong",
    lat: "-3.4548154",
    lng: "102.6675575",
  },
  {
    city: "Kabupaten Bengkulu Utara",
    lat: "-3.4219555",
    lng: "102.1632718",
  },
  {
    city: "Kabupaten Kaur",
    lat: "-4.6792278",
    lng: "103.4511768",
  },
  {
    city: "Kabupaten Seluma",
    lat: "-4.0622929",
    lng: "102.5642261",
  },
  {
    city: "Kabupaten Mukomuko",
    lat: "-2.5760003",
    lng: "101.1169805",
  },
  {
    city: "Kabupaten Lebong",
    lat: "-2.992617",
    lng: "104.382202",
  },
  {
    city: "Kabupaten Kepahiang",
    lat: "-3.651431",
    lng: "102.578201",
  },
  {
    city: "Kota Bengkulu",
    lat: "-3.7955556",
    lng: "102.2591667",
  },
  {
    city: "Kabupaten Lampung Barat",
    lat: "-5.1490396",
    lng: "104.1930918",
  },
  {
    city: "Kabupaten Tanggamus",
    lat: "-5.3027489",
    lng: "104.5655273",
  },
  {
    city: "Kabupaten Lampung Selatan",
    lat: "-5.5622614",
    lng: "105.5474373",
  },
  {
    city: "Kabupaten Lampung Timur",
    lat: "-5.1134995",
    lng: "105.6881788",
  },
  {
    city: "Kabupaten Lampung Tengah",
    lat: "-4.8008086",
    lng: "105.3131185",
  },
  {
    city: "Kabupaten Lampung Utara",
    lat: "-4.8133905",
    lng: "104.7520939",
  },
  {
    city: "Kabupaten Way Kanan",
    lat: "-4.4963689",
    lng: "104.5655273",
  },
  {
    city: "Kabupaten Tulangbawang",
    lat: "-4.3176576",
    lng: "105.5005483",
  },
  {
    city: "Kabupaten Pesawaran",
    lat: "-5.493245",
    lng: "105.0791228",
  },
  {
    city: "Kota Bandar Lampung",
    lat: "-5.45",
    lng: "105.2666667",
  },
  {
    city: "Kota Metro",
    lat: "-5.1166667",
    lng: "105.3",
  },
  {
    city: "Kabupaten Bangka",
    lat: "-2.2884782",
    lng: "106.0640179",
  },
  {
    city: "Kabupaten Belitung",
    lat: "-2.8708938",
    lng: "107.9531836",
  },
  {
    city: "Kabupaten Bangka Barat",
    lat: "-2.2884782",
    lng: "106.0640179",
  },
  {
    city: "Kabupaten Bangka Tengah",
    lat: "-2.2884782",
    lng: "106.0640179",
  },
  {
    city: "Kabupaten Bangka Selatan",
    lat: "-2.2884782",
    lng: "106.0640179",
  },
  {
    city: "Kabupaten Belitung Timur",
    lat: "-2.8708938",
    lng: "107.9531836",
  },
  {
    city: "Kota Pangkal Pinang",
    lat: "-2.129323",
    lng: "106.109596",
  },
  {
    city: "Kabupaten Karimun",
    lat: "1.05",
    lng: "103.3666667",
  },
  {
    city: "Kabupaten Bintan",
    lat: "1.0619173",
    lng: "104.5189214",
  },
  {
    city: "Kabupaten Natuna",
    lat: "3.9329945",
    lng: "108.1812242",
  },
  {
    city: "Kabupaten Lingga",
    lat: "-0.1627686",
    lng: "104.6354631",
  },
  {
    city: "Kota Batam",
    lat: "1.0456264",
    lng: "104.0304535",
  },
  {
    city: "Kota Tanjung Pinang",
    lat: "0.9179205",
    lng: "104.446464",
  },
  {
    city: "Kabupaten Kepulauan Seribu",
    lat: "-5.7985266",
    lng: "106.5071982",
  },
  {
    city: "Kota Jakarta Selatan",
    lat: "-6.332973",
    lng: "106.807915",
  },
  {
    city: "Kota Jakarta Timur",
    lat: "-6.211544",
    lng: "106.845172",
  },
  {
    city: "Kota Jakarta Pusat",
    lat: "-6.211544",
    lng: "106.845172",
  },
  {
    city: "Kota Jakarta Barat",
    lat: "-6.211544",
    lng: "106.845172",
  },
  {
    city: "Kota Jakarta Utara",
    lat: "-6.211544",
    lng: "106.845172",
  },
  {
    city: "Kabupaten Bogor",
    lat: "-6.6",
    lng: "106.8",
  },
  {
    city: "Kabupaten Sukabumi",
    lat: "-6.92405",
    lng: "106.922203",
  },
  {
    city: "Kabupaten Cianjur",
    lat: "-6.8172531",
    lng: "107.1307289",
  },
  {
    city: "Kabupaten Bandung",
    lat: "-6.9147444",
    lng: "107.6098111",
  },
  {
    city: "Kabupaten Garut",
    lat: "-7.227906",
    lng: "107.908699",
  },
  {
    city: "Kabupaten Tasikmalaya",
    lat: "-7.327954",
    lng: "108.214104",
  },
  {
    city: "Kabupaten Ciamis",
    lat: "-7.3333333",
    lng: "108.35",
  },
  {
    city: "Kabupaten Kuningan",
    lat: "-6.9833333",
    lng: "108.4833333",
  },
  {
    city: "Kabupaten Cirebon",
    lat: "-6.715534",
    lng: "108.564003",
  },
  {
    city: "Kabupaten Majalengka",
    lat: "-6.8531026",
    lng: "108.2258897",
  },
  {
    city: "Kabupaten Sumedang",
    lat: "0.6095949",
    lng: "110.0330554",
  },
  {
    city: "Kabupaten Indramayu",
    lat: "-6.336315",
    lng: "108.325104",
  },
  {
    city: "Kabupaten Subang",
    lat: "-6.569361",
    lng: "107.752403",
  },
  {
    city: "Kabupaten Purwakarta",
    lat: "-6.5386806",
    lng: "107.4499404",
  },
  {
    city: "Kabupaten Karawang",
    lat: "-6.3227303",
    lng: "107.3375791",
  },
  {
    city: "Kabupaten Bekasi",
    lat: "-6.2333333",
    lng: "107",
  },
  {
    city: "Kabupaten Bandung Barat",
    lat: "-6.8937121",
    lng: "107.4321959",
  },
  {
    city: "Kota Bogor",
    lat: "-6.6",
    lng: "106.8",
  },
  {
    city: "Kota Sukabumi",
    lat: "-6.92405",
    lng: "106.922203",
  },
  {
    city: "Kota Bandung",
    lat: "-6.9147444",
    lng: "107.6098111",
  },
  {
    city: "Kota Cirebon",
    lat: "-6.715534",
    lng: "108.564003",
  },
  {
    city: "Kota Bekasi",
    lat: "-6.2333333",
    lng: "107",
  },
  {
    city: "Kota Depok",
    lat: "-6.39",
    lng: "106.83",
  },
  {
    city: "Kota Cimahi",
    lat: "-6.880239",
    lng: "107.5355",
  },
  {
    city: "Kota Tasikmalaya",
    lat: "-7.327954",
    lng: "108.214104",
  },
  {
    city: "Kota Banjar",
    lat: "-7.3666667",
    lng: "108.5333333",
  },
  {
    city: "Kabupaten Cilac",
    lat: "-7.733333",
    lng: "109",
  },
  {
    city: "Kabupaten Banyumas",
    lat: "-7.4832133",
    lng: "109.140438",
  },
  {
    city: "Kabupaten Purbalingga",
    lat: "-7.390747",
    lng: "109.3638",
  },
  {
    city: "Kabupaten Banjarnegara",
    lat: "-7.402706",
    lng: "109.681396",
  },
  {
    city: "Kabupaten Kebumen",
    lat: "-7.678682",
    lng: "109.656502",
  },
  {
    city: "Kabupaten Purworejo",
    lat: "-7.709731",
    lng: "110.008003",
  },
  {
    city: "Kabupaten Wonosobo",
    lat: "-7.362109",
    lng: "109.899399",
  },
  {
    city: "Kabupaten Magelang",
    lat: "-7.481253",
    lng: "110.213799",
  },
  {
    city: "Kabupaten Boyolali",
    lat: "-7.523819",
    lng: "110.595901",
  },
  {
    city: "Kabupaten Klaten",
    lat: "-7.711687",
    lng: "110.595497",
  },
  {
    city: "Kabupaten Sukoharjo",
    lat: "-7.6808818",
    lng: "110.8195292",
  },
  {
    city: "Kabupaten Wonogiri",
    lat: "-7.817782",
    lng: "110.920601",
  },
  {
    city: "Kabupaten Karanganyar",
    lat: "-7.5961111",
    lng: "110.9508333",
  },
  {
    city: "Kabupaten Sragen",
    lat: "-7.430229",
    lng: "111.021301",
  },
  {
    city: "Kabupaten Grobogan",
    lat: "-7.0217194",
    lng: "110.9625854",
  },
  {
    city: "Kabupaten Blora",
    lat: "-6.95",
    lng: "111.4166667",
  },
  {
    city: "Kabupaten Rembang",
    lat: "-6.71124",
    lng: "111.345299",
  },
  {
    city: "Kabupaten Pati",
    lat: "-6.751338",
    lng: "111.038002",
  },
  {
    city: "Kabupaten Kudus",
    lat: "-6.804087",
    lng: "110.838203",
  },
  {
    city: "Kabupaten Jepara",
    lat: "-6.5596059",
    lng: "110.6717",
  },
  {
    city: "Kabupaten Demak",
    lat: "-6.888115",
    lng: "110.639297",
  },
  {
    city: "Kabupaten Semarang",
    lat: "-6.9666667",
    lng: "110.4166667",
  },
  {
    city: "Kabupaten Temanggung",
    lat: "-7.316669",
    lng: "110.174797",
  },
  {
    city: "Kabupaten Kendal",
    lat: "-6.919686",
    lng: "110.205597",
  },
  {
    city: "Kabupaten Batang",
    lat: "-6.8941111",
    lng: "109.7234519",
  },
  {
    city: "Kabupaten Pekalongan",
    lat: "-6.882887",
    lng: "109.669998",
  },
  {
    city: "Kabupaten Pemalang",
    lat: "-6.884234",
    lng: "109.377998",
  },
  {
    city: "Kabupaten Tegal",
    lat: "-6.8666667",
    lng: "109.1333333",
  },
  {
    city: "Kabupaten Brebes",
    lat: "-6.8833333",
    lng: "109.05",
  },
  {
    city: "Kota Magelang",
    lat: "-7.481253",
    lng: "110.213799",
  },
  {
    city: "Kota Surakarta",
    lat: "-7.5666667",
    lng: "110.8166667",
  },
  {
    city: "Kota Salatiga",
    lat: "-7.302328",
    lng: "110.4729",
  },
  {
    city: "Kota Semarang",
    lat: "-6.9666667",
    lng: "110.4166667",
  },
  {
    city: "Kota Pekalongan",
    lat: "-6.882887",
    lng: "109.669998",
  },
  {
    city: "Kota Tegal",
    lat: "-6.8666667",
    lng: "109.1333333",
  },
  {
    city: "Kabupaten Kulon Progo",
    lat: "-7.8266798",
    lng: "110.1640846",
  },
  {
    city: "Kabupaten Bantul",
    lat: "-7.8846111",
    lng: "110.3341111",
  },
  {
    city: "Kabupaten Gunung Kidul",
    lat: "-8.0305091",
    lng: "110.6168921",
  },
  {
    city: "Kota Yogyakarta",
    lat: "-7.797224",
    lng: "110.368797",
  },
  {
    city: "Kabupaten Pandeglang",
    lat: "-6.314835",
    lng: "106.103897",
  },
  {
    city: "Kabupaten Lebak",
    lat: "-6.5643956",
    lng: "106.2522143",
  },
  {
    city: "Kabupaten Tangerang",
    lat: "-6.1783056",
    lng: "106.6318889",
  },
  {
    city: "Kabupaten Serang",
    lat: "-6.12009",
    lng: "106.150299",
  },
  {
    city: "Kota Tangerang",
    lat: "-6.1783056",
    lng: "106.6318889",
  },
  {
    city: "Kota Cilegon",
    lat: "-6.0169825",
    lng: "106.040506",
  },
  {
    city: "Kota Serang",
    lat: "-6.12009",
    lng: "106.150299",
  },
  {
    city: "Kabupaten Jembrana",
    lat: "-8.361852",
    lng: "114.6418",
  },
  {
    city: "Kabupaten Tabanan",
    lat: "-8.544516",
    lng: "115.119797",
  },
  {
    city: "Kabupaten Badung",
    lat: "-8.5819296",
    lng: "115.1770586",
  },
  {
    city: "Kabupaten Gianyar",
    lat: "-8.544185",
    lng: "115.3255",
  },
  {
    city: "Kabupaten Klungkung",
    lat: "-8.5389222",
    lng: "115.4045111",
  },
  {
    city: "Kabupaten Bangli",
    lat: "-8.454303",
    lng: "115.354897",
  },
  {
    city: "Kabupaten Karang Asem",
    lat: "-6.3996057",
    lng: "108.0503042",
  },
  {
    city: "Kabupaten Buleleng",
    lat: "-8.113831",
    lng: "115.126999",
  },
  {
    city: "Kota Denpasar",
    lat: "-8.65629",
    lng: "115.222099",
  },
  {
    city: "Kabupaten Lombok Barat",
    lat: "-8.6464599",
    lng: "116.1123078",
  },
  {
    city: "Kabupaten Lombok Tengah",
    lat: "-8.694623",
    lng: "116.2777073",
  },
  {
    city: "Kabupaten Lombok Timur",
    lat: "-8.5134471",
    lng: "116.5609857",
  },
  {
    city: "Kabupaten Sumbawa",
    lat: "-8.6529334",
    lng: "117.3616476",
  },
  {
    city: "Kabupaten Dompu",
    lat: "-8.4966318",
    lng: "118.4747173",
  },
  {
    city: "Kabupaten Bima",
    lat: "-8.460566",
    lng: "118.727402",
  },
  {
    city: "Kabupaten Sumbawa Barat",
    lat: "-8.9292907",
    lng: "116.8910342",
  },
  {
    city: "Kota Mataram",
    lat: "-8.5833333",
    lng: "116.1166667",
  },
  {
    city: "Kota Bima",
    lat: "-8.460566",
    lng: "118.727402",
  },
  {
    city: "Kabupaten Sumba Barat",
    lat: "-9.6548326",
    lng: "119.3947135",
  },
  {
    city: "Kabupaten Sumba Timur",
    lat: "-9.9802103",
    lng: "120.3435506",
  },
  {
    city: "Kabupaten Kupang",
    lat: "-10.1833333",
    lng: "123.5833333",
  },
  {
    city: "Kabupaten Timor Tengah Selatan",
    lat: "-9.7762816",
    lng: "124.4198243",
  },
  {
    city: "Kabupaten Timor Tengah Utara",
    lat: "-9.4522647",
    lng: "124.597132",
  },
  {
    city: "Kabupaten Belu",
    lat: "-9.4125796",
    lng: "124.9506625",
  },
  {
    city: "Kabupaten Alor",
    lat: "-8.2754027",
    lng: "124.7298765",
  },
  {
    city: "Kabupaten Lembata",
    lat: "-8.4719075",
    lng: "123.4831906",
  },
  {
    city: "Kabupaten Flores Timur",
    lat: "-8.3130942",
    lng: "122.9663018",
  },
  {
    city: "Kabupaten Sikka",
    lat: "-8.6766175",
    lng: "122.1291843",
  },
  {
    city: "Kabupaten Ende",
    lat: "-8.854053",
    lng: "121.654198",
  },
  {
    city: "Kabupaten Ngada",
    lat: "-8.7430424",
    lng: "120.9876321",
  },
  {
    city: "Kabupaten Manggarai",
    lat: "-8.6796987",
    lng: "120.3896651",
  },
  {
    city: "Kabupaten Rote Ndao",
    lat: "-10.7386421",
    lng: "123.1239049",
  },
  {
    city: "Kabupaten Manggarai Barat",
    lat: "-8.6688149",
    lng: "120.0665236",
  },
  {
    city: "Kabupaten Sumba Tengah",
    lat: "-9.4879226",
    lng: "119.6962677",
  },
  {
    city: "Kabupaten Sumba Barat Daya",
    lat: "-9.539139",
    lng: "119.1390642",
  },
  {
    city: "Kabupaten Nagekeo",
    lat: "-8.6753545",
    lng: "121.3084088",
  },
  {
    city: "Kabupaten Manggarai Timur",
    lat: "-8.6206712",
    lng: "120.6199895",
  },
  {
    city: "Kota Kupang",
    lat: "-10.1833333",
    lng: "123.5833333",
  },
  {
    city: "Kabupaten Sambas",
    lat: "1.361328",
    lng: "109.309998",
  },
  {
    city: "Kabupaten Bengkayang",
    lat: "0.8209729",
    lng: "109.477699",
  },
  {
    city: "Kabupaten Landak",
    lat: "0.4237287",
    lng: "109.7591675",
  },
  {
    city: "Kabupaten Pontianak",
    lat: "-0.022523",
    lng: "109.330307",
  },
  {
    city: "Kabupaten Sanggau",
    lat: "0.119275",
    lng: "110.597298",
  },
  {
    city: "Kabupaten Ketapang",
    lat: "-1.859098",
    lng: "109.971901",
  },
  {
    city: "Kabupaten Sintang",
    lat: "0.080238",
    lng: "111.495499",
  },
  {
    city: "Kabupaten Kapuas Hulu",
    lat: "-0.7931004",
    lng: "113.9060624",
  },
  {
    city: "Kabupaten Sekadau",
    lat: "0.015637",
    lng: "110.888603",
  },
  {
    city: "Kabupaten Melawi",
    lat: "-0.7000681",
    lng: "111.6660725",
  },
  {
    city: "Kabupaten Kayong Utara",
    lat: "-0.9225877",
    lng: "110.0449662",
  },
  {
    city: "Kabupaten Kubu Raya",
    lat: "-0.3533938",
    lng: "109.4735066",
  },
  {
    city: "Kota Pontianak",
    lat: "-0.022523",
    lng: "109.330307",
  },
  {
    city: "Kota Singkawang",
    lat: "0.908795",
    lng: "108.984596",
  },
  {
    city: "Kabupaten Kotawaringin Barat",
    lat: "-6.1961131",
    lng: "106.8630174",
  },
  {
    city: "Kabupaten Kotawaringin Timur",
    lat: "-6.1952992",
    lng: "106.8630737",
  },
  {
    city: "Kabupaten Kapuas",
    lat: "-0.0459972",
    lng: "110.1313251",
  },
  {
    city: "Kabupaten Barito Selatan",
    lat: "-1.875943",
    lng: "114.8092691",
  },
  {
    city: "Kabupaten Barito Utara",
    lat: "-0.9587136",
    lng: "115.094045",
  },
  {
    city: "Kabupaten Sukamara",
    lat: "-2.6267517",
    lng: "111.2368084",
  },
  {
    city: "Kabupaten Lamandau",
    lat: "-1.9269166",
    lng: "111.1891151",
  },
  {
    city: "Kabupaten Seruyan",
    lat: "-3.0123467",
    lng: "112.4291464",
  },
  {
    city: "Kabupaten Katingan",
    lat: "-0.9758379",
    lng: "112.8105512",
  },
  {
    city: "Kabupaten Pulang Pisau",
    lat: "-2.6849607",
    lng: "113.9536466",
  },
  {
    city: "Kabupaten Gunung Mas",
    lat: "-6.7052778",
    lng: "106.9913889",
  },
  {
    city: "Kabupaten Barito Timur",
    lat: "-2.0123999",
    lng: "115.188916",
  },
  {
    city: "Kabupaten Murung Raya",
    lat: "-0.1362171",
    lng: "114.3341432",
  },
  {
    city: "Kota Palangka Raya",
    lat: "-2.21",
    lng: "113.92",
  },
  {
    city: "Kabupaten Tanah Laut",
    lat: "-3.7694047",
    lng: "114.8092691",
  },
  {
    city: "Kabupaten Kota Baru",
    lat: "-6.332973",
    lng: "106.807915",
  },
  {
    city: "Kabupaten Banjar",
    lat: "-7.3666667",
    lng: "108.5333333",
  },
  {
    city: "Kabupaten Barito Kuala",
    lat: "-3.0714738",
    lng: "114.6667939",
  },
  {
    city: "Kabupaten Tapin",
    lat: "-2.9160746",
    lng: "115.0465991",
  },
  {
    city: "Kabupaten Hulu Sungai Selatan",
    lat: "-2.7662681",
    lng: "115.2363408",
  },
  {
    city: "Kabupaten Hulu Sungai Tengah",
    lat: "-2.6153162",
    lng: "115.5207358",
  },
  {
    city: "Kabupaten Hulu Sungai Utara",
    lat: "-2.4421225",
    lng: "115.188916",
  },
  {
    city: "Kabupaten Tabalong",
    lat: "-1.864302",
    lng: "115.5681084",
  },
  {
    city: "Kabupaten Tanah Bumbu",
    lat: "-3.4512244",
    lng: "115.5681084",
  },
  {
    city: "Kabupaten Balangan",
    lat: "-2.3260425",
    lng: "115.6154732",
  },
  {
    city: "Kota Banjarmasin",
    lat: "-3.328499",
    lng: "114.589203",
  },
  {
    city: "Kota Banjar Baru",
    lat: "-3.4666667",
    lng: "114.75",
  },
  {
    city: "Kabupaten Paser",
    lat: "-1.7175266",
    lng: "115.9467997",
  },
  {
    city: "Kabupaten Kutai Barat",
    lat: "0.1353881",
    lng: "115.094045",
  },
  {
    city: "Kabupaten Kutai Kartanegara",
    lat: "-0.1336655",
    lng: "116.6081653",
  },
  {
    city: "Kabupaten Kutai Timur",
    lat: "0.9433774",
    lng: "116.9852422",
  },
  {
    city: "Kabupaten Berau",
    lat: "2.0450883",
    lng: "117.3616476",
  },
  {
    city: "Kabupaten Malinau",
    lat: "3.584221",
    lng: "116.647797",
  },
  {
    city: "Kabupaten Bulungan",
    lat: "2.9042476",
    lng: "116.9852422",
  },
  {
    city: "Kabupaten Nunukan",
    lat: "4.0609227",
    lng: "117.666952",
  },
  {
    city: "Kabupaten Penajam Paser Utara",
    lat: "-1.2917094",
    lng: "116.5137964",
  },
  {
    city: "Kabupaten Tana Tidung",
    lat: "3.551869",
    lng: "117.0794082",
  },
  {
    city: "Kota Balikpapan",
    lat: "-1.2635389",
    lng: "116.8278833",
  },
  {
    city: "Kota Samarinda",
    lat: "-0.502183",
    lng: "117.153801",
  },
  {
    city: "Kota Tarakan",
    lat: "3.3",
    lng: "117.6333333",
  },
  {
    city: "Kota Bontang",
    lat: "0.1333333",
    lng: "117.5",
  },
  {
    city: "Kabupaten Bolaang Mongondow",
    lat: "0.6870994",
    lng: "124.0641419",
  },
  {
    city: "Kabupaten Minaha",
    lat: "1",
    lng: "124.5833333",
  },
  {
    city: "Kabupaten Kepulauan Sangihe",
    lat: "3.5303212",
    lng: "125.5438967",
  },
  {
    city: "Kabupaten Kepulauan Talaud",
    lat: "4.092",
    lng: "126.768",
  },
  {
    city: "Kabupaten Minahasa Selatan",
    lat: "1.0946773",
    lng: "124.4641848",
  },
  {
    city: "Kabupaten Minahasa Utara",
    lat: "1.5327973",
    lng: "124.994751",
  },
  {
    city: "Kabupaten Bolaang Mongondow Utara",
    lat: "0.818691",
    lng: "123.5280072",
  },
  {
    city: "Kabupaten Siau Tagulandang Biaro",
    lat: "2.345964",
    lng: "125.4124355",
  },
  {
    city: "Kabupaten Minahasa Tenggara",
    lat: "1.0278551",
    lng: "124.7298765",
  },
  {
    city: "Kota Manado",
    lat: "1.4917014",
    lng: "124.842843",
  },
  {
    city: "Kota Bitung",
    lat: "1.4553529",
    lng: "125.204697",
  },
  {
    city: "Kota Tomohon",
    lat: "1.3234131",
    lng: "124.8384504",
  },
  {
    city: "Kota Kotamobagu",
    lat: "0.7333333",
    lng: "124.3166667",
  },
  {
    city: "Kabupaten Banggai Kepulauan",
    lat: "-1.6408137",
    lng: "123.5504076",
  },
  {
    city: "Kabupaten Banggai",
    lat: "-1.6408137",
    lng: "123.5504076",
  },
  {
    city: "Kabupaten Morowali",
    lat: "-2.3003072",
    lng: "121.5370003",
  },
  {
    city: "Kabupaten Poso",
    lat: "-1.391922",
    lng: "120.766998",
  },
  {
    city: "Kabupaten Donggala",
    lat: "-0.4233155",
    lng: "119.8352303",
  },
  {
    city: "Kabupaten Toli-Toli",
    lat: "0.8768231",
    lng: "120.7579834",
  },
  {
    city: "Kabupaten Buol",
    lat: "0.9695452",
    lng: "121.3541631",
  },
  {
    city: "Kabupaten Parigi Moutong",
    lat: "0.5817607",
    lng: "120.8039474",
  },
  {
    city: "Kabupaten Tojo Una-Una",
    lat: "-1.098757",
    lng: "121.5370003",
  },
  {
    city: "Kota Palu",
    lat: "-0.898583",
    lng: "119.850601",
  },
  {
    city: "Kabupaten Selay",
    lat: "-6",
    lng: "120.5",
  },
  {
    city: "Kabupaten Bulukumba",
    lat: "-5.4329368",
    lng: "120.2051096",
  },
  {
    city: "Kabupaten Bantaeng",
    lat: "-5.5169316",
    lng: "120.0202964",
  },
  {
    city: "Kabupaten Jeneponto",
    lat: "-5.554579",
    lng: "119.6730939",
  },
  {
    city: "Kabupaten Takalar",
    lat: "-5.4162493",
    lng: "119.4875668",
  },
  {
    city: "Kabupaten Gowa",
    lat: "-5.3102888",
    lng: "119.742604",
  },
  {
    city: "Kabupaten Sinjai",
    lat: "-5.2171961",
    lng: "120.112735",
  },
  {
    city: "Kabupaten Maros",
    lat: "-4.94695",
    lng: "119.578903",
  },
  {
    city: "Kabupaten Pangkajene Dan Kepulauan",
    lat: "-4.805035",
    lng: "119.5571677",
  },
  {
    city: "Kabupaten Barru",
    lat: "-4.4172651",
    lng: "119.6730939",
  },
  {
    city: "Kabupaten Bone",
    lat: "-2.083333",
    lng: "120.216667",
  },
  {
    city: "Kabupaten Soppeng",
    lat: "-4.3518541",
    lng: "119.9277947",
  },
  {
    city: "Kabupaten Wajo",
    lat: "-4.022229",
    lng: "120.0665236",
  },
  {
    city: "Kabupaten Sidenreng Rappang",
    lat: "-3.7738981",
    lng: "120.0202964",
  },
  {
    city: "Kabupaten Pinrang",
    lat: "-3.793071",
    lng: "119.6408",
  },
  {
    city: "Kabupaten Enrekang",
    lat: "-3.563128",
    lng: "119.7612",
  },
  {
    city: "Kabupaten Luwu",
    lat: "-3.3052214",
    lng: "120.2512728",
  },
  {
    city: "Kabupaten Tana Toraja",
    lat: "-3.0753003",
    lng: "119.742604",
  },
  {
    city: "Kabupaten Luwu Utara",
    lat: "-2.2690446",
    lng: "119.9740534",
  },
  {
    city: "Kabupaten Luwu Timur",
    lat: "-2.5825518",
    lng: "121.1710389",
  },
  {
    city: "Kota Makassar",
    lat: "-5.1333333",
    lng: "119.4166667",
  },
  {
    city: "Kota Pare-Pare",
    lat: "-4.0166667",
    lng: "119.6236111",
  },
  {
    city: "Kota Palo",
    lat: "-3",
    lng: "120.2",
  },
  {
    city: "Kabupaten Buton",
    lat: "-5.3096355",
    lng: "122.9888319",
  },
  {
    city: "Kabupaten Muna",
    lat: "-4.901629",
    lng: "122.6277455",
  },
  {
    city: "Kabupaten Konawe",
    lat: "-3.9380432",
    lng: "122.0837445",
  },
  {
    city: "Kabupaten Kolaka",
    lat: "-4.049665",
    lng: "121.593803",
  },
  {
    city: "Kabupaten Konawe Selatan",
    lat: "-4.2027915",
    lng: "122.4467238",
  },
  {
    city: "Kabupaten Bombana",
    lat: "-4.6543462",
    lng: "121.9017954",
  },
  {
    city: "Kabupaten Wakatobi",
    lat: "-5.3264442",
    lng: "123.5951925",
  },
  {
    city: "Kabupaten Kolaka Utara",
    lat: "-3.1347227",
    lng: "121.1710389",
  },
  {
    city: "Kabupaten Buton Utara",
    lat: "-4.7023424",
    lng: "123.0338767",
  },
  {
    city: "Kabupaten Konawe Utara",
    lat: "-3.3803291",
    lng: "122.0837445",
  },
  {
    city: "Kota Kendari",
    lat: "-3.972201",
    lng: "122.5149028",
  },
  {
    city: "Kota Bau-Bau",
    lat: "-5.46667",
    lng: "122.633",
  },
  {
    city: "Kabupaten Boalemo",
    lat: "0.7013419",
    lng: "122.2653887",
  },
  {
    city: "Kabupaten Gorontalo",
    lat: "0.5333333",
    lng: "123.0666667",
  },
  {
    city: "Kabupaten Pohuwato",
    lat: "0.7055278",
    lng: "121.7195459",
  },
  {
    city: "Kabupaten Bone Bolango",
    lat: "0.5657885",
    lng: "123.3486147",
  },
  {
    city: "Kabupaten Gorontalo Utara",
    lat: "0.9252647",
    lng: "122.4920088",
  },
  {
    city: "Kota Gorontalo",
    lat: "0.5333333",
    lng: "123.0666667",
  },
  {
    city: "Kabupaten Majene",
    lat: "-3.0297251",
    lng: "118.9062794",
  },
  {
    city: "Kabupaten Polewali Mandar",
    lat: "-3.3419323",
    lng: "119.1390642",
  },
  {
    city: "Kabupaten Mamasa",
    lat: "-2.960135",
    lng: "119.368202",
  },
  {
    city: "Kabupaten Mamuju",
    lat: "-2.7293364",
    lng: "118.9295737",
  },
  {
    city: "Kabupaten Mamuju Utara",
    lat: "-1.5264542",
    lng: "119.5107708",
  },
  {
    city: "Kabupaten Maluku Tenggara Barat",
    lat: "-7.5322642",
    lng: "131.3611121",
  },
  {
    city: "Kabupaten Maluku Tenggara",
    lat: "-5.7512455",
    lng: "132.7271587",
  },
  {
    city: "Kabupaten Maluku Tengah",
    lat: "-3.0166501",
    lng: "129.4864411",
  },
  {
    city: "Kabupaten Buru Selatan",
    lat: "-3.3927754",
    lng: "126.7819505",
  },
  {
    city: "Kabupaten Kepulauan Aru",
    lat: "-6.1946502",
    lng: "134.5501935",
  },
  {
    city: "Kabupaten Seram Bagian Barat",
    lat: "-3.1271575",
    lng: "128.4008357",
  },
  {
    city: "Kabupaten Seram Bagian Timur",
    lat: "-3.4150761",
    lng: "130.390488",
  },
  {
    city: "Kota Ambon",
    lat: "-3.65607",
    lng: "128.166419",
  },
  {
    city: "KotaTual",
    lat: "-5.640851",
    lng: "132.7475093",
  },
  {
    city: "Kabupaten Halmahera Barat",
    lat: "1.3121235",
    lng: "128.4849923",
  },
  {
    city: "Kabupaten Halmahera Tengah",
    lat: "1.3121235",
    lng: "128.4849923",
  },
  {
    city: "Kabupaten Kepulauan Sula",
    lat: "-1.8666667",
    lng: "125.3666667",
  },
  {
    city: "Kabupaten Halmahera Selatan",
    lat: "1.3121235",
    lng: "128.4849923",
  },
  {
    city: "Kabupaten Halmahera Utara",
    lat: "1.3121235",
    lng: "128.4849923",
  },
  {
    city: "Kabupaten Halmahera Timur",
    lat: "1.3121235",
    lng: "128.4849923",
  },
  {
    city: "Kota Ternate",
    lat: "0.7833333",
    lng: "127.3666667",
  },
  {
    city: "Kota Tidore Kepulauan",
    lat: "0.6833333",
    lng: "127.4",
  },
  {
    city: "Kabupaten Fakfak",
    lat: "-2.885237",
    lng: "132.2658282",
  },
  {
    city: "Kabupaten Kaimana",
    lat: "-3.660925",
    lng: "133.774506",
  },
  {
    city: "Kabupaten Teluk Wondama",
    lat: "-2.8551699",
    lng: "134.3236557",
  },
  {
    city: "Kabupaten Teluk Bintuni",
    lat: "-1.9056848",
    lng: "133.329466",
  },
  {
    city: "Kabupaten Manokwari",
    lat: "-0.8614531",
    lng: "134.0620421",
  },
  {
    city: "Kabupaten Sorong Selatan",
    lat: "-0.8666667",
    lng: "131.25",
  },
  {
    city: "Kota Sorong",
    lat: "-0.8666667",
    lng: "131.25",
  },
  {
    city: "Kabupaten Raja Ampat",
    lat: "-1.0915151",
    lng: "130.8778586",
  },
  {
    city: "Kabupaten Sorong",
    lat: "-0.8666667",
    lng: "131.25",
  },
  {
    city: "Kabupaten Merauke",
    lat: "-8.4960406",
    lng: "140.3945527",
  },
  {
    city: "Kabupaten Jayawijaya",
    lat: "-4.0004481",
    lng: "138.7995122",
  },
  {
    city: "Kabupaten Jayapura",
    lat: "-2.533",
    lng: "140.717",
  },
  {
    city: "Kabupaten Nabire",
    lat: "-3.5095462",
    lng: "135.7520985",
  },
  {
    city: "Kabupaten Kepulauan Yapen",
    lat: "-1.7469359",
    lng: "136.1709012",
  },
  {
    city: "Kabupaten Biak Numfor",
    lat: "-1.0381022",
    lng: "135.9800848",
  },
  {
    city: "Kabupaten Paniai",
    lat: "-3.7876441",
    lng: "136.3624686",
  },
  {
    city: "Kabupaten Puncak Jaya",
    lat: "-4.0836111",
    lng: "137.1847222",
  },
  {
    city: "Kabupaten Mimika",
    lat: "-4.4553223",
    lng: "137.1362125",
  },
  {
    city: "Kabupaten Boven Digoel",
    lat: "-5.7400018",
    lng: "140.3481835",
  },
  {
    city: "Kabupaten Mappi",
    lat: "-7.102232",
    lng: "139.396393",
  },
  {
    city: "Kabupaten Asmat",
    lat: "-5.0573958",
    lng: "138.3988186",
  },
  {
    city: "Kabupaten Yahukimo",
    lat: "-4.4939717",
    lng: "139.5279996",
  },
  {
    city: "Kabupaten Pegunungan Bintang",
    lat: "-4.5589872",
    lng: "140.5135589",
  },
  {
    city: "Kabupaten Tolikara",
    lat: "-3.481132",
    lng: "138.4787258",
  },
  {
    city: "Kabupaten Sarmi",
    lat: "-1.868727",
    lng: "138.743607",
  },
  {
    city: "Kabupaten Keerom",
    lat: "-3.3449536",
    lng: "140.7624493",
  },
  {
    city: "Kabupaten Waropen",
    lat: "-2.8435717",
    lng: "136.670534",
  },
  {
    city: "Kabupaten Supiori",
    lat: "-0.7295099",
    lng: "135.6385125",
  },
  {
    city: "Kabupaten Mamberamo Raya",
    lat: "-2.5331255",
    lng: "137.7637565",
  },
  {
    city: "Kota Jayapura",
    lat: "-2.533",
    lng: "140.717",
  },
  {
    city: "Kabupaten Labuhanbatu Utara",
    lat: "2.3465638",
    lng: "99.8124935",
  },
  {
    city: "Kabupaten Labuhanbatu Selatan",
    lat: "1.8799353",
    lng: "100.1703257",
  },
  {
    city: "Kabupaten Nias Utara",
    lat: "1.1255279",
    lng: "97.5247243",
  },
  {
    city: "Kabupaten Nias Barat",
    lat: "1.1255279",
    lng: "97.5247243",
  },
  {
    city: "Kota Gunungsitoli",
    lat: "1.281964",
    lng: "97.61594",
  },
  {
    city: "Kabupaten Kepulauan Meranti",
    lat: "0.9208765",
    lng: "102.6675575",
  },
  {
    city: "Kota Sungai Penuh",
    lat: "-2.06314",
    lng: "101.387199",
  },
  {
    city: "Kabupaten Bengkulu Tengah",
    lat: "-3.7955556",
    lng: "102.2591667",
  },
  {
    city: "Kabupaten Tulangbawang Barat",
    lat: "-4.5256967",
    lng: "105.0791228",
  },
  {
    city: "Kabupaten Pringsewu",
    lat: "-5.3539884",
    lng: "104.9622498",
  },
  {
    city: "Kabupaten Mesuji",
    lat: "-4.0044783",
    lng: "105.3131185",
  },
  {
    city: "Kabupaten Lingga",
    lat: "-0.1627686",
    lng: "104.6354631",
  },
  {
    city: " Kabupaten Anambas",
    lat: "3.1055459",
    lng: "105.6537231",
  },
  {
    city: "Kabupaten Sleman",
    lat: "-7.716165",
    lng: "110.335403",
  },
  {
    city: "Kota Tangerang Selatan",
    lat: "-6.2888889",
    lng: "106.7180556",
  },
  {
    city: "Kabupaten Lombok Utara",
    lat: "-8.3739076",
    lng: "116.2777073",
  },
  {
    city: "Kabupaten Sabu Raijua",
    lat: "-10.5541116",
    lng: "121.8334868",
  },
  {
    city: "Kabupaten Bolang Mongondow Timur",
    lat: "0.7152651",
    lng: "124.4641848",
  },
  {
    city: "Kabupaten Bolang Mongondow Selatan",
    lat: "0.4053215",
    lng: "123.8411288",
  },
  {
    city: "Kabupaten Sigi",
    lat: "-1.3834127",
    lng: "120.0665236",
  },
  {
    city: "Kabupaten Toraja Utara",
    lat: "-2.8621942",
    lng: "119.8352303",
  },
  {
    city: "Kabupaten Maluku Barat Daya",
    lat: "-7.7851588",
    lng: "126.3498097",
  },
  {
    city: "Kabupaten Buru",
    lat: "-3.3927754",
    lng: "126.7819505",
  },
  {
    city: "Kabupaten Pulau Morota",
    lat: "2.3656672",
    lng: "128.4008357",
  },
  {
    city: "Kabupaten Tambrauw",
    lat: "-0.781856",
    lng: "132.3938375",
  },
  {
    city: "Kabupaten Maybat",
    lat: "3.1472",
    lng: "101.6997",
  },
  {
    city: "Kabupaten Memberamo Tengah",
    lat: "-2.3745692",
    lng: "138.3190276",
  },
  {
    city: "Kabupaten Yalimo",
    lat: "-3.7852847",
    lng: "139.4466005",
  },
  {
    city: "Kabupaten Lanny Jaya",
    lat: "-3.971033",
    lng: "138.3190276",
  },
  {
    city: "Kabupaten Nduga",
    lat: "-4.4069496",
    lng: "138.2393528",
  },
  {
    city: "Kabupaten Puncak",
    lat: "-6.7125476",
    lng: "106.9542425",
  },
  {
    city: "Kabupaten Dogiyai",
    lat: "-4.0193872",
    lng: "135.9610446",
  },
  {
    city: "Kabupaten Intan Jaya",
    lat: "-3.5076422",
    lng: "136.7478493",
  },
  {
    city: "Kabupaten Deiyai",
    lat: "-4.0974893",
    lng: "136.4393054",
  },
  {
    city: "",
  },
];

const property = [
  {
    name: "Rumah Pohon Balian dengan kolam renang yang indah",
    description:
      "Rumah pohon Balian hanya berjarak 3 menit dari pantai. Dari beranda Anda bisa menyaksikan matahari terbit di pagi hari, dan menikmati pemandangan taman kami yang indah (seluas 900 m2) dengan kolam renang.",
    image_url: "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=1200",
    locationId: "1",
  },
  {
    name: "Vila Kecil Mezzanine Nyaman 4 menit dari Pantai",
    description:
      "Selamat datang di Tiny Villa (The Putih) kami yang menawan, terletak di lingkungan yang tenang dan indah. Ruang yang nyaman dan dirancang dengan apik ini cocok untuk wisatawan solo atau pasangan yang mencari penginapan yang unik dan nyaman.",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/d1789b0b-a2aa-4dee-ba23-ae98ee9c904f.jpeg?im_w=1200",
    locationId: "11",
  },
  {
    name: "Ipian Cinta dengan Jacuzzi Kolam Renang Pribadi",
    description:
      "Ipian Cinta adalah rumah bambu unik dengan pemandangan laut yang indah lengkap dengan jacuzzi kolam renang dingin, lanskap tropis asli dengan Gunung Batukaru yang menghadap ke barat dan puncak Gunung Agung di sebelah timurnya. Tempat liburan ini adalah tempat yang luar biasa untuk mewujudkan petualangan impian para pengembara sejati. Kami mengundang Anda untuk merasakan getaran luar biasa dari seluruh rumah untuk melarikan diri dari kehidupan yang penuh drama ke dalam perjalanan dengan sukacita tertinggi.",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-47501584/original/bf120421-6d51-4beb-8d1e-ac92551327ae.jpeg?im_w=1200",
    locationId: "22",
  },
  {
    name: "Liburan Tiny Tall Haus Ubud!",
    description:
      "Lihat Haus Tiny Tinggi 6 meter (20 kaki) baru kami! Ruang kerja di dalam (17,8 meter persegi/91 kaki persegi) dengan WiFi YANG CEPAT. Lounge balkon/dapur kecil di luar (13 meter persegi/139 kaki persegi). Rumah mungil alami kami yang super efisien sangat ",
    image_url: "https://a0.muscache.com/im/pictures/e6657c1f-e041-42aa-b035-ade134a1cf10.jpg?im_w=720",
    locationId: "33",
  },
  {
    name: "SukaVilla -3BR dengan Kolam Renang Hangat, BBQ & Karaoke",
    description: "Sukavilla memiliki 3 kamar yang indah, yang menawarkan pengalaman pribadi dan unik di Bandung.",
    image_url:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-953482945276817965/original/30fecbd3-1b52-40b3-add1-e14170b6339e.jpeg?im_w=1200",
    locationId: "44",
  },
  {
    name: "Rumah Bunga - Pemandangan Menakjubkan, Netflix, BBQ",
    description:
      "Pemandangan kota Bandung yang memukau dan pemandangan pembibitan rimbun seluas 1400 m persegi dengan kaktus 30 yo. Villa memiliki AC di setiap kamar (dipasang 21 April). ",
    image_url: "https://a0.muscache.com/im/pictures/6b2274d2-7448-4eec-95b4-95a10be02279.jpg?im_w=1200",
    locationId: "55",
  },
  {
    name: "Driftwood Suite @ Desa Laguna",
    description:
      "Driftwood Suite kami adalah 'pondok' segi delapan yang indah yang hampir seluruhnya terbuat dari bahan alami - lantai, tiang struktural, dan sebagian besar perabotannya terbuat dari kayu apung yang ditemukan di pantai - pantai lokal. Atapnya jerami, dan 'dinding' ",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-697345039809294002/original/e238e84e-4e86-49b2-9f1e-47f20d1396ef.jpeg?im_w=1200",
    locationId: "66",
  },
  {
    name: "Vila Kubus B",
    description:
      "Vila dengan desain yang modern dan unique, bentuk bangunan yang kubus miring dengan kaca besar view langsung ke langit bintang dan bulan. Keren banget untuk foto - foto sosmed, berasa foto di luar negeri. Lokasi di perumahan elite, aman dan nyaman.",
    image_url: "https://a0.muscache.com/im/pictures/0428dd16-5484-4f6f-b9e5-b40bc541c5a8.jpg?im_w=720",
    locationId: "77",
  },
  {
    name: "Villa Art Hill - Sedikit Bali di PUNCAK",
    description: "Merupakan villa gaya bali resort mewah yang terletak dekat dengan Bogor Taman Safari.",
    image_url: "https://a0.muscache.com/im/pictures/474649f7-9f37-4f60-949d-f018d429b525.jpg?im_w=1200",
    locationId: "88",
  },
  {
    name: "Yantos Place - Mentawai Lodge",
    description:
      "Selamat datang di Yantos Place, tempat berselancar eksklusif Anda yang terletak di surga indah pulau Mentawai. ",
    image_url: "https://a0.muscache.com/im/pictures/72278882-d375-4ea2-a80b-75670e7e4fba.jpg?im_w=1200",
    locationId: "99",
  },
];

const room = [
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "1",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "1",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "1",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "2",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "2",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "2",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "3",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "3",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "3",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "4",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "4",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "4",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "5",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "5",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "5",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "6",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "6",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "6",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "7",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "7",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "7",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "8",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "8",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "8",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "9",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "9",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "9",
  },
  {
    name: "Room 200",
    price: "640000",
    description: "Kamar ini menyediakan 1 tempat tidur king dilengakapi sofa berbentuk L",
    guest: "8",
    image_url: "https://a0.muscache.com/im/pictures/91e6f52e-ed7c-40ca-8ea9-008ae47345e2.jpg?im_w=720",
    propertyId: "10",
  },
  {
    name: "Room 404",
    price: "560000",
    description: "Kamar ini memiliki 1 tempat tidur king, cocok untuk pasturi berbulan madu",
    guest: "6",
    image_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-869293644419339012/original/e221ac75-b0a1-4adc-94df-a056ad40ad3a.jpeg?im_w=720",
    propertyId: "10",
  },
  {
    name: "Room 500",
    price: "200000",
    description: "Kamar ini memiliki tempat tidur extra bed. kamar ini direkomendasikan untuk yang sedang melancong",
    guest: "2",
    image_url: "https://a0.muscache.com/im/pictures/3ee4ef1b-606d-46c6-9b40-a9137124c780.jpg?im_w=1200",
    propertyId: "10",
  },
];

const Data = { role, category, location, property, room };
export default Data;
