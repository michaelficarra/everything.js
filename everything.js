/* this file contains all grammatical productions in ECMA-262 edition 5.1 */
// most unicode and whitespace characters have been omitted

var $, _, \u0078, x$, x_, x\u0030, xa, x0, x0a, x0123456789,
  qwertyuiopasdfghjklzxcvbnm, QWERTYUIOPASDFGHJKLZXCVBNM;

null; true; false;

0; 00; 1234567890; 01234567;
0.; 0.00; 10.00; .0; .00
0e0; 0.e0; 0.00e+0; .00e-0;
0E0; 0.E0; 0.00E+0; .00E-0;
0x0; 0x0123456789abcdefABCDEF;
0X0; 0X0123456789abcdefABCDEF;

""; "'"; "\'\"\\\b\f\n\r\t\v\0";
"\x01\x23\x45\x67\x89\xAB\xCD\xEF";
"\u0123\u4567\u89AB\uCDEF";

''; '"'; '\'\"\\\b\f\n\r\t\v\0';
'\x01\x23\x45\x67\x89\xAB\xCD\xEF';
'\u0123\u4567\u89AB\uCDEF';

/x/; /|/; /|||/;
/^$\b\B/; /(?=(?!(?:(.))))/;
/a.\f\n\r\t\v\0\[\-\/\\\x00\u0000/; /\d\D\s\S\w\W/;
/\ca\cb\cc\cd\ce\cf\cg\ch\ci\cj\ck\cl\cm\cn\co\cp\cq\cr\cs\ct\cu\cv\cw\cx\cy\cz/;
/\cA\cB\cC\cD\cE\cF\cG\cH\cI\cJ\cK\cL\cM\cN\cO\cP\cQ\cR\cS\cT\cU\cV\cW\cX\cY\cZ/;
/[a-z-]/; /[^\b\-^]/; /[/\]\\]/;
/./i; /./g; /./m; /./igm;
/.*/; /.*?/; /.+/; /.+?/; /.?/; /.??/;
/.{0}/; /.{0,}/; /.{0,0}/;

this;

x;

[]; [,]; [0]; [0,]; [0,0]; [0,0,]; [0,,0]; [,,];

({}); ({x:0}); ({x:0,y:0}); ({x:0,}); ({x:0,y:0,});
({0:0}); ({0.:0}); ({0.0:0}); ({.0:0}); ({0e0:0}); ({0x0:0});
({get x() {}, set x(y) {}});

0..a; .0.a; 0.0.a; 0e0.a; 0x0.a;
"".a; ''.a; /x/.a; /x/i.a;
this.a; [].a; ({}).a; (function(){}).a;

0[0]; 0.[0]; .0[a]; 0.0[0]; 0e0[0]; 0x0[0];
""[0]; ''[0]; /x/[0]; /x/i[0];
this[0]; [][0]; {}[0]; (function(){})[0];

x = function f(){ return f; }; x[0] = x; x.a = x;
new x(); new new x()(); new new new x()()();
new x[0](); new x.a(); new x[0].a(); new x.a[0]();

new x; new new x; new new x();

new new x().a; new new x()[0];

x++; x--;

delete x; void x; typeof x; ++x; --x;
+x; + +x; -x; - -x; ~x; ~~x; !x; !!x;
+x++; -x.a--; + ++x; - --x; +-+-x;

0*0; 0/0; 0%0;

0+0; 0-0; 0- -0; 0+ +0; 0 - - --x; 0 + + ++x;

0<<0; 0>>0; 0>>>0;

0<0; 0>0; 0<=0; 0>=0;
0 instanceof function(){};
0 in {};

0==0; 0!=0; 0===0; 0!==0;

0&0; 0^0; 0|0; 0&&0; 0||0;

0?0:0; 0?0?0:0:0; 0||0?x=0:x=0;

x=0; x*=0; x/=0; x%=0; x+=0; x-=0;
x<<=0; x>>=0; x>>>=0; x&=0; x^=0; x|=0;

0,0; 0,0,0; x=0,x=0;


{} {;} {0} {0;} {0;0} {0;0;}

var x; var x,y; var x,y,z;
var x=0; var x=0,y; var x,y=0; var x=0,y=0;

;

if(0); if(0);else;

do;while(0);
while(0);
for(;;)break; for(0;0;0); for((0 in[]);0;);
for(var a;;)break; for(var a,b;0;0);
for(var a=0;;)break; for(var a=(0 in[]);0;);
for(x in{}); for(var x in{});
for(var x=[]in{}); for(var x=(0 in[])in{});

for(;0;)continue; x:for(;0;)continue x;

for(;;)break; x:for(;;)break x;
switch(0){case 0:break;}

function f(){ return; }
function f(){ return 0; }

with(0);

switch(0){} switch(0){case 0:} switch(0){case 0:case 0:}
switch(0){default:} switch(0){case 0:default:case 0:}
switch(0){case 0:;} switch(0){case 0:;;}
switch(0){default:;} switch(0){default:;;}

x:; x:y:;

try { throw 0; }catch(x){}

try{}catch(x){}
try{}finally{}
try{}catch(x){}finally{}

debugger;

function f(){}
function f(x){}
function f(x,y){}
function f(){ function f(){} }

(function(){});
(function(x){});
(function(x,y){});
(function(){ function f(){} });
(function f(){});
(function f(x){});
(function f(x,y){});
(function f(){ function f(){} });
