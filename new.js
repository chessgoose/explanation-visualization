var p, t, u, v, x, y, z, primes;

function L(a, b) {
    var c = a * v
      , d = b * v;
    return Math.acos(Math.cos(c) * Math.cos(d) + Math.sin(c) * Math.sin(d)) / v
}
function M(a, b, c, d, i, h, q, r, k) {
    if (i >= d.length)
        a.push(h),
        b.push(q),
        c.push(r);
    else {
        var e = d[i]
          , m = i + 1 < d.length ? d[i + 1] : 0
          , l = 0.4 * r * v / (e + 3.4);
        m && (l *= 0.93,
        2 === m && (l *= 1.2),
        3 === m && 7 >= e && (l *= 1.12),
        4 === m && 7 >= e && (l *= 1.08));
        var r = r - l, j;
        j = k + (4 === e ? -t : -u);
        for (var s = v / e, f = 0; f < e; f++) {
            var g = j + f * s;
            M(a, b, c, d, i + 1, h + r * Math.cos(g), q + r * Math.sin(g), l, 2 === m ? g - u : k)
        }
    }
}
/*N(a), O(a), P(a) decide order of factors*/
function N(a) {
    if (1 >= a)
        return [];
    var b = O(a)
      , a = N(a / b);
    a.push(b);
    return a
}
function O(a) {
    if (0 === a % 4)
        return 4;
    if (0 === a % 2)
        return 2;
    for (var b = Math.sqrt(a) + 1 | 0, c = 3; c <= b; c += 2)
        if (0 === a % c)
            return c;
    return a
}
function P(a, b) {
    var c;
    if (1 > b.length)
        c = "";
    else if (1 >= b.length && 4 !== b[0])
        c = "prime";
    else {
        c = "";
		for (var d = 0; d < b.length; d++) {
            "" !== c && (c += '<span class="times">&times;</span>');
            var i = b[d];
            c = 4 == i ? c + '2<span class="times">&times;</span>2' : c + i
        }
    }
    return '<span class="number">' + a + '</span><br><span class="decomposition">' + c + "</span>"
}

var primes = [];
var mode = 1; //0 is w/o text, 2 is w/ old text, 1 is w/ new text

primeCombos = function(num){
	var d = 2;
	while (d*d <= num){        
		var q = Math.floor(num / d);
		var r = num % d;
		var combo = [d, q, r];
		primes.push(combo);
		d++;
	}
	if (mode == 1){
		var finalQ = Math.floor(num / d);
		var finalR = num % d;
		var combo = [d, finalQ, finalR];
		primes.push(combo);
	}
	return primes;
}

var width, height;
var primeWidth, primeHeight;
var e;
var currNum;
var isPrime;
var primeVis = false;
var m, l;
var k;
var pRad;

function Q(num) {
	currNum = num;
	g = N(num);
	isPrime = (1 >= g.length) //Known bug: 4 is prime
	primeVis = (isPrime == true && num > 10);
    var a, b = 0, c = a = 0, d = 0;
    try {
        b = window.innerWidth
    } catch (i) {}
    try {
        a = window.innerHeight
    } catch (h) {}
    try {
        c = screen.availWidth
    } catch (q) {}
    try {
        d = screen.availHeight
    } catch (r) {}
    d && (d -= 70);
    b = b ? b : c;
    a = a ? a : d;
    b || (b = 974);
    a || (a = 718);
    a = Math.min(b, a);
    a = Math.max(a, 350);
    k = Math.round(0.45 * (a - 90))
      , k = Math.max(k, 50)
      , k = Math.min(k, 600)
      , e = 2 * k + 1;
	var margin = Math.round(-e / 2) + "px";
	var maxRadius;
	if (primeVis){
		primes = [];
		primes = primeCombos(num);
		primeHeight = window.innerHeight - 70;
		primeWidth = window.innerWidth - 50;
		var total = 0;
		for (var i = 0; i < primes.length; i++){
			total += (primes[i][0] + 2);
		}
		total = total - 1;
		console.log(primes);
		console.log(total);
		pRad = (primeWidth - 200)/total;
		pRad = Math.min(pRad, (primeHeight - 50)/(primes[0][1]));
		maxWidth = 50 + (total * pRad);
		primeWidth = Math.min(maxWidth, primeWidth);
		var marginthing = -(primeWidth)/2;
		var phmargin = -(primeHeight)/2;
		var pwmargin = -(primeWidth)/2;
	}
	if (!primeVis){
		if (e != canvas.width || e != canvas.height) {
			canvas.width = e,
			canvas.height = e,
			a = margin,
			canvas.style.marginLeft = a,
			canvas.style.marginTop = a;
			width = e;
			height = e;
		}
	} else {
		if (primeWidth != canvas.width || primeHeight != canvas.height) {
			canvas.width = primeWidth;
			canvas.height = primeHeight;
			canvas.style.marginLeft = pwmargin + "px";
			canvas.style.marginTop = phmargin + "px";
			height = primeHeight;
			width = primeWidth;
		}
	}
	m = height/2, l = width/2;
	drawCanvas(currNum);
}

