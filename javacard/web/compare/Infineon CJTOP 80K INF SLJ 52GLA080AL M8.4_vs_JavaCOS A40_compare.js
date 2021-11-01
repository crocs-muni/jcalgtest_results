var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.928,title:"25.72 ms"},
{axis:"SHA-1 hash (256B)",value:0.738,title:"18.16 ms"},
{axis:"SHA2-256 hash (256B)",value:0.706,title:"37.33 ms"},
{axis:"AES128 encrypt (256B)",value:0.748,title:"25.74 ms"},
{axis:"AES256 encrypt (256B)",value:0.763,title:"30.75 ms"},
{axis:"3DES encrypt (256B)",value:0.693,title:"62.8 ms"},
{axis:"3DES setKey(192b)",value:0.860,title:"6.93 ms"},
{axis:"AES setKey(128b)",value:0.870,title:"6.36 ms"},
{axis:"AES setKey(256b)",value:0.858,title:"7.02 ms"},
{axis:"SWAES oneblock (16B)",value:0.382,title:"1467.9 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.649,title:"2.24 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.944,title:"2.37 ms"},
{axis:"ECC 256b genKeyPair",value:0.776,title:"213.9 ms"},
{axis:"ECDSA 256b sign",value:0.099,title:"145.88 ms"},
{axis:"ECDSA 256b verify",value:0.571,title:"100.85 ms"},
{axis:"ECDH 256b",value:0.392,title:"126.18 ms"},
{axis:"RSA1024 CRT decrypt",value:0.792,title:"91.35 ms"},
{axis:"RSA1024 CRT encrypt",value:0.735,title:"10.61 ms"},
{axis:"RSA2048 CRT decrypt",value:0.870,title:"226.59 ms"},
{axis:"RSA2048 CRT encrypt",value:0.793,title:"17.0 ms"},
{axis:"RSA1024 decrypt",value:0.765,title:"112.43 ms"},
{axis:"RSA1024 encrypt",value:0.726,title:"10.96 ms"},
{axis:"RSA2048 decrypt",value:0.785,title:"698.63 ms"},
{axis:"RSA2048 encrypt",value:0.789,title:"17.36 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.974,title:"9.22 ms"},
{axis:"SHA-1 hash (256B)",value:0.941,title:"4.09 ms"},
{axis:"SHA2-256 hash (256B)",value:0.784,title:"27.35 ms"},
{axis:"AES128 encrypt (256B)",value:0.968,title:"3.31 ms"},
{axis:"AES256 encrypt (256B)",value:0.971,title:"3.73 ms"},
{axis:"3DES encrypt (256B)",value:0.978,title:"4.58 ms"},
{axis:"3DES setKey(192b)",value:0.984,title:"0.78 ms"},
{axis:"AES setKey(128b)",value:0.978,title:"1.09 ms"},
{axis:"AES setKey(256b)",value:0.985,title:"0.74 ms"},
{axis:"SWAES oneblock (16B)",value:0.860,title:"333.7 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.934,title:"0.42 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.954,title:"1.92 ms"},
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