var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.931,title:"24.9 ms"},
{axis:"SHA-1 hash (256B)",value:0.748,title:"17.42 ms"},
{axis:"SHA2-256 hash (256B)",value:0.719,title:"35.58 ms"},
{axis:"3DES encrypt (256B)",value:0.700,title:"61.49 ms"},
{axis:"AES128 encrypt (256B)",value:0.750,title:"25.53 ms"},
{axis:"AES256 encrypt (256B)",value:0.760,title:"31.18 ms"},
{axis:"3DES setKey(192b)",value:0.867,title:"6.61 ms"},
{axis:"AES setKey(128b)",value:0.876,title:"6.08 ms"},
{axis:"AES setKey(256b)",value:0.866,title:"6.65 ms"},
{axis:"SWAES oneblock (16B)",value:0.429,title:"1356.0 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.666,title:"2.13 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.946,title:"2.27 ms"},
{axis:"RSA1024 CRT decrypt",value:0.768,title:"101.92 ms"},
{axis:"RSA1024 CRT encrypt",value:0.724,title:"11.06 ms"},
{axis:"RSA2048 CRT decrypt",value:0.861,title:"242.91 ms"},
{axis:"RSA2048 CRT encrypt",value:0.791,title:"17.16 ms"},
{axis:"RSA1024 decrypt",value:0.750,title:"119.97 ms"},
{axis:"RSA1024 encrypt",value:0.725,title:"11.02 ms"},
{axis:"RSA2048 decrypt",value:0.788,title:"689.56 ms"},
{axis:"RSA2048 encrypt",value:0.792,title:"17.13 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.961,title:"13.84 ms"},
{axis:"SHA-1 hash (256B)",value:0.833,title:"11.57 ms"},
{axis:"SHA2-256 hash (256B)",value:0.832,title:"21.26 ms"},
{axis:"3DES encrypt (256B)",value:0.350,title:"133.08 ms"},
{axis:"AES128 encrypt (256B)",value:0.375,title:"63.77 ms"},
{axis:"AES256 encrypt (256B)",value:0.380,title:"80.48 ms"},
{axis:"3DES setKey(192b)",value:0.779,title:"10.99 ms"},
{axis:"AES setKey(128b)",value:0.721,title:"13.67 ms"},
{axis:"AES setKey(256b)",value:0.717,title:"13.99 ms"},
{axis:"SWAES oneblock (16B)",value:0.860,title:"331.46 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.919,title:"0.52 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.956,title:"1.86 ms"},
{axis:"RSA1024 CRT decrypt",value:0.815,title:"81.32 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.756,title:"424.52 ms"},
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