drawCanvas = function(num){
	a = [];
    d = [];
    b = [];
	if (!primeVis){
		M(a, d, b, g, 0, m, l, k * (1 - 0.6 / (num + 1)), 0);
	}
	factorization = document.getElementById("status");
    factorization.innerHTML = P(num, g);
	p.clearRect(0, 0, width, height);
	j = a.length;
	s = 1 / j;
	if (!primeVis){
		for (j -= 1; 0 <= j; j--) {
			var E;
			w = b[j];
			l = a[j];
			m = j * s;
			E = d[j];
			p.fillStyle = z[m * z.length | 0];
			p.beginPath();
			p.arc(l, E, w, 0, v, !0);
			p.fill();
		}
	} else {
		//var w = (primeHeight * 0.9)/( 3* primes[0][1]);
		var w = pRad / 3;
		var rectX = 30, rectY = w * 2;		//replace w/ 3?, note that for large # cut off
		var s = w * 3;
		var size;
		size = 25 - Math.sqrt(num * 0.95);
		p.font = size + "px Arial";
		var textHeight = p.measureText('M').width;
		//Run time - O(n^3 + n^2) (slow for large #s)
		for (var i = 0; i < primes.length; i++){
			for (var q = 0; q < primes[i][0]; q++){
				for (var r = 0; r < primes[i][1]; r++){
					p.fillStyle = z[q * z.length / primes[i][0] | 0];
					p.beginPath();
					p.arc(rectX + (q * s), rectY + (r * s), w, 0, v, !0);
					p.fill();
					p.closePath();
				}
			}
			if (mode != 0 && num < 500){
				p.fillStyle = "gray";
				p.textAlign = "center";
				if (mode == 1){
					var sumText = primes[i][0] + "×" + primes[i][1] + " + " + primes[i][2];
					p.fillText(sumText, (rectX + ((primes[i][0] - 1) * s / 2)),(rectY + (primes[i][1] - 1) * s + 2 * w + textHeight));
				} else {
					p.fillText(primes[i][0] + "×" + primes[i][1], (rectX + ((primes[i][0] - 1) * s / 2)),(rectY + (primes[i][1] - 1) * s + 2 * w + 10));
				}
			}
			for (var x = 0; x < primes[i][2]; x++){
				p.fillStyle = "#FF0000";
				p.beginPath();
				p.arc(rectX + (primes[i][0] * s), rectY + (x * s), w, 0, v, !0);
				p.fill();
				p.closePath();
			}
			rectX = rectX + (primes[i][0] + 2) * s;
		}
	}
}

assignColors = function(){
	t = Math.PI / 4;
    u = Math.PI / 2;
    v = 2 * Math.PI;
    x = Math.PI;
    for (var a = 1E3, b = [], c = 0, a = 1E3; c < a; c++) {
        var d = c / a + 0.9
              , i = 766.5 * Math.max(1 / 3 - L(1 / 6, d), 0)
              , h = 766.5 * Math.max(1 / 3 - L(0.5, d), 0)
              , d = 766.5 * Math.max(1 / 3 - L(5 / 6, d), 0)
              , q = Math.sqrt(4E4 / (2 * i * i + 3 * h * h + d * d))
              , i = Math.round(i * q)
              , h = Math.round(h * q)
              , d = Math.round(d * q);
            b[c] = "rgb(" + i + "," + h + "," + d + ")"
    }
	z = b;
};

drawNum = function(){
	box = document.getElementById("num");
	input = box.value;
	canvas = document.getElementById("canvas");
    p = canvas.getContext("2d");
	number = parseInt(input);
	if (!isNaN(input) && input <= 10000){
		if (input > 1000 && isPrime == true){
			box.value = "Prime renderings are slow for large #s";
		}
		Q(parseInt(input));
	} else {
		box.value = "";
		box.placeholder = "NaN or > 10K";
	}	
};

    