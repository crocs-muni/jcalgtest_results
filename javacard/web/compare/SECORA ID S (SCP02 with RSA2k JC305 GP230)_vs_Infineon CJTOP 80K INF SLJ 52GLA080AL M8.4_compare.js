var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.982,title:"6.38 ms"},
{axis:"SHA-1 hash (256B)",value:0.842,title:"10.93 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.985,title:"1.53 ms"},
{axis:"AES256 encrypt (256B)",value:0.992,title:"1.06 ms"},
{axis:"3DES encrypt (256B)",value:0.995,title:"1.1 ms"},
{axis:"3DES setKey(192b)",value:0.648,title:"17.49 ms"},
{axis:"AES setKey(128b)",value:0.663,title:"16.5 ms"},
{axis:"AES setKey(256b)",value:0.630,title:"18.32 ms"},
{axis:"SWAES oneblock (16B)",value:0.876,title:"294.89 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.972,title:"0.18 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.994,title:"0.26 ms"},
{axis:"ECC 256b genKeyPair",value:1.737,title:"-703.0 ms"},
{axis:"ECDSA 256b sign",value:0.801,title:"32.15 ms"},
{axis:"ECDSA 256b verify",value:0.942,title:"13.7 ms"},
{axis:"ECDH 256b",value:1.242,title:"-50.18 ms"},
{axis:"RSA1024 CRT decrypt",value:0.939,title:"26.72 ms"},
{axis:"RSA1024 CRT encrypt",value:1.255,title:"-10.22 ms"},
{axis:"RSA2048 CRT decrypt",value:0.962,title:"65.82 ms"},
{axis:"RSA2048 CRT encrypt",value:1.109,title:"-8.98 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.72 ms"},
{axis:"RSA1024 encrypt",value:1.133,title:"-5.34 ms"},
{axis:"RSA2048 decrypt",value:0.932,title:"222.39 ms"},
{axis:"RSA2048 encrypt",value:1.050,title:"-4.08 ms"},
],
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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);