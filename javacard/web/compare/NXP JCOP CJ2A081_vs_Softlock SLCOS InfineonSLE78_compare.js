var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.962,title:"13.64 ms"},
{axis:"SHA-1 hash (256B)",value:0.838,title:"11.24 ms"},
{axis:"SHA2-256 hash (256B)",value:0.838,title:"20.58 ms"},
{axis:"AES128 encrypt (256B)",value:0.392,title:"62.24 ms"},
{axis:"AES256 encrypt (256B)",value:0.394,title:"78.64 ms"},
{axis:"3DES encrypt (256B)",value:0.364,title:"130.25 ms"},
{axis:"3DES setKey(192b)",value:0.721,title:"13.85 ms"},
{axis:"AES setKey(128b)",value:0.779,title:"10.81 ms"},
{axis:"AES setKey(256b)",value:0.717,title:"14.0 ms"},
{axis:"SWAES oneblock (16B)",value:0.864,title:"323.64 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.922,title:"0.5 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.957,title:"1.8 ms"},
{axis:"ECC 256b genKeyPair",value:0.896,title:"98.85 ms"},
{axis:"ECDSA 256b sign",value:0.526,title:"76.71 ms"},
{axis:"ECDSA 256b verify",value:0.497,title:"118.18 ms"},
{axis:"ECDH 256b",value:0.503,title:"103.3 ms"},
{axis:"RSA1024 CRT decrypt",value:0.815,title:"81.42 ms"},
{axis:"RSA1024 CRT encrypt",value:0.798,title:"8.09 ms"},
{axis:"RSA2048 CRT decrypt",value:0.755,title:"426.78 ms"},
{axis:"RSA2048 CRT encrypt",value:0.760,title:"19.75 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.910,title:"32.12 ms"},
{axis:"SHA-1 hash (256B)",value:0.628,title:"25.76 ms"},
{axis:"SHA2-256 hash (256B)",value:0.712,title:"36.56 ms"},
{axis:"AES128 encrypt (256B)",value:0.976,title:"2.42 ms"},
{axis:"AES256 encrypt (256B)",value:0.981,title:"2.46 ms"},
{axis:"3DES encrypt (256B)",value:0.989,title:"2.24 ms"},
{axis:"3DES setKey(192b)",value:0.791,title:"10.4 ms"},
{axis:"AES setKey(128b)",value:0.853,title:"7.19 ms"},
{axis:"AES setKey(256b)",value:0.848,title:"7.52 ms"},
{axis:"SWAES oneblock (16B)",value:0.555,title:"1058.14 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.807,title:"1.23 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.829,title:"7.19 ms"},
{axis:"ECC 256b genKeyPair",value:0.836,title:"156.9 ms"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.872,title:"56.27 ms"},
{axis:"RSA1024 CRT encrypt",value:0.865,title:"5.43 ms"},
{axis:"RSA2048 CRT decrypt",value:0.920,title:"139.55 ms"},
{axis:"RSA2048 CRT encrypt",value:0.903,title:"7.94 ms"},
{axis:"RSA1024 decrypt",value:0.855,title:"69.61 ms"},
{axis:"RSA1024 encrypt",value:0.858,title:"5.69 ms"},
{axis:"RSA2048 decrypt",value:0.869,title:"426.26 ms"},
{axis:"RSA2048 encrypt",value:0.903,title:"8.0 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);