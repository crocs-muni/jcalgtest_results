var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.961,title:"14.06 ms"},
{axis:"SHA-1 hash (256B)",value:0.834,title:"11.5 ms"},
{axis:"SHA2-256 hash (256B)",value:0.832,title:"21.37 ms"},
{axis:"AES128 encrypt (256B)",value:0.372,title:"64.25 ms"},
{axis:"AES256 encrypt (256B)",value:0.374,title:"81.18 ms"},
{axis:"3DES encrypt (256B)",value:0.346,title:"134.0 ms"},
{axis:"3DES setKey(192b)",value:0.776,title:"11.1 ms"},
{axis:"AES setKey(128b)",value:0.718,title:"13.81 ms"},
{axis:"AES setKey(256b)",value:0.715,title:"14.09 ms"},
{axis:"SWAES oneblock (16B)",value:0.859,title:"334.3 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.915,title:"0.54 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.956,title:"1.86 ms"},
{axis:"ECC 256b genKeyPair",value:0.893,title:"102.1 ms"},
{axis:"ECDSA 256b sign",value:0.517,title:"78.14 ms"},
{axis:"ECDSA 256b verify",value:0.487,title:"120.5 ms"},
{axis:"ECDH 256b",value:0.496,title:"104.72 ms"},
{axis:"RSA1024 CRT decrypt",value:0.813,title:"82.22 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"429.18 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);