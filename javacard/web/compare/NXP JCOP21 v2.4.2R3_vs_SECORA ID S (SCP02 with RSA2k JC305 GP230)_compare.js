var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
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
[
{axis:"SECURE RANDOM (256B)",value:0.982,title:"6.38 ms"},
{axis:"SHA-1 hash (256B)",value:0.842,title:"10.93 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.985,title:"1.53 ms"},
{axis:"AES256 encrypt (256B)",value:0.992,title:"1.06 ms"},
{axis:"3DES encrypt (256B)",value:0.995,title:"1.1 ms"},
{axis:"3DES setKey(192b)",value:0.648,title:"17.49 ms"},
{axis:"AES setKey(128b)",value:0.663,title:"16.5 ms"},
{axis:"AES setKey(256b)",value:0.630,title:"18.32 ms"},
{axis:"SWAES oneblock (16B)",value:0.876,title:"294.89 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.972,title:"0.18 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.994,title:"0.26 ms"},
{axis:"ECC 256b genKeyPair",value:1.737,title:"-703.0 ms"},
{axis:"ECDSA 256b sign",value:0.801,title:"32.15 ms"},
{axis:"ECDSA 256b verify",value:0.942,title:"13.7 ms"},
{axis:"ECDH 256b",value:1.242,title:"-50.18 ms"},
{axis:"RSA1024 CRT decrypt",value:0.939,title:"26.72 ms"},
{axis:"RSA1024 CRT encrypt",value:1.255,title:"-10.22 ms"},
{axis:"RSA2048 CRT decrypt",value:0.962,title:"65.82 ms"},
{axis:"RSA2048 CRT encrypt",value:1.109,title:"-8.98 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.72 ms"},
{axis:"RSA1024 encrypt",value:1.133,title:"-5.34 ms"},
{axis:"RSA2048 decrypt",value:0.932,title:"222.39 ms"},
{axis:"RSA2048 encrypt",value:1.050,title:"-4.08 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);