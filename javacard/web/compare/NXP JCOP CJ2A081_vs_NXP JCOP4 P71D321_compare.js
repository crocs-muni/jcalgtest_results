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
{axis:"SECURE RANDOM (256B)",value:0.996,title:"1.28 ms"},
{axis:"SHA-1 hash (256B)",value:0.917,title:"5.73 ms"},
{axis:"SHA2-256 hash (256B)",value:0.933,title:"8.54 ms"},
{axis:"3DES encrypt (256B)",value:0.990,title:"1.98 ms"},
{axis:"AES128 encrypt (256B)",value:0.981,title:"1.95 ms"},
{axis:"AES256 encrypt (256B)",value:0.985,title:"2.01 ms"},
{axis:"3DES setKey(192b)",value:0.929,title:"3.51 ms"},
{axis:"AES setKey(128b)",value:0.929,title:"3.48 ms"},
{axis:"AES setKey(256b)",value:0.929,title:"3.52 ms"},
{axis:"SWAES oneblock (16B)",value:0.927,title:"173.22 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.973,title:"0.17 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.861,title:"5.86 ms"},
{axis:"RSA1024 CRT decrypt",value:0.963,title:"16.34 ms"},
{axis:"RSA1024 CRT encrypt",value:0.929,title:"2.83 ms"},
{axis:"RSA2048 CRT decrypt",value:0.969,title:"54.8 ms"},
{axis:"RSA2048 CRT encrypt",value:0.947,title:"4.33 ms"},
{axis:"RSA1024 decrypt",value:0.941,title:"28.1 ms"},
{axis:"RSA1024 encrypt",value:0.929,title:"2.84 ms"},
{axis:"RSA2048 decrypt",value:0.955,title:"146.53 ms"},
{axis:"RSA2048 encrypt",value:0.947,title:"4.32 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);