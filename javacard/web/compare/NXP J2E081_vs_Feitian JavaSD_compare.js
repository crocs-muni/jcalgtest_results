var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.0,title:"NS"},
{axis:"SHA-1 hash (256B)",value:0.0,title:"NS"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"3DES encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES256 encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES setKey(192b)",value:0.211,title:"39.17 ms"},
{axis:"AES setKey(128b)",value:0.475,title:"25.69 ms"},
{axis:"AES setKey(256b)",value:0.376,title:"30.89 ms"},
{axis:"SWAES oneblock (16B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.977,title:"8.26 ms"},
{axis:"SHA-1 hash (256B)",value:0.928,title:"4.98 ms"},
{axis:"SHA2-256 hash (256B)",value:0.772,title:"28.87 ms"},
{axis:"3DES encrypt (256B)",value:0.970,title:"6.2 ms"},
{axis:"AES128 encrypt (256B)",value:0.956,title:"4.51 ms"},
{axis:"AES256 encrypt (256B)",value:0.964,title:"4.72 ms"},
{axis:"3DES setKey(192b)",value:0.975,title:"1.22 ms"},
{axis:"AES setKey(128b)",value:0.975,title:"1.21 ms"},
{axis:"AES setKey(256b)",value:0.975,title:"1.22 ms"},
{axis:"SWAES oneblock (16B)",value:0.821,title:"425.27 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.801,title:"1.27 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.969,title:"1.32 ms"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
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