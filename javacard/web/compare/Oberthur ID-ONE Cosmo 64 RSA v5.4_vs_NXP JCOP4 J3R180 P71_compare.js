var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.854,title:"52.49 ms"},
{axis:"SHA-1 hash (256B)",value:0.660,title:"23.53 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"3DES encrypt (256B)",value:0.922,title:"16.05 ms"},
{axis:"AES128 encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES256 encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES setKey(192b)",value:0.490,title:"25.31 ms"},
{axis:"AES setKey(128b)",value:0.0,title:"NS"},
{axis:"AES setKey(256b)",value:0.0,title:"NS"},
{axis:"SWAES oneblock (16B)",value:0.099,title:"2140.21 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.099,title:"5.75 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.099,title:"37.92 ms"},
{axis:"RSA1024 CRT decrypt",value:0.625,title:"164.94 ms"},
{axis:"RSA1024 CRT encrypt",value:0.099,title:"36.11 ms"},
{axis:"RSA2048 CRT decrypt",value:0.500,title:"871.61 ms"},
{axis:"RSA2048 CRT encrypt",value:0.099,title:"74.1 ms"},
{axis:"RSA1024 decrypt",value:0.099,title:"431.63 ms"},
{axis:"RSA1024 encrypt",value:0.099,title:"36.07 ms"},
{axis:"RSA2048 decrypt",value:0.099,title:"2927.22 ms"},
{axis:"RSA2048 encrypt",value:0.099,title:"74.07 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.997,title:"1.19 ms"},
{axis:"SHA-1 hash (256B)",value:0.923,title:"5.32 ms"},
{axis:"SHA2-256 hash (256B)",value:0.937,title:"7.94 ms"},
{axis:"3DES encrypt (256B)",value:0.991,title:"1.86 ms"},
{axis:"AES128 encrypt (256B)",value:0.982,title:"1.83 ms"},
{axis:"AES256 encrypt (256B)",value:0.985,title:"1.92 ms"},
{axis:"3DES setKey(192b)",value:0.935,title:"3.23 ms"},
{axis:"AES setKey(128b)",value:0.934,title:"3.21 ms"},
{axis:"AES setKey(256b)",value:0.935,title:"3.24 ms"},
{axis:"SWAES oneblock (16B)",value:0.927,title:"174.05 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.975,title:"0.16 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.933,title:"2.84 ms"},
{axis:"RSA1024 CRT decrypt",value:0.966,title:"15.0 ms"},
{axis:"RSA1024 CRT encrypt",value:0.935,title:"2.61 ms"},
{axis:"RSA2048 CRT decrypt",value:0.969,title:"53.24 ms"},
{axis:"RSA2048 CRT encrypt",value:0.951,title:"4.0 ms"},
{axis:"RSA1024 decrypt",value:0.946,title:"25.95 ms"},
{axis:"RSA1024 encrypt",value:0.935,title:"2.61 ms"},
{axis:"RSA2048 decrypt",value:0.955,title:"147.78 ms"},
{axis:"RSA2048 encrypt",value:0.951,title:"3.99 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);