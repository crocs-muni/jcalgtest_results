var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.980,title:"7.12 ms"},
{axis:"SHA-1 hash (256B)",value:0.933,title:"4.64 ms"},
{axis:"SHA2-256 hash (256B)",value:0.772,title:"28.92 ms"},
{axis:"AES128 encrypt (256B)",value:0.957,title:"4.41 ms"},
{axis:"AES256 encrypt (256B)",value:0.963,title:"4.8 ms"},
{axis:"3DES encrypt (256B)",value:0.972,title:"5.76 ms"},
{axis:"3DES setKey(192b)",value:0.979,title:"1.06 ms"},
{axis:"AES setKey(128b)",value:0.978,title:"1.07 ms"},
{axis:"AES setKey(256b)",value:0.978,title:"1.08 ms"},
{axis:"SWAES oneblock (16B)",value:0.828,title:"408.21 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.897,title:"0.66 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.974,title:"1.08 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.741,title:"10.37 ms"},
{axis:"RSA2048 CRT decrypt",value:0.883,title:"203.59 ms"},
{axis:"RSA2048 CRT encrypt",value:0.778,title:"18.29 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.741,title:"10.36 ms"},
{axis:"RSA2048 decrypt",value:0.802,title:"643.66 ms"},
{axis:"RSA2048 encrypt",value:0.778,title:"18.27 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.996,title:"1.45 ms"},
{axis:"SHA-1 hash (256B)",value:0.886,title:"7.93 ms"},
{axis:"SHA2-256 hash (256B)",value:0.932,title:"8.63 ms"},
{axis:"AES128 encrypt (256B)",value:0.912,title:"9.01 ms"},
{axis:"AES256 encrypt (256B)",value:0.928,title:"9.33 ms"},
{axis:"3DES encrypt (256B)",value:0.958,title:"8.54 ms"},
{axis:"3DES setKey(192b)",value:0.834,title:"8.25 ms"},
{axis:"AES setKey(128b)",value:0.839,title:"7.89 ms"},
{axis:"AES setKey(256b)",value:0.831,title:"8.38 ms"},
{axis:"SWAES oneblock (16B)",value:0.870,title:"309.07 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.928,title:"0.46 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.961,title:"1.63 ms"},
{axis:"ECC 256b genKeyPair",value:0.836,title:"156.3 ms"},
{axis:"ECDSA 256b sign",value:0.652,title:"56.29 ms"},
{axis:"ECDSA 256b verify",value:0.786,title:"50.32 ms"},
{axis:"ECDH 256b",value:0.735,title:"55.08 ms"},
{axis:"RSA1024 CRT decrypt",value:0.870,title:"57.25 ms"},
{axis:"RSA1024 CRT encrypt",value:0.854,title:"5.87 ms"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.811,title:"90.63 ms"},
{axis:"RSA1024 encrypt",value:0.854,title:"5.86 ms"},
{axis:"RSA2048 decrypt",value:0.842,title:"514.0 ms"},
{axis:"RSA2048 encrypt",value:0.864,title:"11.18 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);