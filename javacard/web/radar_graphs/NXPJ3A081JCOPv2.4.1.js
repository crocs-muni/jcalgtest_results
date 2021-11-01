var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.960,title:"14.39 ms"},
{axis:"SHA-1 hash (256B)",value:0.826,title:"12.02 ms"},
{axis:"SHA2-256 hash (256B)",value:0.826,title:"22.12 ms"},
{axis:"AES128 encrypt (256B)",value:0.358,title:"65.7 ms"},
{axis:"AES256 encrypt (256B)",value:0.362,title:"82.79 ms"},
{axis:"3DES encrypt (256B)",value:0.335,title:"136.24 ms"},
{axis:"3DES setKey(192b)",value:0.777,title:"11.09 ms"},
{axis:"AES setKey(128b)",value:0.718,title:"13.82 ms"},
{axis:"AES setKey(256b)",value:0.714,title:"14.17 ms"},
{axis:"SWAES oneblock (16B)",value:0.857,title:"339.26 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.919,title:"0.52 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.954,title:"1.92 ms"},
{axis:"ECC 256b genKeyPair",value:0.891,title:"103.85 ms"},
{axis:"ECDSA 256b sign",value:0.513,title:"78.8 ms"},
{axis:"ECDSA 256b verify",value:0.487,title:"120.38 ms"},
{axis:"ECDH 256b",value:0.491,title:"105.76 ms"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"428.17 ms"},
{axis:"RSA2048 CRT encrypt",value:0.757,title:"19.99 ms"},
{axis:"RSA2048 CRT generate",value:0.700,title:"23039.8 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.714,title:"1924.05 ms"},
{axis:"RSA1024 CRT decrypt",value:0.813,title:"82.25 ms"},
{axis:"RSA1024 CRT encrypt",value:0.793,title:"8.3 ms"},
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