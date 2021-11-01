var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.950,title:"18.03 ms"},
{axis:"SHA-1 hash (256B)",value:0.846,title:"10.67 ms"},
{axis:"SHA2-256 hash (256B)",value:0.692,title:"39.07 ms"},
{axis:"AES128 encrypt (256B)",value:0.788,title:"21.7 ms"},
{axis:"AES256 encrypt (256B)",value:0.827,title:"22.42 ms"},
{axis:"3DES encrypt (256B)",value:0.963,title:"7.67 ms"},
{axis:"3DES setKey(192b)",value:0.783,title:"10.8 ms"},
{axis:"AES setKey(128b)",value:0.853,title:"7.21 ms"},
{axis:"AES setKey(256b)",value:0.769,title:"11.46 ms"},
{axis:"SWAES oneblock (16B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.0,title:"NS"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.842,title:"69.55 ms"},
{axis:"RSA1024 CRT encrypt",value:0.824,title:"7.04 ms"},
{axis:"RSA2048 CRT decrypt",value:0.731,title:"469.21 ms"},
{axis:"RSA2048 CRT encrypt",value:0.841,title:"13.08 ms"},
{axis:"RSA1024 decrypt",value:0.519,title:"230.24 ms"},
{axis:"RSA1024 encrypt",value:0.825,title:"7.02 ms"},
{axis:"RSA2048 decrypt",value:0.492,title:"1651.24 ms"},
{axis:"RSA2048 encrypt",value:0.840,title:"13.18 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.993,title:"2.45 ms"},
{axis:"SHA-1 hash (256B)",value:0.947,title:"3.69 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.745,title:"26.05 ms"},
{axis:"AES256 encrypt (256B)",value:0.757,title:"31.52 ms"},
{axis:"3DES encrypt (256B)",value:0.738,title:"53.71 ms"},
{axis:"3DES setKey(192b)",value:0.811,title:"9.4 ms"},
{axis:"AES setKey(128b)",value:0.810,title:"9.28 ms"},
{axis:"AES setKey(256b)",value:0.807,title:"9.54 ms"},
{axis:"SWAES oneblock (16B)",value:0.953,title:"112.38 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.928,title:"0.46 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.779,title:"9.32 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.099,title:"396.48 ms"},
{axis:"RSA1024 CRT encrypt",value:0.546,title:"18.21 ms"},
{axis:"RSA2048 CRT decrypt",value:0.099,title:"1569.15 ms"},
{axis:"RSA2048 CRT encrypt",value:0.460,title:"44.42 ms"},
{axis:"RSA1024 decrypt",value:0.163,title:"401.04 ms"},
{axis:"RSA1024 encrypt",value:0.547,title:"18.12 ms"},
{axis:"RSA2048 decrypt",value:0.632,title:"1196.79 ms"},
{axis:"RSA2048 encrypt",value:0.464,title:"44.07 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);