var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.973,title:"9.73 ms"},
{axis:"SHA-1 hash (256B)",value:0.881,title:"8.26 ms"},
{axis:"SHA2-256 hash (256B)",value:0.811,title:"23.93 ms"},
{axis:"AES128 encrypt (256B)",value:0.971,title:"2.96 ms"},
{axis:"AES256 encrypt (256B)",value:0.975,title:"3.25 ms"},
{axis:"3DES encrypt (256B)",value:0.980,title:"4.11 ms"},
{axis:"3DES setKey(192b)",value:0.809,title:"9.51 ms"},
{axis:"AES setKey(128b)",value:0.985,title:"0.74 ms"},
{axis:"AES setKey(256b)",value:0.958,title:"2.06 ms"},
{axis:"SWAES oneblock (16B)",value:0.873,title:"302.41 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.925,title:"0.48 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.979,title:"0.9 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
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