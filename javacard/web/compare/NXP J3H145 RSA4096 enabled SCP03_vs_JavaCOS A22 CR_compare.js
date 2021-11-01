var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.996,title:"1.51 ms"},
{axis:"SHA-1 hash (256B)",value:0.881,title:"8.26 ms"},
{axis:"SHA2-256 hash (256B)",value:0.929,title:"8.96 ms"},
{axis:"AES128 encrypt (256B)",value:0.904,title:"9.86 ms"},
{axis:"AES256 encrypt (256B)",value:0.921,title:"10.2 ms"},
{axis:"3DES encrypt (256B)",value:0.954,title:"9.48 ms"},
{axis:"3DES setKey(192b)",value:0.099,title:"44.74 ms"},
{axis:"AES setKey(128b)",value:0.099,title:"44.09 ms"},
{axis:"AES setKey(256b)",value:0.099,title:"44.61 ms"},
{axis:"SWAES oneblock (16B)",value:0.864,title:"321.96 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.929,title:"0.45 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.958,title:"1.76 ms"},
{axis:"ECC 256b genKeyPair",value:0.682,title:"303.8 ms"},
{axis:"ECDSA 256b sign",value:0.638,title:"58.69 ms"},
{axis:"ECDSA 256b verify",value:0.776,title:"52.53 ms"},
{axis:"ECDH 256b",value:0.725,title:"57.18 ms"},
{axis:"RSA1024 CRT decrypt",value:0.864,title:"59.89 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.884,title:"202.26 ms"},
{axis:"RSA2048 CRT encrypt",value:0.858,title:"11.65 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);