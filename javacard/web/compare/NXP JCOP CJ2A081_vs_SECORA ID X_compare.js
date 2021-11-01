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
{axis:"SECURE RANDOM (256B)",value:0.981,title:"6.98 ms"},
{axis:"SHA-1 hash (256B)",value:0.837,title:"11.28 ms"},
{axis:"SHA2-256 hash (256B)",value:0.890,title:"13.98 ms"},
{axis:"AES128 encrypt (256B)",value:0.990,title:"1.02 ms"},
{axis:"AES256 encrypt (256B)",value:0.996,title:"0.55 ms"},
{axis:"3DES encrypt (256B)",value:0.997,title:"0.63 ms"},
{axis:"3DES setKey(192b)",value:0.851,title:"7.42 ms"},
{axis:"AES setKey(128b)",value:0.865,title:"6.59 ms"},
{axis:"AES setKey(256b)",value:0.833,title:"8.25 ms"},
{axis:"SWAES oneblock (16B)",value:0.860,title:"333.16 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.961,title:"0.25 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.3 ms"},
{axis:"ECC 256b genKeyPair",value:2.266,title:"-1208.3 ms"},
{axis:"ECDSA 256b sign",value:0.854,title:"23.58 ms"},
{axis:"ECDSA 256b verify",value:0.980,title:"4.8 ms"},
{axis:"ECDH 256b",value:1.405,title:"-84.14 ms"},
{axis:"RSA1024 CRT decrypt",value:0.942,title:"25.68 ms"},
{axis:"RSA1024 CRT encrypt",value:1.423,title:"-16.96 ms"},
{axis:"RSA2048 CRT decrypt",value:0.964,title:"62.33 ms"},
{axis:"RSA2048 CRT encrypt",value:1.192,title:"-15.76 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.68 ms"},
{axis:"RSA1024 encrypt",value:1.197,title:"-7.89 ms"},
{axis:"RSA2048 decrypt",value:0.933,title:"216.46 ms"},
{axis:"RSA2048 encrypt",value:1.081,title:"-6.65 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);