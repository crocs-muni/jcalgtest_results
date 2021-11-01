var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.884,title:"41.4 ms"},
{axis:"SHA-1 hash (256B)",value:0.099,title:"62.4 ms"},
{axis:"SHA2-256 hash (256B)",value:0.099,title:"114.26 ms"},
{axis:"AES128 encrypt (256B)",value:0.835,title:"16.9 ms"},
{axis:"AES256 encrypt (256B)",value:0.868,title:"17.1 ms"},
{axis:"3DES encrypt (256B)",value:0.711,title:"59.13 ms"},
{axis:"3DES setKey(192b)",value:0.692,title:"15.3 ms"},
{axis:"AES setKey(128b)",value:0.763,title:"11.62 ms"},
{axis:"AES setKey(256b)",value:0.673,title:"16.2 ms"},
{axis:"SWAES oneblock (16B)",value:0.718,title:"669.64 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.826,title:"1.11 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.904,title:"4.04 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.585,title:"182.74 ms"},
{axis:"RSA1024 CRT encrypt",value:0.525,title:"19.02 ms"},
{axis:"RSA2048 CRT decrypt",value:0.520,title:"836.66 ms"},
{axis:"RSA2048 CRT encrypt",value:0.653,title:"28.53 ms"},
{axis:"RSA1024 decrypt",value:0.145,title:"409.75 ms"},
{axis:"RSA1024 encrypt",value:0.527,title:"18.93 ms"},
{axis:"RSA2048 decrypt",value:0.181,title:"2659.69 ms"},
{axis:"RSA2048 encrypt",value:0.651,title:"28.68 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.906,title:"33.77 ms"},
{axis:"SHA-1 hash (256B)",value:0.822,title:"12.35 ms"},
{axis:"SHA2-256 hash (256B)",value:0.823,title:"22.39 ms"},
{axis:"AES128 encrypt (256B)",value:0.886,title:"11.65 ms"},
{axis:"AES256 encrypt (256B)",value:0.892,title:"14.02 ms"},
{axis:"3DES encrypt (256B)",value:0.940,title:"12.24 ms"},
{axis:"3DES setKey(192b)",value:0.369,title:"31.35 ms"},
{axis:"AES setKey(128b)",value:0.520,title:"23.48 ms"},
{axis:"AES setKey(256b)",value:0.488,title:"25.33 ms"},
{axis:"SWAES oneblock (16B)",value:0.889,title:"263.92 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.926,title:"0.47 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.955,title:"1.9 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.663,title:"148.12 ms"},
{axis:"RSA1024 CRT encrypt",value:0.772,title:"9.15 ms"},
{axis:"RSA2048 CRT decrypt",value:0.635,title:"635.92 ms"},
{axis:"RSA2048 CRT encrypt",value:0.781,title:"18.02 ms"},
{axis:"RSA1024 decrypt",value:0.368,title:"302.93 ms"},
{axis:"RSA1024 encrypt",value:0.771,title:"9.15 ms"},
{axis:"RSA2048 decrypt",value:0.377,title:"2023.08 ms"},
{axis:"RSA2048 encrypt",value:0.781,title:"18.04 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);