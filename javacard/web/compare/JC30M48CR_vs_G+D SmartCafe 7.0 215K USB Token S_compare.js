var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.970,title:"10.92 ms"},
{axis:"SHA-1 hash (256B)",value:0.843,title:"10.84 ms"},
{axis:"SHA2-256 hash (256B)",value:0.787,title:"27.0 ms"},
{axis:"AES128 encrypt (256B)",value:0.969,title:"3.18 ms"},
{axis:"AES256 encrypt (256B)",value:0.972,title:"3.6 ms"},
{axis:"3DES encrypt (256B)",value:0.978,title:"4.42 ms"},
{axis:"3DES setKey(192b)",value:0.783,title:"10.79 ms"},
{axis:"AES setKey(128b)",value:0.989,title:"0.56 ms"},
{axis:"AES setKey(256b)",value:0.988,title:"0.58 ms"},
{axis:"SWAES oneblock (16B)",value:0.905,title:"226.06 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.947,title:"0.34 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.981,title:"0.78 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.933,title:"29.33 ms"},
{axis:"RSA1024 CRT encrypt",value:0.908,title:"3.68 ms"},
{axis:"RSA2048 CRT decrypt",value:0.911,title:"155.55 ms"},
{axis:"RSA2048 CRT encrypt",value:0.897,title:"8.49 ms"},
{axis:"RSA1024 decrypt",value:0.843,title:"75.08 ms"},
{axis:"RSA1024 encrypt",value:0.909,title:"3.66 ms"},
{axis:"RSA2048 decrypt",value:0.821,title:"581.88 ms"},
{axis:"RSA2048 encrypt",value:0.897,title:"8.43 ms"},
],
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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);