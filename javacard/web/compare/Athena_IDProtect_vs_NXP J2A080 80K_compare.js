var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.936,title:"23.01 ms"},
{axis:"SHA-1 hash (256B)",value:0.917,title:"5.75 ms"},
{axis:"SHA2-256 hash (256B)",value:0.907,title:"11.83 ms"},
{axis:"AES128 encrypt (256B)",value:0.903,title:"9.9 ms"},
{axis:"AES256 encrypt (256B)",value:0.901,title:"12.8 ms"},
{axis:"3DES encrypt (256B)",value:0.647,title:"72.2 ms"},
{axis:"3DES setKey(192b)",value:0.643,title:"17.74 ms"},
{axis:"AES setKey(128b)",value:0.707,title:"14.32 ms"},
{axis:"AES setKey(256b)",value:0.655,title:"17.06 ms"},
{axis:"SWAES oneblock (16B)",value:0.912,title:"210.07 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.956,title:"0.28 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.28 ms"},
{axis:"ECC 256b genKeyPair",value:0.509,title:"468.15 ms"},
{axis:"ECDSA 256b sign",value:0.261,title:"119.67 ms"},
{axis:"ECDSA 256b verify",value:0.136,title:"202.93 ms"},
{axis:"ECDH 256b",value:0.099,title:"187.1 ms"},
{axis:"RSA1024 CRT decrypt",value:0.758,title:"106.66 ms"},
{axis:"RSA1024 CRT encrypt",value:0.914,title:"3.46 ms"},
{axis:"RSA2048 CRT decrypt",value:0.745,title:"444.09 ms"},
{axis:"RSA2048 CRT encrypt",value:0.892,title:"8.86 ms"},
{axis:"RSA1024 decrypt",value:0.132,title:"415.7 ms"},
{axis:"RSA1024 encrypt",value:0.913,title:"3.48 ms"},
{axis:"RSA2048 decrypt",value:0.188,title:"2639.16 ms"},
{axis:"RSA2048 encrypt",value:0.892,title:"8.85 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.945,title:"19.57 ms"},
{axis:"SHA-1 hash (256B)",value:0.554,title:"30.89 ms"},
{axis:"SHA2-256 hash (256B)",value:0.527,title:"59.95 ms"},
{axis:"AES128 encrypt (256B)",value:0.099,title:"92.16 ms"},
{axis:"AES256 encrypt (256B)",value:0.099,title:"116.91 ms"},
{axis:"3DES encrypt (256B)",value:0.099,title:"184.5 ms"},
{axis:"3DES setKey(192b)",value:0.754,title:"12.22 ms"},
{axis:"AES setKey(128b)",value:0.698,title:"14.8 ms"},
{axis:"AES setKey(256b)",value:0.688,title:"15.44 ms"},
{axis:"SWAES oneblock (16B)",value:0.814,title:"440.96 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.882,title:"0.75 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.924,title:"3.2 ms"},
{axis:"ECC 256b genKeyPair",value:0.404,title:"568.9 ms"},
{axis:"ECDSA 256b sign",value:0.124,title:"141.79 ms"},
{axis:"ECDSA 256b verify",value:0.099,title:"211.54 ms"},
{axis:"ECDH 256b",value:0.234,title:"159.16 ms"},
{axis:"RSA1024 CRT decrypt",value:0.719,title:"123.51 ms"},
{axis:"RSA1024 CRT encrypt",value:0.690,title:"12.43 ms"},
{axis:"RSA2048 CRT decrypt",value:0.630,title:"644.03 ms"},
{axis:"RSA2048 CRT encrypt",value:0.629,title:"30.52 ms"},
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