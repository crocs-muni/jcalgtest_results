var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.935,title:"23.3 ms"},
{axis:"SHA-1 hash (256B)",value:0.933,title:"4.65 ms"},
{axis:"SHA2-256 hash (256B)",value:0.927,title:"9.3 ms"},
{axis:"AES128 encrypt (256B)",value:0.935,title:"6.68 ms"},
{axis:"AES256 encrypt (256B)",value:0.944,title:"7.28 ms"},
{axis:"3DES encrypt (256B)",value:0.958,title:"8.54 ms"},
{axis:"3DES setKey(192b)",value:0.920,title:"3.97 ms"},
{axis:"AES setKey(128b)",value:0.919,title:"3.95 ms"},
{axis:"AES setKey(256b)",value:0.920,title:"3.98 ms"},
{axis:"SWAES oneblock (16B)",value:0.893,title:"254.66 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.956,title:"0.28 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.985,title:"0.64 ms"},
{axis:"ECC 256b genKeyPair",value:0.783,title:"206.7 ms"},
{axis:"ECDSA 256b sign",value:0.677,title:"52.34 ms"},
{axis:"ECDSA 256b verify",value:0.711,title:"67.91 ms"},
{axis:"ECDH 256b",value:0.693,title:"63.7 ms"},
{axis:"RSA1024 CRT decrypt",value:0.915,title:"37.36 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.938,title:"107.43 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.891,title:"52.34 ms"},
{axis:"RSA1024 encrypt",value:0.911,title:"3.58 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.927,title:"5.97 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.965,title:"12.6 ms"},
{axis:"SHA-1 hash (256B)",value:0.933,title:"4.62 ms"},
{axis:"SHA2-256 hash (256B)",value:0.650,title:"44.36 ms"},
{axis:"AES128 encrypt (256B)",value:0.958,title:"4.31 ms"},
{axis:"AES256 encrypt (256B)",value:0.963,title:"4.82 ms"},
{axis:"3DES encrypt (256B)",value:0.973,title:"5.43 ms"},
{axis:"3DES setKey(192b)",value:0.980,title:"1.0 ms"},
{axis:"AES setKey(128b)",value:0.978,title:"1.06 ms"},
{axis:"AES setKey(256b)",value:0.979,title:"1.06 ms"},
{axis:"SWAES oneblock (16B)",value:0.787,title:"505.13 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.912,title:"0.56 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.968,title:"1.36 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
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