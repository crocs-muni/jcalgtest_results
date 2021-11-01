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
{axis:"RSA2048 CRT decrypt",value:0.755,title:"426.78 ms"},
{axis:"RSA2048 CRT encrypt",value:0.760,title:"19.75 ms"},
{axis:"RSA2048 CRT generate",value:0.684,title:"24244.4 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.701,title:"2008.3 ms"},
{axis:"RSA1024 CRT decrypt",value:0.815,title:"81.42 ms"},
{axis:"RSA1024 CRT encrypt",value:0.798,title:"8.09 ms"},
{axis:"RSA1024 generate",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);