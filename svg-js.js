var p, t, u, v, x, y, z, primes, svg;

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

primeCombos = function(num){
	var d = 2;
	while (d*d < num){        
		var q = Math.floor(num / d);
		var r = num % d;
		var combo = [d, q, r];
		primes.push(combo);
		d++;
	}
	var finalQ = Math.floor(num / d);
	var finalR = num % d;
	var combo = [d, finalQ, finalR];
	primes.push(combo);
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
	primeVis = ((isPrime == true) && num > 10);
    var a, b = 0, c = a = 0, d = 0;
	primes = [];
	primes = primeCombos(num);
	primeHeight = window.innerHeight - 70;
	primeWidth = window.innerWidth - 50;
	var total = 0;
	for (var i = 0; i < primes.length; i++){
		total += (primes[i][0] + 2);
	}
	console.log(primes);
	total = total - 1;
	pRad = (primeWidth - 200)/total;
	pRad = Math.min(pRad, (primeHeight - 50)/(primes[0][1]));
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
	b || (b = 974);
    a || (a = 718);
    a = Math.min(b, a);
    a = Math.max(a, 350);
    k = Math.round(0.45 * (a - 90))
      , k = Math.max(k, 50)
      , k = Math.min(k, 600)
      , e = 2 * k + 1;
	if (!primeVis){
		width = e;
		height = e;
		m = height/2, l = width/2;
	}
	console.log(primes);
	drawSVG(num);
}

drawSVG = function(num){
	a = [];
    d = [];
    b = [];
	if (!primeVis){
		M(a, d, b, g, 0, m, l, k * (1 - 0.6 / (num + 1)), 0);
	}
	factorization = document.getElementById("status");
	factorization.innerHTML = P(num, g);
	if (!primeVis){
		svg = d3.select("svg").attr("width", width)
	                          .attr("height", height);
	} else {
		svg = d3.select("svg").attr("width", primeWidth)
							  .attr("height", primeHeight);
	}
	svg.selectAll("*").remove();
    j = a.length;
	s = 1 / j;
	if (!primeVis){
		/*for (j -= 1; 0 <= j; j--) {
			m = j * s;
			var circle = svg.append("circle")
                        .attr("cx", a[j])
                        .attr("cy", d[j])
                        .attr("r", b[j])
                        .attr("fill", z[m * z.length | 0]);
		}*/
		var w = pRad/3;
    	var p1, p2, f1 = 1;
		var rectX = 30, rectY = w * 2;	

	    while(f1 < num){
	        var f2 = num / f1;
	        if ( f2 == Math.floor(f2) ){
	            p1 = f1; p2 = f2;
	        }
	        if ( f2 <= f1 ){
	        	break;
	        }
	        f1++;
	    }

	    for (var i = 0; i < p1; i++){
	    	for (var j = 0; j < p2; j++){
	    		var circle = svg.append("circle")
					.attr("cx", rectX + (i * pRad))
					.attr("cy", rectY + (j * pRad))
					.attr("r", w)
					.attr("fill", z[z.length | 0]);
	    	}
	    }
	} else {
		var w = pRad / 3;
		var rectX = 30, rectY = w * 2;	
		var s = pRad;
		for (var i = 0; i < primes.length; i++){
			for (var q = 0; q < primes[i][0]; q++){
				for (var r = 0; r < primes[i][1]; r++){
					var circle = svg.append("circle")
					.attr("cx", rectX + (q * s))
					.attr("cy", rectY + (r * s))
					.attr("r", w)
					.attr("fill", z[q * z.length / primes[i][0] | 0]);
				}
			}
			if (num < 500){
				svg.append("text")
				.attr("dx", rectX + ((primes[i][0] - 1) * s / 2))
				.attr("dy", rectY + (primes[i][1] - 1) * s + 2 * w + 10)
				.attr("fill", "gray")
				.attr("font-size", 20)
				.style("font-family", "Arial Regular")
				.style("text-anchor", "middle")
				.text(primes[i][0] + "×" + primes[i][1] + " + " + primes[i][2]);
			}
			for (var x = 0; x < primes[i][2]; x++){
				var remainder = svg.append("circle")
				.attr("cx", rectX + (primes[i][0] * s))
				.attr("cy", rectY + (x * s))
				.attr("r", w)
				.attr("fill", "red");
			}
			rectX = rectX + (primes[i][0] + 2) * s;
		}
	}
}

/*



rects = svg.selectAll('rect')
    .data(d3.range(20))
    .enter()
    .append('rect')
    .attr('x',function(d,i) { return i * 25 })
    .attr('y',0)
    .attr('width',25)
    .attr('height',500)
    .attr('fill',function(d,i) { return color[i]; })

*/

// Draw a rectangle, and then create function of x and y to actually draw the ind. circles

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
	number = parseInt(input);
	if (!isNaN(input) && number <= 1000){
		Q(parseInt(input));
	} else {
		box.value = "";
		box.placeholder = "NaN or > 1K.";
	}	
};


exportSVG = function(){
	var svgData = $("#svgMain")[0].outerHTML;
	var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
	var svgUrl = URL.createObjectURL(svgBlob);
	var downloadLink = document.createElement("a");
	downloadLink.href = svgUrl;
	downloadLink.download = currNum + ".svg";
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}
