var p, t, u, v, x, y, z;

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
function Q(num) {
	g = N(num).reverse();
	var isPrime = (1 >= g.length) //Known bug: 4 is prime
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
    var k = Math.round(0.45 * (a - 90))
      , k = Math.max(k, 50)
      , k = Math.min(k, 600)
      , e = 2 * k + 1;
    if (e != canvas.width || e != canvas.height) {
        canvas.width = e,
        canvas.height = e,
        a = Math.round(-e / 2) + "px",
        canvas.style.marginLeft = a,
        canvas.style.marginTop = a;
	}
	console.log(e);
    var m = e / 2
      , l = e / 2;
	/*f = a - 500 - 1E3 * 1
      , f = 3 * (f / 1E3)
      , f = Math.max(f, 0)
      , f = Math.min(f, 1); */
	  //we need m
	f = 0; //transperancy of next one
    //f = 0.5 - 0.5 * Math.cos(f * Math.PI);
    a = [];
    d = [];
    b = [];
    M(a, d, b, g, 0, m, l, k * (1 - 0.6 / (num + 1)), 0);
    k = document.getElementById("status");
    k.innerHTML = P(num, g);
    p.clearRect(0, 0, e, e);
	e = f;
	j = a.length;
	s = 1 / j;
	if (isPrime == false || num < 5){
		for (j -= 1; 0 <= j; j--) {
			var E;
			w = b[j];
			l = a[j];
			m = j * s;
			E = d[j];
			p.fillStyle = z[m * z.length | 0];
			p.beginPath();
			p.arc(l, E, w, 0, v, !0);
			p.fill()
		}
	} else {
		var n = 5 - (Math.floor(Math.log10(num)));
		n = (num > 5000) ? 1.5 : n;
		w = Math.max(b[0], n);
		var square = Math.floor(Math.sqrt(num));
		var s = w * 3;
		var rem = num % (square ** 2);
		var startX = m - (s * square / 2);
		var startY = l - (s * square / 2);
		console.log(startX);
		console.log(startY);
		for (var q = 0; q < square; q++){
			for (var r = 0; r < square; r++){
				p.fillStyle = z[r * z.length / square | 0];
				p.beginPath();
				p.arc(startX + (q * s), startY + (r * s), w, 0, v, !0);
				p.fill()
			}
		}
		for (var i = 0; i < rem; i++){
			p.fillStyle = "#FF0000";
			p.beginPath();
			p.arc(startX + ((square + Math.floor(i / square)) * s), startY + ((i % square) * s), w, 0, v, !0);
			p.fill();
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
	box = document.getElementById("num")
    canvas = document.getElementById("canvas");
	input = box.value;
    p = canvas.getContext("2d");
	number = parseInt(input);
	if (!isNaN(input) && input <= 10000){
		Q(parseInt(input));
	} else {
		box.value = "";
		box.placeholder = "NaN or > 10K";
	}
}
;
