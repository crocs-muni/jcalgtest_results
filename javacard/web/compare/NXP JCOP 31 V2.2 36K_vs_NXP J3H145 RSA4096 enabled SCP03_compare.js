var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.981,title:"6.92 ms"},
{axis:"SHA-1 hash (256B)",value:0.714,title:"19.84 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES256 encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES encrypt (256B)",value:0.965,title:"7.27 ms"},
{axis:"3DES setKey(192b)",value:0.474,title:"26.1 ms"},
{axis:"AES setKey(128b)",value:0.0,title:"NS"},
{axis:"AES setKey(256b)",value:0.0,title:"NS"},
{axis:"SWAES oneblock (16B)",value:0.859,title:"335.91 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.872,title:"0.82 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.930,title:"2.96 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.752,title:"108.98 ms"},
{axis:"RSA1024 CRT encrypt",value:0.725,title:"11.02 ms"},
{axis:"RSA2048 CRT decrypt",value:0.642,title:"623.86 ms"},
{axis:"RSA2048 CRT encrypt",value:0.645,title:"29.18 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.996,title:"1.51 ms"},
{axis:"SHA-1 hash (256B)",value:0.881,title:"8.26 ms"},
{axis:"SHA2-256 hash (256B)",value:0.929,title:"8.96 ms"},
{axis:"AES128 encrypt (256B)",value:0.904,title:"9.86 ms"},
{axis:"AES256 encrypt (256B)",value:0.921,title:"10.2 ms"},
{axis:"3DES encrypt (256B)",value:0.954,title:"9.48 ms"},
{axis:"3DES setKey(192b)",value:0.099,title:"44.74 ms"},
{axis:"AES setKey(128b)",value:0.099,title:"44.09 ms"},
{axis:"AES setKey(256b)",value:0.099,title:"44.61 ms"},
{axis:"SWAES oneblock (16B)",value:0.864,title:"321.96 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.929,title:"0.45 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.958,title:"1.76 ms"},
{axis:"ECC 256b genKeyPair",value:0.682,title:"303.8 ms"},
{axis:"ECDSA 256b sign",value:0.638,title:"58.69 ms"},
{axis:"ECDSA 256b verify",value:0.776,title:"52.53 ms"},
{axis:"ECDH 256b",value:0.725,title:"57.18 ms"},
{axis:"RSA1024 CRT decrypt",value:0.864,title:"59.89 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.884,title:"202.26 ms"},
{axis:"RSA2048 CRT encrypt",value:0.858,title:"11.65 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);