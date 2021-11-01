var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.970,title:"10.63 ms"},
{axis:"SHA-1 hash (256B)",value:0.946,title:"3.75 ms"},
{axis:"SHA2-256 hash (256B)",value:0.724,title:"35.06 ms"},
{axis:"AES128 encrypt (256B)",value:0.968,title:"3.26 ms"},
{axis:"AES256 encrypt (256B)",value:0.972,title:"3.62 ms"},
{axis:"3DES encrypt (256B)",value:0.979,title:"4.3 ms"},
{axis:"3DES setKey(192b)",value:0.987,title:"0.66 ms"},
{axis:"AES setKey(128b)",value:0.989,title:"0.56 ms"},
{axis:"AES setKey(256b)",value:0.987,title:"0.62 ms"},
{axis:"SWAES oneblock (16B)",value:0.904,title:"228.7 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.940,title:"0.38 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.982,title:"0.74 ms"},
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