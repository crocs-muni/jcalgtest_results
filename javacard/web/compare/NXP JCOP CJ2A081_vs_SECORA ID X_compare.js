var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.961,title:"14.14 ms"},
{axis:"SHA-1 hash (256B)",value:0.828,title:"11.9 ms"},
{axis:"SHA2-256 hash (256B)",value:0.823,title:"22.46 ms"},
{axis:"3DES encrypt (256B)",value:0.935,title:"13.3 ms"},
{axis:"AES128 encrypt (256B)",value:0.894,title:"10.78 ms"},
{axis:"AES256 encrypt (256B)",value:0.909,title:"11.81 ms"},
{axis:"3DES setKey(192b)",value:0.891,title:"5.39 ms"},
{axis:"AES setKey(128b)",value:0.893,title:"5.22 ms"},
{axis:"AES setKey(256b)",value:0.888,title:"5.56 ms"},
{axis:"SWAES oneblock (16B)",value:0.857,title:"339.14 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.919,title:"0.52 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.955,title:"1.9 ms"},
{axis:"RSA1024 CRT decrypt",value:0.813,title:"82.4 ms"},
{axis:"RSA1024 CRT encrypt",value:0.791,title:"8.37 ms"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"428.54 ms"},
{axis:"RSA2048 CRT encrypt",value:0.756,title:"20.04 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.981,title:"6.98 ms"},
{axis:"SHA-1 hash (256B)",value:0.837,title:"11.28 ms"},
{axis:"SHA2-256 hash (256B)",value:0.890,title:"13.98 ms"},
{axis:"3DES encrypt (256B)",value:0.997,title:"0.63 ms"},
{axis:"AES128 encrypt (256B)",value:0.990,title:"1.02 ms"},
{axis:"AES256 encrypt (256B)",value:0.996,title:"0.55 ms"},
{axis:"3DES setKey(192b)",value:0.851,title:"7.42 ms"},
{axis:"AES setKey(128b)",value:0.865,title:"6.59 ms"},
{axis:"AES setKey(256b)",value:0.833,title:"8.25 ms"},
{axis:"SWAES oneblock (16B)",value:0.860,title:"333.16 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.961,title:"0.25 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.3 ms"},
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