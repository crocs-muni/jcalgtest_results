var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.963,title:"13.1 ms"},
{axis:"SHA-1 hash (256B)",value:0.930,title:"4.88 ms"},
{axis:"SHA2-256 hash (256B)",value:0.664,title:"42.57 ms"},
{axis:"AES128 encrypt (256B)",value:0.957,title:"4.37 ms"},
{axis:"AES256 encrypt (256B)",value:0.967,title:"4.33 ms"},
{axis:"3DES encrypt (256B)",value:0.974,title:"5.27 ms"},
{axis:"3DES setKey(192b)",value:0.982,title:"0.91 ms"},
{axis:"AES setKey(128b)",value:0.981,title:"0.93 ms"},
{axis:"AES setKey(256b)",value:0.981,title:"0.96 ms"},
{axis:"SWAES oneblock (16B)",value:0.843,title:"373.29 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.646,title:"2.26 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.972,title:"1.19 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.929,title:"31.34 ms"},
{axis:"RSA1024 CRT encrypt",value:0.890,title:"4.42 ms"},
{axis:"RSA2048 CRT decrypt",value:0.906,title:"163.15 ms"},
{axis:"RSA2048 CRT encrypt",value:0.884,title:"9.5 ms"},
{axis:"RSA1024 decrypt",value:0.831,title:"80.87 ms"},
{axis:"RSA1024 encrypt",value:0.889,title:"4.44 ms"},
{axis:"RSA2048 decrypt",value:0.808,title:"624.11 ms"},
{axis:"RSA2048 encrypt",value:0.885,title:"9.48 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.940,title:"21.64 ms"},
{axis:"SHA-1 hash (256B)",value:0.483,title:"35.78 ms"},
{axis:"SHA2-256 hash (256B)",value:0.453,title:"69.32 ms"},
{axis:"AES128 encrypt (256B)",value:0.791,title:"21.41 ms"},
{axis:"AES256 encrypt (256B)",value:0.821,title:"23.2 ms"},
{axis:"3DES encrypt (256B)",value:0.898,title:"20.92 ms"},
{axis:"3DES setKey(192b)",value:0.688,title:"15.48 ms"},
{axis:"AES setKey(128b)",value:0.749,title:"12.28 ms"},
{axis:"AES setKey(256b)",value:0.679,title:"15.88 ms"},
{axis:"SWAES oneblock (16B)",value:0.786,title:"507.6 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.868,title:"0.84 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.914,title:"3.62 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.712,title:"126.93 ms"},
{axis:"RSA1024 CRT encrypt",value:0.666,title:"13.37 ms"},
{axis:"RSA2048 CRT decrypt",value:0.629,title:"645.58 ms"},
{axis:"RSA2048 CRT encrypt",value:0.617,title:"31.5 ms"},
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