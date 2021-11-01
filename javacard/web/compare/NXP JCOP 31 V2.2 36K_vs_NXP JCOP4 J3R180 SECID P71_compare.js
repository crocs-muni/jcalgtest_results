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
{axis:"SECURE RANDOM (256B)",value:0.997,title:"1.18 ms"},
{axis:"SHA-1 hash (256B)",value:0.923,title:"5.34 ms"},
{axis:"SHA2-256 hash (256B)",value:0.938,title:"7.92 ms"},
{axis:"AES128 encrypt (256B)",value:0.982,title:"1.86 ms"},
{axis:"AES256 encrypt (256B)",value:0.985,title:"1.92 ms"},
{axis:"3DES encrypt (256B)",value:0.991,title:"1.9 ms"},
{axis:"3DES setKey(192b)",value:0.935,title:"3.23 ms"},
{axis:"AES setKey(128b)",value:0.935,title:"3.2 ms"},
{axis:"AES setKey(256b)",value:0.935,title:"3.24 ms"},
{axis:"SWAES oneblock (16B)",value:0.927,title:"174.12 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.973,title:"0.17 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.874,title:"5.32 ms"},
{axis:"ECC 256b genKeyPair",value:0.972,title:"26.8 ms"},
{axis:"ECDSA 256b sign",value:0.803,title:"31.96 ms"},
{axis:"ECDSA 256b verify",value:0.871,title:"30.22 ms"},
{axis:"ECDH 256b",value:0.904,title:"20.04 ms"},
{axis:"RSA1024 CRT decrypt",value:0.966,title:"14.98 ms"},
{axis:"RSA1024 CRT encrypt",value:0.914,title:"3.46 ms"},
{axis:"RSA2048 CRT decrypt",value:0.969,title:"53.23 ms"},
{axis:"RSA2048 CRT encrypt",value:0.941,title:"4.89 ms"},
{axis:"RSA1024 decrypt",value:0.946,title:"25.95 ms"},
{axis:"RSA1024 encrypt",value:0.934,title:"2.63 ms"},
{axis:"RSA2048 decrypt",value:0.955,title:"147.77 ms"},
{axis:"RSA2048 encrypt",value:0.951,title:"3.99 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);