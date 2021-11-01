var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.961,title:"13.8 ms"},
{axis:"SHA-1 hash (256B)",value:0.835,title:"11.45 ms"},
{axis:"SHA2-256 hash (256B)",value:0.834,title:"21.05 ms"},
{axis:"3DES encrypt (256B)",value:0.938,title:"12.8 ms"},
{axis:"AES128 encrypt (256B)",value:0.899,title:"10.33 ms"},
{axis:"AES256 encrypt (256B)",value:0.913,title:"11.35 ms"},
{axis:"3DES setKey(192b)",value:0.778,title:"11.04 ms"},
{axis:"AES setKey(128b)",value:0.777,title:"10.9 ms"},
{axis:"AES setKey(256b)",value:0.774,title:"11.18 ms"},
{axis:"SWAES oneblock (16B)",value:0.861,title:"329.71 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.915,title:"0.54 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.956,title:"1.85 ms"},
{axis:"RSA1024 CRT decrypt",value:0.814,title:"81.92 ms"},
{axis:"RSA1024 CRT encrypt",value:0.794,title:"8.26 ms"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"428.28 ms"},
{axis:"RSA2048 CRT encrypt",value:0.757,title:"19.97 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.970,title:"10.92 ms"},
{axis:"SHA-1 hash (256B)",value:0.843,title:"10.84 ms"},
{axis:"SHA2-256 hash (256B)",value:0.787,title:"27.0 ms"},
{axis:"3DES encrypt (256B)",value:0.978,title:"4.42 ms"},
{axis:"AES128 encrypt (256B)",value:0.969,title:"3.18 ms"},
{axis:"AES256 encrypt (256B)",value:0.972,title:"3.6 ms"},
{axis:"3DES setKey(192b)",value:0.783,title:"10.79 ms"},
{axis:"AES setKey(128b)",value:0.989,title:"0.56 ms"},
{axis:"AES setKey(256b)",value:0.988,title:"0.58 ms"},
{axis:"SWAES oneblock (16B)",value:0.905,title:"226.06 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.947,title:"0.34 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.981,title:"0.78 ms"},
{axis:"RSA1024 CRT decrypt",value:0.933,title:"29.33 ms"},
{axis:"RSA1024 CRT encrypt",value:0.908,title:"3.68 ms"},
{axis:"RSA2048 CRT decrypt",value:0.911,title:"155.55 ms"},
{axis:"RSA2048 CRT encrypt",value:0.897,title:"8.49 ms"},
{axis:"RSA1024 decrypt",value:0.843,title:"75.08 ms"},
{axis:"RSA1024 encrypt",value:0.909,title:"3.66 ms"},
{axis:"RSA2048 decrypt",value:0.821,title:"581.88 ms"},
{axis:"RSA2048 encrypt",value:0.897,title:"8.43 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);